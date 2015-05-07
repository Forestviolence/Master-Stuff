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
//		Changed the background color, how do i set this?
		
		$("body").css('color', $("#extbgPicker").val()); 
	},
	colorChange: function(){
		console.log("in colorchange");
		var previewId = "extpreviewButton";

		$("#" + previewId).css('background', $("#colorPicker").val());
				

	},
	colorChangetxt: function(){
		console.log("in colorchangetxt");
		var previewId = "extpreviewButton";
		$("#" + previewId).css('color', $("#colorPicker2").val());

	},
	
	borderChange: function(){
		
		var previewId = "extpreviewButtonBorder";
		console.log("got a border change");
		
		$("#" + previewId).css('border-style', $("#borderChange").val());
		if($("#borderChange").val() == "outset"){
			$("#" + previewId).css('border-style:hover', "inset");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "inset"){
			$("#" + previewId).css('border-style:hover', "outset");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "dotted"){
			$("#" + previewId).css('border-style:hover', "dashed");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "dashed"){
			$("#" + previewId).css('border-style:hover', "dotted");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "solid"){
			$("#" + previewId).css('border-style:hover', "double");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "groove"){
			$("#" + previewId).css('border-style:hover', "ridge");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		if($("#borderChange").val() == "ridge"){
			$("#" + previewId).css('border-style:hover', "groove");
			$("#" + previewId).css('border-style:active', $("#borderChange").val() );
			$("#" + previewId).css('color:active', $("#colorPicker").val());
		}
		// needs fixing...
		
	},
	borderColorChange: function() {
		console.log("in bordercolorchange");
		var previewId = "extpreviewButtonBorder";
//		border-color: #f1f1f1; 
		$("#" + previewId).css('border-color', $("#bgPicker").val());
	},
	headerChangeSize: function(){
		console.log("in headerchangesize");
		var previewId = "extheaderPreview";
		

		$("#" + previewId).css('font-size', $("#headerSizeRange").val());

	},
	headerChangeAlign: function(){
		console.log("in headerChhangealign");
		var previewId = "extheaderPreview";
		

		$("#" + previewId).css('text-align', $("#headerAlignment").val());
	
		
	},
	headerChangeColor: function(){
		console.log("in headerchangeColor");
		var previewId = "extheaderPreview";


		$("#" + previewId).css('color', $("#headerColor").val());

		
	},
	saveSettings: function() {
		console.log("in save settings");
		console.log(window.document);
		console.log(window.document.styleSheets);
		console.log(document);
		console.log(document.styleSheets);
		

		
		
//		for(var i = 0 ; i < document.styleSheets.length; i++){
//			
//			
//			var sheet = window.document.styleSheets[i];
//			console.log(sheet.cssRules);
//			sheet.addRule("#myList li", "float: left; background: red !important;", 1);
//				
//			console.log(sheet);
//		}
	},
	
	setupCSS: function(){
		$("head").append(csstext);
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

var csstext = '<style type="text/css">' +
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
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
		'}'+
		'a[id^="ext"]:active {'+
			'background: #f1f1f1; '+
			'font-size: 9px; '+
			'border-style: outset; '+
			'border-width: 3px; '+
			'border-color: #f1f1f1; '+
			'color: #f1f1f1; '+
			'font-family: \"Arial\"; '+
			'padding: 3px 3px; margin: 10px 5px; '+
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
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
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
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
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
		'}'+
		'button[id^="ext"]:active {'+
			'background: #f1f1f1; '+
			'font-size: 9px; '+
			'border-style: outset; '+
			'border-width: 3px; '+
			'border-color: #f1f1f1; '+
			'color: #f1f1f1; '+
			'font-family: \"Arial\"; '+
			'padding: 3px 3px; margin: 10px 5px; '+
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
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
			'overflow-x:hidden;'+
			'overflow-y:hidden;'+
		'}'+
		'textarea[id^="ext"] {'+
			'width: 90%;'+
			'heigth: 15%;'+
			'overflow-y:auto;'+
			'padding: 1px 10px 1px 1px;'+
		'}'+
		'table[id^="ext"] {'+
			'width:100%;'+
			'height:90%;'+
			'position:absolute;'+
		'}'+
		'tr[id^="ext"] {'+
			'heigth:30%;'+
			'width:100%;'+
			'overflow:hidden;'+
		'}'+
		'td[id^="ext"] {'+
			'display:block;'+
			'padding:0px 1px;'+
			'min-height:30%;'+
			'max-height:30%;'+
			'height:30%;'+
			'width:33%;'+
			'border:1px solid;'+
			'overflow:hidden;'+
		'}'+
		'.extSidebar {'+
			'position:fixed;'+
			'top:0px;'+
			'left:0px;'+
			'width:20%;'+
			'height:100%;'+
			'background:white;'+
			'box-shadow:inset 0 0 1em black;'+
			'z-index:99999999999999;'+
			'overflow-y:auto;'+
		'}' +
		'</style>';
var settings = new Settings();


