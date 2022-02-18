# jQuery Plugin Background Fit

Background Fit is a jQuery plugin that appear in sizes that fit to the aspect ratio of the background image.


<img src="./src/img/header.png">

## Demo

Demo is Comparison of jquery.background-fit.js and the background css.

[Demo](http://project.thingslabo.com/jquery.background-fit/examples/)

## Usage

1. Setting the jQuery
2. Setting the jquery.background-fit.js
3. Prepare for HTML and background image, CSS
4. Run the script
5. Operation checking

### 1. Setting the jQuery

jQuery (>= 1.11 Or >= 2.x) loaded in your page. 

Download the jQuery from jquery.com. Or set the jQuery that is delivered from the CDN.

[Download jQuery](http://jquery.com/download/)

### 2. Setting the jquery.background-fit.js


jquery.background-fit.js loaded in your page. 

Download the jquery.background-fit.min.js. Set the script tag to HTML, like this:

```html
<script src="http://DOMAIN/PATH/TO/jquery.background-fit.min.js"></script>
```

### 3. Prepare for HTML and background image, CSS

Provide the HTML to display the background image. By setting the class attribute or id attribute. Attribute name to your liking.

```html
<div id="bg">jquery.background-fit.js</div>
```


Set the background image on the CSS.

```css
<style>
#bg {
	background: url(http://DOMAIN/PATH/TO/sample.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
}
</style>
```

If set the width, it will display the display size has been adjusted.

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

### 4. Run the script

Write JavaScript to run the Background Fit. 
Apply a Background Fit by specifying the selector to the class attribute or an id attribute set to HTML. Run the script like so:

```javascript
<script>
$(function() {
  $("#bg").bg_fit();
});
</script>
```

### 5. Operation checking

Checking the display.

Have fun!


## Required

jQuery 1.11+ Or jQuery 2.x+ Or jQuery 3.x [http://jquery.com/download/](http://jquery.com/download/)

## Contribution

### Patches and Bug Fixes

Small patches and bug reports can be submitted a issue tracker in Github. Forking on Github is another good way. You can send a pull request.

1. Fork [jQuery Plugin Background Fit](https://github.com/thingsym/jquery.background-fit) from GitHub repository
2. Create a feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Create new Pull Request

## Changelog

* Version 0.0.6 - 2022-02-18
	* fix url for github pages
	* add .editorconfig
	* bump up jquery version to 3.6.0
	* fix gulpfile
	* update package.json
	* add css file
	* rename from examples to docs for github pages
	* remove bower.js
	* add LICENSE file
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

## Sample image Provided by

[Ashinari Photo Material](http://www.ashinari.com)

## License

Dual licensed under the MIT and [GPLv2](https://www.gnu.org/licenses/gpl-2.0.html) licenses.

## Author

[thingsym](https://github.com/thingsym)

Copyright (c) 2013-2014 by thingsym
