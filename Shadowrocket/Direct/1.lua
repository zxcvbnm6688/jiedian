mode=wap;
listen_port=65080;
daemon=on;
worker_proc=0;
uid=0;
http_ip=cloudnproxy.n.shifen.com;
http_port=443;
http_del="Host,X-Online-Host";
http_first="[M] http://[H][U] [V]\r\nHost: 153.3.236.22:443\r\nX-T5-Auth: 683556433\r\nUser-Agent:baiduboxapp\r\n";
https_connect=on;
https_ip=cloudnproxy.n.shifen.com;
https_port=443;
https_del="User-Agent";
https_first="[M] [H] [V]\r\nHost: 153.3.236.22:443\r\nX-T5-Auth: 683556433\r\nUser-Agent:baiduboxapp\r\n";
dns_tcp=http;
dns_listen_port=65053;
dns_url="119.29.29.29";
