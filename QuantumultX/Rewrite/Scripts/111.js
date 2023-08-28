var chxm1023 = JSON.parse($response.body);
const vip1 = '1382066166';

if ($request.url.indexOf(vip1) != -1){
  chxm1023["privilege"] = [
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
  ];
  chxm1023["level"] = 3,
  chxm1023["vip"] = {
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
}
