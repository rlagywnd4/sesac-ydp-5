-- datbase 인코딩 다시 정의해서 생성
show databases;
drop database sessac;

drop table visitor;

-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac character set utf8mb4 collate utf8mb4_unicode_ci;

use sesac;
create table visitor (
    id INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);
desc visitor;
select * from visitor;
desc visitor;
insert into visitor values(NULL, '홍길동','내가 왔다.');
insert into visitor values(NULL, '이찬혁','으라차차');
insert into visitor values(NULL, '이수현','안뇽');

-- user 라는 새로운 계정(mysql  접속 가능한 계정) 생성
-- mysql 암호화 방식이 달라져서 with mysql_native_password을 추가해야함
CREATE USER 'user'@'%' IDENTIFIED with mysql_native_password by '1234';
-- user 계정에 대해서 모든 권한 부여 = (DCL 중에서 grant) (*.*:모든 데이터베이스의 모든 테이블)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- mysql 캐시 새로고침
flush privileges;

-- mysql데이터베이스에 유저 정보가 있음
show databases;
select * from mysql.user;
