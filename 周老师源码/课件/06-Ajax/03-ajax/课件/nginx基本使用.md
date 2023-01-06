# 1.window下操作 nginx

Nginx是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。其特点是占有内存少，并发能力强，事实上Nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。

Nginx专为性能优化而开发，性能是器最重要的考量，实现上非常注重效率，能经受高负载的考验，据报告能支持高达50,000个并发连接数。

Nginx不仅能做反向代理，实现负载均衡；还能可以作正向代理来进行上网等功能。

## 1.1 启动

双击启动

需要注意：端口不能被占用，配置文件要正确 可以通过命令检查

## 1.2 停止nginx服务

```nginx
nginx -s stop 
```

## 1.3 关闭nginx服务

```nginx
nginx -s quit
```

#### 区别:

- `stop` — 快速关机
- `quit` — 优雅关机

## 1.4 重新加载配置

```nginx
nginx -s reload
```

修改配置文件后需要执行此命令不会影响正在进行的任务

## 1.5 重启服务

```nginx
nginx -s reopen
```

### 1.6 检测配置文件

```nginx
nginx -t -c ./conf/nginx.conf
```

## 1.7 nginx.conf 代理配置

```nginx
server {
    listen      8090; #访问项目的端口
    server_name  127.0.0.1; #访问项目的域名或ip
    location / {
        root   C:/myproject; #项目目录
        index  index.html index.htm;    #入口文件类型
    }

    location /widget {
        proxy_pass https://news.baidu.com; #转发服务器地址
    }
}
```
#### 注意:
 127.0.0.1 与localhost的相比的话,127.0.0.1会加载块一些.

查询占用端口情况

```bash
netstat -ano
```

