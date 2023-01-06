const { log } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/login', function(req, res) {

    // 生成 HTML 文本
    console.log(req.query);

    // 将HTML文本响应给浏览器
    res.redirect('http://192.168.1.212:8080/03-提交地址-name.html?name=' + req.query.name);　
});

// 查询学生
router.get('/getStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {
        // 如果发生错误，打印错误信息并退出函数
        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        // 将要返回的结果
        var results = [];

        // 指定的id
        var myid = req.query.id;

        // 指定的name
        var myname = req.query.name;

        console.log(myid)
        console.log(myname)

        // 获取指定id的学生信息
        if (myid && !myname) {
            console.log(1);
            data.forEach(function(item, index) {
                if (item.id == myid) {
                    results.push(item);
                }
            });

        } else if (myname && !myid) {
            console.log(2);
            // 获取指定name的学生信息
            data.forEach(function(item, index) {
                if (item.name && item.name.includes(myname)) {
                    results.push(item);
                }
            });
        } else if (myname && myid) {
            console.log(3);
            data.forEach(function(item, index) {
                if (item.id == myid && item.name && item.name.includes(myname)) {
                    results.push(item);
                }
            });
        } else {
            // 获取所有学生
            results = data;
        }

        res.status(200).send(results);

    });
});


// 添加学生
router.post('/addStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {
        // 试着将数据解析成数组
        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        // 将时间戳作为学生ID
        req.body.id = Date.now().toString();

        // 设置学生的创建时间
        // 设置学生的创建时间
        if (!req.body.date) {
            req.body.date = new Date().toLocaleDateString();
        };

        // 设置学生的修改时间
        // req.body.update = new Date().toLocaleDateString();

        // 将题型信息添加到数组中
        data.push(req.body);

        // 将数据写回到文件中
        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {
            if (err) {
                res.status(500).end();
                return console.log(err);
            }

            res.status(200).send(data);
        });
    });
});

// 删除学生
router.post('/removeStudent', function(req, res) {
    console.log(req.body.id);
    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {

        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        var index = -1;

        var myid = req.body.id;
        console.log(req.myid);

        data.forEach(function(item, i) {
            if (item.id == myid) {
                index = i;
            }
        });

        if (index >= 0) {
            data.splice(index, 1);
        }

        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {

            if (err) {
                res.status(500).end();
                return console.log(err);
            }

            res.status(200).send(data);
        });
    });
});

// 修改学生
router.post('/updateStudent', function(req, res) {

    fs.readFile(__dirname + './../data/students.json', 'utf8', function(err, data) {

        if (err) {
            res.status(500).end();
            return console.log(err);
        }

        try {
            data = JSON.parse(data);
        } catch (e) {
            res.status(500).end();
            return console.log(e);
        }

        data.forEach(function(item, index) {
            if (item.id == req.body.id) {
                data[index] = req.body;
            }
        });

        fs.writeFile(__dirname + './../data/students.json', JSON.stringify(data, null, 4), function(err) {

            if (err) {
                res.status(500).end();
                return console.log(err);
            }

            res.status(200).send(data);
        });
    });
});


router.get('/jsonpdemo', function(req, res) {


    console.log('前台传递过来的方法名为：' + req.query.callback);

    var data = [
        { name: "张三" },
        { name: "李四" },
        { name: "王美丽" }
    ];
    data = JSON.stringify(data);
    var results = req.query.callback + '(' + data + ')';
    // updatePage(data)
    res.status(200).send(results);
    // res.status(200).send(fun(data));
});
// module.exports 提供了暴露接口的方法
module.exports = router;