ardrone-raspberry-pi
====================
Need! [Parrot AR Drone 2.0](http://www.amazon.co.jp/gp/product/B00HYO158Q?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00HYO158Q&linkCode=shr&tag=senyoltw-22&qid=1414738801&sr=8-3&keywords=AR+Drone+2)  
Need!  [Raspberry Pi B+](http://www.amazon.co.jp/gp/product/B00LT4BOK6?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00LT4BOK6&linkCode=shr&tag=senyoltw-22&qid=1414829539&sr=8-1&keywords=Raspberry+Pi)  
Need! [HC-SR04](http://www.amazon.co.jp/gp/product/B004U8TOE6?ie=UTF8&camp=1207&creative=8411&creativeASIN=B004U8TOE6&linkCode=shr&tag=senyoltw-22&qid=1414829665&sr=8-1&keywords=HC-SR04)  
Install! [node.js](http://ja.wikipedia.org/wiki/Node.js)  

### Introduction
AR.Drone 2.0をRaspberry Piで操作するプログラム

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
* 電源  
AR Droneのバッテリー接続部分からUSBがでている。これは本来[GPSフライトレコーダー](http://www.amazon.co.jp/gp/product/B00DAL6D3Y?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00DAL6D3Y&linkCode=shr&tag=senyoltw-22&qid=1414830236&sr=8-2&keywords=GPS+ar+drone)を接続するものだが、ここから電源を取得できる。このUSBポートの電源からRaspberry Piが起動することは確認済み
* 重さ  
AR DroneにRaspberry Piを搭載すると重くなる。試して見たところ概算200g程度なら大丈夫なので、Raspberry Piと複数センサ程度なら搭載したまま飛行できる。ただし、client.animateによる空中回転はアクション後、地面と衝突してしまうので、その程度の影響はある。よってRaspberry Piで操作する場合はアクションは実行すべきではない
