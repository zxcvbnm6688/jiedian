/*************************************

项目名称：Owlfiles

**************************************

[rewrite_local]
^https:\/\/www\.skyjos\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtywj.js

[mitm]
hostname = www.skyjos.com

*************************************/


body = $response.body.replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3').replace(/\"succ":"(.*?)"/g, '\"succ":"true"').replace(/\"dispName":"(.*?)"/g, '\"dispName":"chxm1023"').replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});
