const express = require('express');
const router = express.Router();
const pool = require('../mysql');

//注册
router.post('/signup', (req, res) => {
    //拿到前端传递的数据
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    console.log(req.body);

    //校验
    if (!uname) {
        resError(res, '帐号不能为空');
        return;
    }
    if (!pwd) {
        resError(res, '密码不能为空');
        return;
    }
    if (uname.length > 10) {
        resError(res, '账号最大长度为10位');
        return;
    }
    if (pwd.length < 8 || pwd.length > 20) {
        resError(res, '密码长度为8~20位字符');
        return;
    }
    let sql = 'select * from users where uname = ?';
    pool.query(sql, uname, (error, results) => {
        if (error) {          
            resError(res, '插入数据时发生异常');
            return;
        }
        if (results.length !== 0) {
            resError(res, '用户名已存在');
            return;
        }
        //校验成功存入数据库
        pool.query('insert into users set ?',{
            uname:uname,
            pwd:pwd
        },(error,results) => {
            if(error) {
                resError(res,'系统发生异常');
                return
            }
        })
        //验证所有错误情况，全部成功后才写res.send
        res.send();
    })
})


//登录
router.post('/signin',(req,res) => {
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    //校验
    if(!uname){
        resError(res,'用户名不能为空');
        return;
    }
    if(!pwd){
        resError(res,'密码不能为空');
        return;
    }
    let sql = 'select * from users where uname = ? and pwd = ?'
    pool.query(sql,[uname,pwd],(error,results)=>{
        if(error){
            resError(res,'系统发生异常');
            return;
        }
        if(results.length===0){
            resError(res,'用户名或密码错误');
            return;
        }
        res.send();
    })
})

function resError(res, msg) {
    res.status(400).send({
        msg: msg
    });
}

module.exports = router;