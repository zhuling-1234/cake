const express = require('express');
const router = express.Router();
const pool = require('../mysql');

router.get('/list', (req, res) => {
  //分类ID
  const categoryTitle = req.query.title;
  if (!categoryTitle) {
    resError(res, '商品分类ID不能为空');
    return;
  }

  pool.query(
    'select * from categories where cname = ?',
    categoryTitle,
    (error, results) => {
      if (error) {
        resError(res, '服务器发生错误');
        return;
      }
      console.log(results);
      let category = results[0];
      let sql = ' select * from products where categoryId=?';
      pool.query(sql, category.id, (error, results) => {
        if (error) {
          resError(res, '服务器发生错误');
          return;
        }
        let data = [
          {
            title: {
              title: category.cname,
              subtitle: category.subtitle,
            },
            items: [],
          },
        ];
        for (i = 0; i < results.length; i++) {
          data[0].items.push({
            id: results[i].id,
            title: results[i].title,
            subtitle: results[i].pname,
            price: results[i].price + results[i].danwei,
            image: results[i].src,
          });
        }
        res.send(data);
      });
    }
  );
});

router.post('/cart', (req, res) => {
  //分类ID
  const ids = req.body.ids;
  if (!ids) {
    resError(res, 'ids不能为空');
    return;
  }
  pool.query(
    'select * from products where id in (?)',
    [ids],
    (error, results) => {
      if (error) {
        resError(res, '服务器发生错误');
        return;
      }

      res.send(results);
    }
  );
});

function resError(res, msg) {
  res.status(400).send({
    msg: msg,
  });
}

module.exports = router;
