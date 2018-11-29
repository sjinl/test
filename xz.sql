
set names utf8;
drop database  if exists xuezi;
create database xuezi charset=utf8;
use xuezi;
create table user(
uid int,
uname varchar(20) not null,
upwd varchar(20),
email varchar(15),
phone varchar(15),
sex varchar(4),
use_name varchar(20),
register_time  date

);
insert into user values("1","ss","123","123@qq.com","321","男","李白","2018-10-10");
insert into user values("2","mm","1234","1234@qq.com","4321","男","后裔","2017-10-05");
insert into user values("3","qq","12345","12345@qq.com","54321","女","安其拉","2017-05-21");
#更改记录
#update 表名 set 列名称="修改内容",列名称="修改内容",列名称="修改内容" where 条件限制;
update user set phone="131888888",sex="M",register_time="2017-3-1" where uid="2";
delete from user where uid="3";
