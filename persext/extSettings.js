var Settings = function() {
	this.initialize();
};
Settings.prototype = {
		
	initialize: function() {
		window.addEventListener("load", function(event) {
			this.start();
		}.bind(this));
	},
	start: function() {
		this.setupCSS();
		this.assignEventHandlers();
	},
	bgColorChange: function(){
		console.log("in bgcolorchange");
//		Changed the background color, how do i preview this this?
//		$("body").css('color', $("#extbgPicker").val()); 
		
		var selector = /#extSidebar \{/;
		var attribute = /background/;
		var replacement = $("#extbgPicker").val();
		changeCSStext(selector, attribute, replacement);
	},
	colorChange: function(){
		console.log("in button colorchange");
//		var previewId = "extpreviewButton";
//		$("#" + previewId).css('background', $("#colorPicker").val());
		var selectors = [/a\[id\^="ext"\] \{/, /a\[id\^="ext"\]:active \{/, /a\[id\^="ext"\]:hover \{/, /button\[id\^="ext"\] \{/, /button\[id\^="ext"\]:active \{/,/button\[id\^="ext"\]:hover \{/];
		var attribute = /background/;
		var replacement = $("#colorPicker").val();
		for(var i = 0; i < selectors.length;i++){
			changeCSStext(selectors[i], attribute, replacement);
		}

	},
	colorChangetxt: function(){
		console.log("in button colorchangetxt");
//		var previewId = "extpreviewButton";
//		$("#" + previewId).css('color', $("#colorPicker2").val());
		var selectors = [/a\[id\^="ext"\] \{/, /a\[id\^="ext"\]:active \{/, /a\[id\^="ext"\]:hover \{/, /button\[id\^="ext"\] \{/, /button\[id\^="ext"\]:active \{/,/button\[id\^="ext"\]:hover \{/];
		var attribute = / color/;
		var replacement = $("#colorPicker2").val();
		for(var i = 0; i < selectors.length;i++){
			changeCSStext(selectors[i], attribute, replacement);
		}
	},
	
	borderChange: function(){
		
//		var previewId = "extpreviewButtonBorder";
		console.log("got a button border change");
		
		var selectors = [/a\[id\^="ext"\] \{/, /button\[id\^="ext"\] \{/];
		var selectors2 = [/a\[id\^="ext"\]:hover \{/, /a\[id\^="ext"\]:active \{/, /button\[id\^="ext"\]:hover \{/,/button\[id\^="ext"\]:active \{/];
		var attribute = /border-style/;
		var replacement = $("#borderChange").val();
		var replacement2 = "inset";
		
//		$("#" + previewId).css('border-style', $("#borderChange").val());
		if(replacement == "outset"){
			replacement2 = "inset";
		}
		if(replacement == "inset"){
			replacement2 = "outset";
		}
		if(replacement == "dotted"){
			replacement2 = "dashed";
		}
		if(replacement == "dashed"){
			replacement2 = "dotted";
		}
		if(replacement == "solid"){
			replacement2 = "double";
		}
		if(replacement == "groove"){
			replacement2 = "ridge";
		}
		if(replacement == "ridge"){
			replacement2 = "groove";
		}
		for(var i = 0; i< selectors.length;i++){
			changeCSStext(selectors[i], attribute, replacement);
		}
		for(var i = 0; i< selectors2.length;i++){
			changeCSStext(selectors2[i], attribute, replacement2);
		}
		
	},
	borderColorChange: function() {
		console.log("in  button bordercolorchange");
//		var previewId = "extpreviewButtonBorder";
//		$("#" + previewId).css('border-color', $("#bgPicker").val());
		
		var selectors = [/a\[id\^="ext"\] \{/, /a\[id\^="ext"\]:active \{/, /a\[id\^="ext"\]:hover \{/, /button\[id\^="ext"\] \{/, /button\[id\^="ext"\]:active \{/,/button\[id\^="ext"\]:hover \{/];
		var attribute = /border-color/;
		var replacement = $("#bgPicker").val();
		for(var i = 0; i < selectors.length;i++){
			changeCSStext(selectors[i], attribute, replacement);
		}
//		var selectors2 = [/a\[id\^="ext"\]:active \{/, /button\[id\^="ext"\]:active \{/];
//		var attribute2 = / color/;
//		for(var i = 0; i < selectors2.length;i++){
//			changeCSStext(selectors2[i], attribute2, replacement);
//		}
		
	},
	headerChangeSize: function(){
		console.log("in headerchangesize");
//		var previewId = "extheaderPreview";
//		$("#" + previewId).css('font-size', $("#headerSizeRange").val());
		var selector = /h1\[id\^="ext"\] \{/;
		var attribute = /font-size/;
		var replacement = $("#headerSizeRange").val() + "px";
		changeCSStext(selector, attribute, replacement);



	},
	headerChangeAlign: function(){
		console.log("in headerChangealign");
//		var previewId = "extheaderPreview";
//		$("#" + previewId).css('text-align', $("#headerAlignment").val());
		
		var selector = /h1\[id\^="ext"\] \{/;
		var attribute = /text-align/;
		var replacement = $("#headerAlignment").val();
		changeCSStext(selector, attribute, replacement);
	
		
	},
	headerChangeColor: function(){
		console.log("in headerchangeColor");
//		var previewId = "extheaderPreview";
//		$("#" + previewId).css('color', $("#headerColor").val());

		var selector = /h1\[id\^="ext"\] \{/;
		var attribute = /color/;
		var replacement = $("#headerColor").val();
		changeCSStext(selector, attribute, replacement);
	},
	saveSettings: function() {
		console.log("in save settings");
			chrome.runtime.sendMessage({method: "SAVECSS", value: csstext}, function(response){
				if(response){
					console.log(response.message);
				}
		});
	},
	
	setupCSS: function(){
		
		chrome.runtime.sendMessage({method: "GETCSS"}, function(response){
			
			if(response.data){
				csstext = response.data;
			}
			$("head").append(csstext);
		});
		
	},
//	function below is to assign event handlers
	assignEventHandlers: function(){
		$("#extbgPicker").bind('change', this.bgColorChange);
		$("#colorPicker").bind('change', this.colorChange);
		$("#colorPicker2").bind('change', this.colorChangetxt); 
		$("#borderChange").bind('change', this.borderChange);
		$("#bgPicker").bind('change', this.borderColorChange);
		$("#headerSizeRange").bind('change', this.headerChangeSize); 
		$("#headerAlignment").bind('change', this.headerChangeAlign);
		$("#headerColor").bind('change', this.headerChangeColor);
		$("#extSaveSettings").bind('click', this.saveSettings);
	}
	
};

var csstext = '<style type="text/css" id="extCSS">' +
'h1[id^="ext"] {' + 
	'color: black;' + 
	'text-align: center;' + 
	'font-size: 20px;'+
	'overflow-y: hidden;'+
'}'+
'a[id^="ext"] {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: outset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #111111; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'a[id^="ext"]:active {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: inset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #f1f1f1; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'a[id^="ext"]:hover {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: inset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #111111; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'button[id^="ext"] {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: outset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #111111; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'button[id^="ext"]:active {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: inset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #f1f1f1; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'button[id^="ext"]:hover {'+
	'background: #f1f1f1; '+
	'font-size: 9px; '+
	'border-style: inset; '+
	'border-width: 3px; '+
	'border-color: #f1f1f1; '+
	'color: #111111; '+
	'font-family: \"Arial\"; '+
	'padding: 3px 3px; margin: 10px 5px; '+
	'overflow-x: hidden;'+
	'overflow-y: hidden;'+
'}'+
'textarea[id^="ext"] {'+
	'width: 90%;'+
	'heigth: 15%;'+
	'overflow-y:auto;'+
	'padding: 1px 10px 1px 1px;'+
'}'+
'table[id^="ext"] {'+
	'width: 100%;'+
	'height: 90%;'+
	'position: absolute;'+
'}'+
'tr[id^="ext"] {'+
	'heigth: 30%;'+
	'width: 100%;'+
	'overflow: hidden;'+
'}'+
'td[id^="ext"] {'+
	'display: block;'+
	'padding: 0px 1px;'+
	'min-height: 30%;'+
	'max-height: 30%;'+
	'height: 30%;'+
	'width: 33%;'+
	'border: 1px solid;'+
	'overflow: hidden;'+
'}'+
'#extSidebar {'+
	'position: fixed;'+
	'top: 0px;'+
	'left: 0px;'+
	'width: 20%;'+
	'height: 100%;'+
	'background: white;'+
	'box-shadow: inset 0 0 1em black;'+
	'z-index: 99999999999999;'+
	'overflow-y: auto;'+
'}' +
'</style>';
function changeCSStext(selector, attribute, replacement){
//	change the css, using this to test regex
	var searchtext = csstext;
	var block1 = searchtext.search(selector);
	var block2 = searchtext.substring(block1).search(attribute);
	var block22 = searchtext.substring(block1+block2).search(/: /) + 2;
	var block3 = searchtext.substring(block1+block2+block22).search(/;/);
	
	var replacementCSSstart = searchtext.substring(0, block1+block2+block22);
	var replacementCSSend = searchtext.substring(block1+block2+block22+block3);
	
	csstext = replacementCSSstart + replacement + replacementCSSend;

	
	
	
	var style = document.getElementById("extCSS");
	style.parentNode.removeChild(style);
	$("head").append(csstext);

	

}

var settings = new Settings();


