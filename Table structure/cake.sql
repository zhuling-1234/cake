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

-------------------------------------------------------------
--商品分类表
create table categories(
    id varchar(10) primary key,
    cname varchar(50) not null,
    subtitle varchar(50) not null
);
--商品分类表 数据
insert into categories values('1','蛋糕','新鲜乳脂奶油蛋糕');
insert into categories values('2','冰淇淋','10天生命的意式杰拉朵冰淇淋');
insert into categories values('3','咖啡下午茶','奶羹和雪酪');
insert into categories values('4','面包','面包');
insert into categories values('5','常温蛋糕','常温蛋糕');
insert into categories values('6','设计师礼品','设计师礼品专区');

-------------------------------------------------------------
--商品表
create table products(
    id varchar(10) primary key,
    src varchar(500) not null,
    title varchar(50) not null,
    pname varchar(50) not null,
    price decimal(5,2) not null,
    danwei varchar(20) not null,
    categoryId varchar(10) not null,
    foreign key(categoryId) references categories(id)
);
--商品表数据
--分类一
insert into products values('1-1','//static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg','Framboise Cake','蔓生',198.00,'/454g(1.0磅)','1');
insert into products values('1-2','//static.21cake.com//upload/images/8887a7814dfc724f39b125dc1b7a6ea2.jpeg','Tofu cheese Cake','豆酪',298.00,'/454g(1.0磅)','1');
insert into products values('1-3','//static.21cake.com//upload/images/3f2c8d9b56c03e7cdced4af65a907bf5.jpg','Calamondin&Calamansi','橘与桔',198.00,'/454g(1.0磅)','1');

insert into products values('1-4','//static.21cake.com//upload/images/887535ff37a336eb09fe99170c9b3f6b.jpg','Deep Baileys Lovers','深爱',398.00,'/454g(1.0磅)','1');
insert into products values('1-5','//static.21cake.com//upload/images/505c71f60ac4b3d96744a6bb54d63cb1.jpg','Café Mocha','摩卡',298.00,'/454g(1.0磅)','1');
insert into products values('1-6','//static.21cake.com//upload/images/59954fac59f25d03564b474b1a10e385.jpg','Teatime','浅草',198.00,'/454g(1.0磅)','1');
insert into products values('1-7','//static.21cake.com//goods/145933696681.jpg','The Moon Cake','中秋坚果芝士慕斯',178.00,'/454g(1.0磅)','1');
insert into products values('1-8','//static.21cake.com//upload/images/7c8bb6800b5ff00ab44d7980585ead35.jpg','Black and White Chocolate Mousse','黑白巧克力慕斯彼尔德（ＨＢＤ）',198.00,'/454g(1.0磅)','1');
insert into products values('1-9','//static.21cake.com//upload/images/6b8dd4e2c5bd0f908b224ba0abe46ad8.jpg','Pine Stone Cowboy','松仁淡奶（木糖醇）',148.00,'/454g(1.0磅)','1');
insert into products values('1-10','//static.21cake.com//upload/images/8b1e56924f869afde7dae8243900af8a.jpg','Cool&Hot ','冻慕斯与焗芝士',198.00,'/454g(1.0磅)','1');
insert into products values('1-11','//static.21cake.com//upload/images/22209c54953376c0478b4ac98490f95c.jpg','Mango Cream Cake','芒果奶油蛋糕',298.00,'/454g(1.0磅)','1');
--分类二
insert into products values('2-1','//static.21cake.com//upload/images/4d839ee123f383d1fd13c47967412bf7.jpg','Milk Gelato','原味牛乳冰淇淋',48.00,'/80g(盒)','2');
insert into products values('2-2','//static.21cake.com//upload/images/c227866897b665ad84d40e0ed4ea1591.jpg','Affogato','夏日-Affogato组合',55.00,'/份','2');

--分类三
insert into products values('3-1','//static.21cake.com//upload/images/faa46fabe94fac4d33c891aa37cef2fb.jpg','奶羹和雪酪','奶羹和雪酪（4口味组合）',55.00,'/80g(盒)','3');
insert into products values('3-2','//static.21cake.com//upload/images/55e21029a4094d9435355e2960e199e0.jpg','奶羹和雪酪','奶羹和雪酪（荔枝奶羹+坚果雪酪 ）',48.00,'/80g(盒)','3');
insert into products values('3-3','//static.21cake.com//upload/images/81e3bc59f425c7588a9ae914e0065c97.jpg','奶羹和雪酪','奶羹和雪酪（原味奶羹+蓝莓雪酪  ）',25.00,'/份','3');

--分类四
insert into products values('4-1','//static.21cake.com//upload/images/ac8ab4dcb7951d0d34074f3fe6fda627.png','Childrens Set Meal ','儿童套餐',45.00,'/80g(盒)','4');
insert into products values('4-2','//static.21cake.com//upload/images/40e56e1a831d7e997a50a2f5da531850.png','Classic Set Meal ','经典套餐',45.00,'/80g(盒)','4');
insert into products values('4-3','//static.21cake.com//upload/images/47696431578cb52ce8f8788c9927f8ac.jpg','Childrens Set Meal ','《家常面包》（京沪杭满39元包邮）',45.00,'/80g(盒)','4');
insert into products values('4-4','//static.21cake.com//upload/images/2665680d079329234b1c999ab5267bdd.jpg','Brown Sugar, Date And Longan Bread','红糖红枣桂圆软欧（京沪满39元包邮）',45.00,'/80g(盒)','4');
insert into products values('4-5','//static.21cake.com//upload/images/205c7b4a9b21f7beb4c52406fa005018.jpg','Childrens Set Meal ','原味可颂（京沪杭满39元包邮）',45.00,'/80g(盒)','4');
insert into products values('4-6','//static.21cake.com//upload/images/f05d5aeaf79a28f303cd00feeade8efc.jpg','Childrens Set Meal ','阳光葡萄卷（京沪杭满39元包邮）',45.00,'/80g(盒)','4');
insert into products values('4-7','//static.21cake.com//upload/images/e7118a05b2386ca80ad2d1103c2c1ce1.jpg','Childrens Set Meal ','核桃派（京沪杭满39元包邮）',45.00,'/80g(盒)','4');
insert into products values('4-8','//static.21cake.com//upload/images/2fcbdf585d61f0c243277090e6424350.png','Caramel Almond Crisps','焦糖杏仁酥塔饼干',45.00,'/80g(盒)','4');

--分类五
insert into products values('5-1','//static.21cake.com//upload/images/16402f5f4f006231871d81dc71f35b05.jpg','Pound cake slice','磅蛋糕切片（核桃）',8.00,'/80g(盒)','5');
insert into products values('5-2','//static.21cake.com//upload/images/be1df159b4d226180e99ce09194b7a41.jpg','Pound cake slice','磅蛋糕切片（杏仁）',18.00,'/80g(盒)','5');
insert into products values('5-3','//static.21cake.com//upload/images/4430cb04cdaf6de8e4e23323475b871b.jpg','Pound cake slice','磅蛋糕切片（黑朗姆）',13.00,'/80g(盒)','5');

--分类六
insert into products values('6-1','//static.21cake.com//upload/images/9f3230040330f4e665fa045cdb60defa.jpg','Square candle','方形蜡烛',28.00,'/80g(盒)','6');
insert into products values('6-2','//static.21cake.com//upload/images/676d157fcdbfb8dfdf006745d1849bc5.jpg','Square candle','圣诞绿蜡烛',18.00,'/80g(盒)','6');
insert into products values('6-3','//static.21cake.com//upload/images/02c6e05c87abf9faa6a7960bae8f113f.jpg','Square candle','拷贝蜡烛-爱尔兰咖啡',18.00,'/80g(盒)','6');
insert into products values('6-4','//static.21cake.com//upload/images/1a2bb9decfcadfc87cd00c9bb1843546.jpg','Square candle','拷贝蜡烛-抹茶和栗',18.00,'/80g(盒)','6');
insert into products values('6-5','//static.21cake.com//upload/images/1468954437829687f956cfae081fa0e6.jpg','Square candle','设计师牛皮本',48.00,'/80g(盒)','6');

