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
	
	var previewId = "previewButtonBorder";
	console.log("got a border change");
	
	$("#" + previewId).css('border-style', $("#borderChange").val());
	
	
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
	for(var i = 0 ; i < document.styleSheets.length; i++){
		console.log(document.styleSheets[i]);
		
		var sheet = document.styleSheets[i];
		
		sheet.addRule("#myList li", "float: left; background: red !important;", 1);
			
		console.log(sheet);
	}
}




