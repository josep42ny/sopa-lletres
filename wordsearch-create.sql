drop database if exists practicadaw;
create database practicadaw;
use practicadaw;

create table User (
    id int primary key auto_increment,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    familyName varchar(255),
    birthday date not null,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null unique,
    constraint ch_password_length check (char_length(password) >= 8)
);

create table Admin (
    id int primary key,
    constraint fk_admin_user foreign key (id) references User(id)
);

create table Color (
    id int primary key,
    hex varchar(7) not null,
    name varchar(255) not null
);

create table Language (
    id int primary key,
    name varchar(255) not null
);

create table Player (
    id int primary key,
    tableColorId int,
    buttonColorId int,
    languageId int,
    constraint fk_player_user foreign key (id) references User(id),
    constraint fk_player_tableColor foreign key (tableColorId) references Color(id),
    constraint fk_player_buttonColor foreign key (buttonColorId) references Color(id),
    constraint fk_player_language foreign key (languageId) references Language(id)
);

create table Difficulty (
    id int primary key,
    difficulty varchar(255) not null,
    weight double not null
);

create table Puzzle (
    id int primary key,
    authorId int not null,
    difficultyId int not null,
    dateCreated datetime not null default current_timestamp,
    constraint fk_puzzle_admin foreign key (authorId) references Admin(id),
    constraint fk_puzzle_difficulty foreign key (difficultyId) references Difficulty(id)
);

create table Word (
    id int primary key,
    word varchar(255) not null
);

create table Letter (
    id int not null auto_increment,
    puzzleId int not null,
    letter varchar(255) not null,
    posX tinyint unsigned not null,
    posY tinyint unsigned not null,
    primary key (id, puzzleId),
    constraint fk_letter_puzzle foreign key (puzzleId) references Puzzle(id)
);

create table Puzzle_Word (
    puzzleId int not null,
    wordId int not null,
    startX tinyint unsigned not null,
    endX tinyint unsigned not null,
    startY tinyint unsigned not null,
    endY tinyint unsigned not null,
    primary key (puzzleId, wordId),
    constraint fk_puzzle_word_puzzle foreign key (puzzleId) references Puzzle(id),
    constraint fk_puzzle_word_word foreign key (wordId) references Word(id)
);

create table Puzzle_Player (
    puzzleId int not null,
    playerId int not null,
    score tinyint unsigned not null,
    primary key (puzzleId, playerId),
    constraint fk_puzzle_player_puzzle foreign key (puzzleId) references Puzzle(id),
    constraint fk_puzzle_player_word foreign key (playerId) references Player(id)
);


-- INSERTS
insert into User (id, firstName, lastName, familyName, birthday, username, password, email)
values (1, 'Josep', 'Fortuny', 'Ferreiro', '1919-11-7', 'josep42ny', '123456567', 'cum@cum.cum'),
(2, "Toni", "Riera", "Colomar", "2004-08-13", "Trc300online", "123456789", "Triera265@alumnes.politecnicllevant.cat");

insert into Color (id, hex, name)
values (1, '#000000', 'Black'),
(2, '#ff0000', 'Red'),
(3, '#ffffff', 'White');

insert into Language (id, name)
values (1, 'Català'),
(2, 'Euskera'),
(3, 'Galego'),
(4, 'English'),
(5, 'Castellano');

insert into Difficulty (id, difficulty, weight)
values (1, 'Fàcil', 0.5),
(2, 'Mitja', 1.0),
(3, 'Difícil', 1.5);

insert into Admin values(2);

insert into Player
values(1,1,1,1),
(2,1,1,1);

-- Procedures

delimiter //

create procedure checkLogin(
    in in_username varchar(255),
    in in_password varchar(255),
    out user_id int(11)
) 
begin

select id as user_id from User where
username = in_usarname and password = in_password;

end //

delimiter ;

/*    declare done boolean default false;
    
    declare cur cursor for select username, password form User;

    declare continue handler  for not found set done = true;

    open cur;

    set user_id = 0;

    log: loop

        fetch cur into 

            if 
            
*/