


function colorChange(id){
	var previewId = "extpreviewButton"
	
	if(id == "buttons"){
		console.log("got buttons");
		console.log($("#colorPicker2").val());
		
		$("#" + previewId).css('background', $("#colorPicker").val());
		
		
	}
	if(id == "buttonsText"){
		console.log("buttonsText");
		$("#" + previewId).css('color', $("#colorPicker2").val());
	}
}

function borderChange(){
	
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
	
}
function borderColorChange(){
	
	var previewId = "extpreviewButtonBorder";
//	border-color: #f1f1f1; 
	$("#" + previewId).css('border-color', $("#bgPicker").val());
	
	
	
	
	
}


function headerChange(type){
	var previewId = "extheaderPreview";
	
	console.log("got header change");
	if(type == "size"){
		$("#" + previewId).css('font-size', $("#headerSizeRange").val());
	}
	
	
	else if(type == "alignment"){
		
		
		
		$("#" + previewId).css('text-align', $("#headerAlignment").val());
	}
	else if(type == "color"){
		$("#" + previewId).css('color', $("#headerColor").val());
	}
	
}
function saveSettings(){
	console.log("in save settings");
	console.log(window.document);
	console.log(window.document.styleSheets);
	console.log(document);
	console.log(document.styleSheets);
	for(var i = 0 ; i < document.styleSheets.length; i++){
		
		
		var sheet = window.document.styleSheets[i];
		console.log(sheet.cssRules);
		sheet.addRule("#myList li", "float: left; background: red !important;", 1);
			
		console.log(sheet);
	}
}




