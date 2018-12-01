 #开启 History模式
location / {
    try_files $uri $uri/ /index.html;
}

#反向代理
location ~ /proxyapi {
    rewrite  ^/proxyapi/(.*)$  /renren-fast/$1 break;
    proxy_pass  http://console.ranyunlong.com:8080;
}
