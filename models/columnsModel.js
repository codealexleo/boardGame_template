const pool = require("../config/database");

class Column {
    constructor(position, rule, valuePlayer, valueOpponent) {
        this.position = position;
        this.rule = rule;
        this.valuePlayer = valuePlayer;
        this.valueOpponent = valueOpponent;
    }
    static async getColumns(game) {
        try {
            let [dbColumns] =
            await pool.query("select bcol_pos, bcol_rule, player.ugc_value as player_value, opp.ugc_value as opp_value from board_column left join user_game_column as player on player.ugc_bcol_id = bcol_id and player.ugc_ug_id = ? left join user_game_column as opp on opp.ugc_bcol_id = bcol_id and opp.ugc_ug_id = ? order by bcol_pos ASC",
            [game.player.id,game.opponents[0].id])
            let columns = [];
            for (let dbColumn of dbColumns) {
                columns.push(new Column(dbColumn.bcol_pos, dbColumn.bcol_rule, dbColumn.player_value, dbColumn.opp_value));
            }
            return { status: 200, result: columns};
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

}
module.exports = Column