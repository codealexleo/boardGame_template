create database boardgame;

use boardgame;

create table user (
    usr_id int not null auto_increment,
    usr_name varchar(60) not null,
    usr_pass varchar(200) not null, 
    usr_token varchar(200),
    primary key (usr_id));

create table game (
    gm_id int not null auto_increment,
    gm_turn int not null default 1,
    gm_state_id int not null,
    primary key (gm_id));

create table game_state (
    gst_id int not null auto_increment,
    gst_state varchar(60) not null,
    primary key (gst_id));

create table user_game (
    ug_id %player_id%,
    ug_user_id int not null,
    ug_game_id int not null,
    ug_state_id = 3,
    ug_dice %value%,
    primary key (ug_id));

create table user_game_state (
    ugst_id int not null auto_increment,
    ugst_state varchar(60) not null,
    primary key (ugst_id));

create table board_column (
    bcol_id int not null auto_increment,
    bcol_pos int not null,
    bcol_rule varchar(50) not null,
    primary key (bcol_id));

create table user_game_column (
    ugc_id int not null auto_increment,
    ugc_ug_id int not null,
    ugc_bcol_id int not null,
    ugc_value int not null,
    primary key (ugc_id));

# Foreign Keys

alter table user_game_column add constraint ugc_fk_ug
            foreign key (ugc_ug_id) references user_game(ug_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game_column add constraint ugc_fk_col
            foreign key (ugc_bcol_id) references board_column(bcol_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table game add constraint game_fk_match_state
            foreign key (gm_state_id) references game_state(gst_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_user
            foreign key (ug_user_id) references user(usr_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_game
            foreign key (ug_game_id) references game(gm_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_user_game_state
            foreign key (ug_state_id) references user_game_state(ugst_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;