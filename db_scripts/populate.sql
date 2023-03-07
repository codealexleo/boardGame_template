# Do not change the order or names of states 
#(the code is assuming specific IDs and names)
# You can add more in the end
insert into game_state (gst_state) values ('Waiting');
insert into game_state (gst_state) values ('Started');
insert into game_state (gst_state) values ('Finished');
insert into game_state (gst_state) values ('Canceled');

# Do not change the order, but you can add more in the end
insert into user_game_state (ugst_state) values ('Waiting');
insert into user_game_state (ugst_state) values ('Roll');
insert into user_game_state (ugst_state) values ('Place');
insert into user_game_state (ugst_state) values ('Won');
insert into user_game_state (ugst_state) values ('Lost');
insert into user_game_state (ugst_state) values ('Tied');

# Default board
insert into board_column (bcol_pos,bcol_rule) values(1,"Greater");
insert into board_column (bcol_pos,bcol_rule) values(2,"Greater");
insert into board_column (bcol_pos,bcol_rule) values(3,"Odd");
insert into board_column (bcol_pos,bcol_rule) values(4,"Smaller");
insert into board_column (bcol_pos,bcol_rule) values(5,"Smaller");

# Created 2 users in a match, user 2 (me2) is now at the start of his turn
INSERT INTO user VALUES (1,'me','$2b$10$Wemfac2wY/7RSCdKxuYUL.GV2clfhXC66OL76uCpDFUmpYZ/bGZtW','48MnTVJ6sKIvanVHbP5Vx5rysbYrVN4EbYmk4D8xESdfm1hx8jDfNFZGNw9OZs'),(2,'me2','$2b$10$6j2xIDnnxv.TLfBSstbbO.qE7wFTf5envx/uijiFjCP3slsy7EE4K','dQ7NrsbPsuF81xFGNioR1K0tiYkjtxOhemcgMhuFIS68VrFUC9gggm3JCgzkqe');
INSERT INTO game VALUES (1,1,2);
INSERT INTO user_game VALUES (1,1,1,2,NULL),(2,2,1,1,NULL);

# Both players played 3 times
#me2
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (2,4,1);
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (2,2,4);
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (2,3,3);
#me
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (1,1,4);
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (1,3,1);
INSERT INTO user_game_column (ugc_ug_id,ugc_bcol_id,ugc_value) VALUES (1,5,2);
