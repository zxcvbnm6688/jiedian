/*
WPS Office 解锁部分功能
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/zxcvbnm6688/jiedian/main/QuantumultX/Rewrite/Scripts/wps.js
[mitm]
hostname = *account.wps.cn
**************************/

var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    {
      "times" : 541826,
      "spid" : "data_recover",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "ocr",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf2doc",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_merge",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_sign",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "pdf_split",
      "expire_time" : 4092599349
    },
    {
      "times" : 541826,
      "spid" : "speech_record",
      "expire_time" : 4092599349
    }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    "memberid" : 40,
    "expire_time" : 4092599349,
    "name" : "超级会员",
    "has_ad" : 0,
    "enabled" : [
      {
        "name" : "超级会员",
        "memberid" : 40,
        "expire_time" : 4092599349
      },
      {
        "name" : "WPS会员",
        "memberid" : 20,
        "expire_time" : 4092599349
      },
      {
        "name" : "稻壳会员",
        "memberid" : 12,
        "expire_time" : 4092599349
      }
    ]
  };
  wealth: 0,
};

$done({ body: JSON.stringify(obj) });
