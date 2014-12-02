Raspberry Piセットアップ手順
====================
###ソフトウェアアップデート
```
sudo apt-get update
sudo apt-get upgrade
```

### Wi-Fiを使ってのインターネットへの接続
Raspberry PiをWi-Fiに接続する
 sudo vi /etc/network/interfaces
 
 ```
 auto lo

iface lo inet loopback
iface eth0 inet dhcp

iface wlan1 inet static
address 192.168.11.1
netmask 255.255.255.0

allow-hotplug wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
 ```
 
 sudo vi /etc/wpa_supplicant/wpa_supplicant.conf
 
 上から順番に接続していく
 ```
 ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
        ssid="DH-GUEST"
        psk="XXXXXXXX"
}

network={
        ssid="ardrone2_092052"
        priority=1
	key_mgmt=NONE
}
 ```
 ```
 priority=1で優先順位
 key_mgmt=NONEでパスワードなし
 ```
 
###アクセスポイント設置
 
 参考
 http://d.hatena.ne.jp/penkoba/20130806/1375742819
 http://netbuffalo.doorblog.jp/archives/4585792.html
 
### node.jsをインストール 
 http://node-arm.herokuapp.com/  
 *nodebrewをインストールするとsudoにて実行できない(rootユーザーでもnode.jsをインストールする必要がある
 
### gitをインストール
```
 apt-get install git
```

### git cloneでパッケージクローン、インストール
 ```
 git clone
 npm install
 ```
 
### 超音波センサを設置
 GPIOの番号を把握
 http://blog.livedoor.jp/victory7com/archives/39656774.html
 
 ライブラリ
 https://github.com/clebert/r-pi-usonic
 ```
 npm install r-pi-usonic --save
 ```
 var sensor = usonic.sensor(24, 23);←GPIOの23ピンと24ピンを使用  
 GPIOから情報を取得するにはsudo権限が必要。
 
 sudo node test_usonic.js
 ```
 var usonic = require('r-pi-usonic');
 var sensor = usonic.sensor(24, 23);
 
 var distance = sensor();
 
 console.log('Distance: ' + distance + ' cm');
 ```
 
 定期的に情報を取得したい場合
 ```
var usonic = require('r-pi-usonic');
var sensor = usonic.sensor(24, 23);

var control = function(){
	var distance = sensor();

	console.log('Distance: ' + distance + ' cm');

	setTimeout(function () {
		control();
	}, 100);
};
control();
 ```

