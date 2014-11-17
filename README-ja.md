#jQuery Plugin Background Fit

「Background Fit」は、HTMLタグに設定した背景画像の縦横比率にぴったり合ったサイズで表示する jQuery プラグインです。

<img src="./src/header.png">


##デモ

デモは、 jquery.background-fit.js と background css の比較です。

[デモ](http://project.thingslabo.com/jquery.background-fit/examples/)

##つかいかた

1. jQuery 本体の設定
2. jquery.background-fit.js の設定
3. HTMLと背景画像、CSSを用意
4. Background Fit を適用
5. 動作確認

###1. jQuery 本体の設定

jQuery (1.11 以上または >= 2.x  以上) をページに読み込みます。

jquery.com から jQuery 本体をダウンロード。または CDN から配信している jQuery 本体を設定します。

設定方法は「[Download jQuery](http://jquery.com/download/)」から。

###2. jquery.background-fit.js の設定

jquery.background-fit.js をページに読み込みます。

jquery.background-fit.min.js をダウンロードして、HTMLにスクリプトタグを以下のように設定します。

```html
<script src="http://DOMAIN/PATH/TO/jquery.background-fit.min.js"></script>
```

###3. HTMLと背景画像、CSSを用意

背景画像を表示するHTMLを用意します。id 属性または class 属性を設定すること。属性名はお好みで。

```html
<div id="bg">jquery.background-fit.js</div>
```

CSSで背景画像を設定します。

```css
<style>
#bg {
	background: url(http://DOMAIN/PATH/TO/sample.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
}
</style>
```

幅 (width) を設定すると、表示サイズが調整された表示になります。

```css
<style>
#bg {
	background: url(http://DOMAIN/PATH/TO/sample.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
    width: 300px;
    height: 300px;
}
</style>
```

###4. Background Fit を適用

Background Fit を適用する JavaScript を記述します。HTML に設定した id 属性または class 属性を セレクタに指定して Background Fit を適用します。

```javascript
<script>
$(function() {
  $("#bg").bg_fit();
});
</script>
```

###5. 動作確認

表示を確認します。

以上。

##動作条件

jQuery 1.11+ Or jQuery 2.x+ [http://jquery.com/download/](http://jquery.com/download/)

##履歴

* Version 0.0.5 - 2014-11-17
	* add bower.js
* Version 0.0.4 - 2014-07-29
	* refactoring
* Version 0.0.3 - 2014-06-12
	* fix in case of multiple setting
* Version 0.0.2 - 2014-05-14
	* improve bgImg object
* Version 0.0.1 - 2013-02-13
	* Initial release.

##デモサンプル画像提供

[写真素材 足成 - Ashinari Photo Material](http://www.ashinari.com)

##ライセンス

Dual licensed under the MIT and GNU General Public License v2.0 (GPLv2) licenses.

Copyright (c) 2013-2014 by thingsym

###The MIT License (MIT)

以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを無制限に扱うことを無償で許可します。これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。

上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。

ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。 作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。

http://www.opensource.org/licenses/mit-license.php

###GNU General Public License v2.0 (GPLv2)

http://www.gnu.org/licenses/gpl.html

