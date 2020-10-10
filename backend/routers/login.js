const express = require('express');
const router = express.Router();
const pool = require('../mysql');

//注册
router.post('/signup', (req, res) => {
    //拿到前端传递的数据
    const uname = req.body.uname;
    const pwd = req.body.pwd;

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
    if (pwd) {
        resError(res, '密码长度为8~20位字符');
        return;
    }
    let sql = 'select * from users where uname = ?';
    pool.query(sql, uname, (error, results) => {
        if (error) throw err;
        if (results.length !== 0) {
            res.send('用户已存在');
            return;
        }
    })
})