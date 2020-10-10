set names utf8;
drop database if exists cake;
create database cake charset=utf8;
use cake;
--用户表
create table users(
    id int primary key auto_increment,
    uname varchar(10) not null,
    pwd varchar(20) not null
);
--用户表数据
insert into users values(null,'小仙女','xxn123456');
insert into users values(null,'周杰伦','zjl123456');
insert into users values(null,'大玲玲','dll123456');

