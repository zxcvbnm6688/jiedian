listen_port=65080;
worker_proc=0;
daemon=on;
uid=0;
http_others=on;
http_ip=183.240.98.84;
http_port=443;
http_del="X-Online-Host,Host,X-T5-Auth";
http_first="[M] http://[H][U] [V]\r\nHost: ascdn.baidu.com\r\nX-T5-Auth: 1951164069\r\n";
https_connect=on;
https_ip=183.240.98.84;
https_port=443;
https_del="X-Online-Host,Host,X-T5-Auth";https_first="[M] [H] [V]\r\nHost: ascdn.baidu.com\r\nX-T5-Auth: 1951164069\r\n";
dns_tcp=http;
dns_listen_port=65053;
dns_url="119.29.29.29";
