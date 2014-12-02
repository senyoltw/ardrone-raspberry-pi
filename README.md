ardrone-raspberry-pi
====================
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="3" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"><div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://instagram.com/p/uxVuyNlbPl/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_top">AR Droneにraspberry pi乗っけて自動操縦にして、センサつけて正面に障害物があったら避けるようにした！！</a></p><p style="font-family:Arial,sans-serif;color:#c9c8cd; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">senyoltwさん(@senyoltw)が投稿した動画&nbsp;- <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2014-10-30T09:03:50+00:00">10月 10, 2014 at 2:03午前 PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>


Need! [Parrot AR Drone 2.0](http://www.amazon.co.jp/gp/product/B00HYO158Q?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00HYO158Q&linkCode=shr&tag=senyoltw-22&qid=1414738801&sr=8-3&keywords=AR+Drone+2)  
Need!  [Raspberry Pi B+](http://www.amazon.co.jp/gp/product/B00LT4BOK6?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00LT4BOK6&linkCode=shr&tag=senyoltw-22&qid=1414829539&sr=8-1&keywords=Raspberry+Pi)  
Need! [HC-SR04](http://www.amazon.co.jp/gp/product/B004U8TOE6?ie=UTF8&camp=1207&creative=8411&creativeASIN=B004U8TOE6&linkCode=shr&tag=senyoltw-22&qid=1414829665&sr=8-1&keywords=HC-SR04)  
Install! [node.js](http://ja.wikipedia.org/wiki/Node.js)  

### Introduction
AR.Drone 2.0をRaspberry Piで操作するプログラム
Rspberry Piの環境構築手順はこちら  
[RaspberryPi_setup.md](RaspberryPi_setup.md)
### How to install
```bash
# ssh Raspberry Pi B+
git clone https://github.com/senyoltw/ardrone-raspberry-pi.git
cd ardrone-raspberry-pi

npm install
# accses Wi-Fi AR Drone
npm test
```

### AR Drone 2.0とRaspberry Pi B+について
* 操作  
AR Drone 2.0は起動するとアクセスポイントが発生するので、その電波とRaspberry Piを接続すれば操作が可能になる。なのでRaspberry PiとAR Droneを接続するUSBWi-Fiが最低1つ、ワイヤレスでコマンドを投入することを考えるともう1つ必要になる。  
もしくは、AR Droneのアクセスポイントを経由してRaspberry Piへsshログインすることで対応もできる。
* 電源  
AR Droneのバッテリー接続部分からUSBがでている。これは本来[GPSフライトレコーダー](http://www.amazon.co.jp/gp/product/B00DAL6D3Y?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00DAL6D3Y&linkCode=shr&tag=senyoltw-22&qid=1414830236&sr=8-2&keywords=GPS+ar+drone)を接続するものだが、ここから電源を取得できる。このUSBポートの電源からRaspberry Piが起動することは確認済み
* 重さ  
AR DroneにRaspberry Piを搭載すると重くなる。試して見たところ概算200g程度なら大丈夫なので、Raspberry Piと複数センサ程度なら搭載したまま飛行できる。ただし、client.animateによる空中回転はアクション後、地面と衝突してしまうので、その程度の影響はある。よってRaspberry Piで操作する場合はアクションは実行すべきではない
