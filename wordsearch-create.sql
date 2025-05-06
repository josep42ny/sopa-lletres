drop database if exists practicadaw;
create database practicadaw;
use practicadaw;

create table User (
    id int primary key auto_increment,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    familyName varchar(255),
    birthday date not null,
    username varchar(255) not null unique,
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
    constraint fk_player_user foreign key (id) references User(id)
    on delete cascade,
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
    name varchar(255) not null,
    authorId int not null,
    difficultyId int not null,
    dateCreated datetime default current_timestamp,
    constraint fk_puzzle_admin foreign key (authorId) references Admin(id),
    constraint fk_puzzle_difficulty foreign key (difficultyId) references Difficulty(id)
);

create table Word (
    id int primary key auto_increment,
    word varchar(255) not null
);

create table Letter (
    id int not null auto_increment,
    puzzleId int not null,
    letter varchar(255) not null,
    pos tinyint not null,
    primary key (id, puzzleId),
    constraint fk_letter_puzzle foreign key (puzzleId) references Puzzle(id)
    on delete cascade
);

create table Puzzle_Word (
    puzzleId int not null,
    wordId int not null,
    start tinyint unsigned not null,
    end tinyint unsigned not null,
    primary key (puzzleId, wordId),
    constraint fk_puzzle_word_puzzle foreign key (puzzleId) references Puzzle(id)
    on delete cascade,
    constraint fk_puzzle_word_word foreign key (wordId) references Word(id)
);

create table Puzzle_Player (
    puzzleId int not null,
    playerId int not null,
    score smallint unsigned not null,
    primary key (puzzleId, playerId),
    constraint fk_puzzle_player_puzzle foreign key (puzzleId) references Puzzle(id)
    on delete cascade,
    constraint fk_puzzle_player_word foreign key (playerId) references Player(id)
    on delete cascade
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

insert into Puzzle (id, name, authorId, difficultyId)
values (1, 'Roba d\'estiu', 2, 1),
(2, 'Animals del desert', 2, 3);

insert into Puzzle_Player (puzzleId, playerId, score)
values (1, 1, 100),
(1, 2, 200),
(2, 1, 200),
(2, 2, 300);

insert into Letter (puzzleId, letter, pos)
values
(1, 'a', 0),
(1, 'b', 1),
(1, 'c', 2),
(1, 'd', 3),
(1, 'e', 4),
(1, 'f', 5),
(1, 'g', 6),
(1, 'h', 7),
(1, 'i', 8),
(1, 'j', 9),
(1, 'k', 10),
(1, 'l', 11),
(1, 'm', 12),
(1, 'n', 13),
(1, 'o', 14),
(1, 'p', 15),
(1, 'q', 16),
(1, 'r', 17),
(1, 's', 18),
(1, 't', 19),
(1, 'u', 20),
(1, 'v', 21),
(1, 'w', 22),
(1, 'x', 23),
(1, 'y', 24),
(1, 'z', 25),
(1, 'a', 26),
(1, 'b', 27),
(1, 'c', 28),
(1, 'd', 29),
(1, 'e', 30),
(1, 'f', 31),
(1, 'g', 32),
(1, 'h', 33),
(1, 'i', 34),
(1, 'j', 35),
(1, 'k', 36),
(1, 'l', 37),
(1, 'm', 38),
(1, 'n', 39),
(1, 'o', 40),
(1, 'p', 41),
(1, 'q', 42),
(1, 'r', 43),
(1, 's', 44),
(1, 't', 45),
(1, 'u', 46),
(1, 'v', 47),
(1, 'w', 48),
(1, 'x', 49),
(1, 'y', 50),
(1, 'z', 51),
(1, 'a', 52),
(1, 'b', 53),
(1, 'c', 54),
(1, 'd', 55),
(1, 'e', 56),
(1, 'f', 57),
(1, 'g', 58),
(1, 'h', 59),
(1, 'i', 60),
(1, 'j', 61),
(1, 'k', 62),
(1, 'l', 63),
(1, 'm', 64),
(1, 'n', 65),
(1, 'o', 66),
(1, 'p', 67),
(1, 'q', 68),
(1, 'r', 69),
(1, 's', 70),
(1, 't', 71),
(1, 'u', 72),
(1, 'v', 73),
(1, 'w', 74),
(1, 'x', 75),
(1, 'y', 76),
(1, 'z', 77),
(1, 'a', 78),
(1, 'b', 79),
(1, 'c', 80),
(1, 'd', 81),
(1, 'e', 82),
(1, 'f', 83),
(1, 'g', 84),
(1, 'h', 85),
(1, 'i', 86),
(1, 'j', 87),
(1, 'k', 88),
(1, 'l', 89),
(1, 'm', 90),
(1, 'n', 91),
(1, 'o', 92),
(1, 'p', 93),
(1, 'q', 94),
(1, 'r', 95),
(1, 's', 96),
(1, 't', 97),
(1, 'u', 98),
(1, 'v', 99);

insert into Word (word)
values ('anec'),
('cavall'),
('gos'),
('gat'),
('os'),
('ratoli'),
('guineu'),
('ovella'),
('cobra'),
('llop'),
('riu'),
('lluna'),
('mar'),
('cel'),
('pedra'),
('flors'),
('terra'),
('vent'),
('pluja'),
('sol'),
('taula'),
('cadira'),
('porta'),
('llit'),
('sofa'),
('rellotge'),
('cortina'),
('mirall'),
('llum'),
('parets'),
('llibre'),
('motxil'),
('aula'),
('profe'),
('fulla'),
('deures'),
('classe'),
('llapis'),
('goma'),
('tinta'),
('pa'),
('sucre'),
('arros'),
('pasta'),
('sopa'),
('oli'),
('formatge'),
('peix'),
('carn'),
('fruita');

insert into Puzzle_Word (puzzleId, wordId, start, end)
values (1, 1, 1, 1),
(1, 2, 1, 1),
(1, 3, 1, 1),
(1, 4, 1, 1),
(1, 5, 1, 1),
(1, 6, 1, 1),
(1, 7, 1, 1),
(1, 8, 1, 1),
(1, 9, 1, 1),
(1, 10, 1, 1);

create temporary table temp (
    word varchar(255),
    start_pos tinyint unsigned,
    end_pos tinyint unsigned,
    letter varchar(1),
    pos tinyint
);

delimiter //

create procedure createPuzzle(
    in id_difficulty int,
    in id_author int,
    in description varchar(255),
    in name varchar(255)
)
begin
    declare temp_word varchar(255);
    declare temp_start tinyint unsigned;
    declare temp_end tinyint unsigned;

    declare temp_letter varchar(1);
    declare temp_pos tinyint;

    declare word_id int;
    declare id_puzzle int;

    declare done boolean default false;

    declare curWord cursor for
        select distinct word, start_pos, end_pos from temp;

    declare curLetter cursor for
        select letter, pos from temp;

    declare continue handler for not found set done = true;

    -- Get next puzzle ID
    select ifnull(max(id), 0) + 1 into id_puzzle from Puzzle;

    insert into Puzzle (id, name, authorId, difficultyId, description)
    values (id_puzzle, name, id_author, id_difficulty, description);

    -- Process words
    set done = false;
    open curWord;
    read_words: loop
        fetch curWord into temp_word, temp_start, temp_end;
        if done then leave read_words; end if;

        if not exists (select 1 from Word where word = temp_word) then
            insert into Word (word) values (temp_word);
        end if;

        select id into word_id from Word where word = temp_word limit 1;

        insert into Puzzle_Word (puzzleId, wordId, start, end)
        values (id_puzzle, word_id, temp_start, temp_end);
    end loop;
    close curWord;

    -- Process letters
    set done = false;
    open curLetter;
    read_letters: loop
        fetch curLetter into temp_letter, temp_pos;
        if done then leave read_letters; end if;

        insert into Letter (puzzleId, letter, pos)
        values (id_puzzle, temp_letter, temp_pos);
    end loop;
    close curLetter;
end //

delimiter ;
