console.log( 'Background.html starting!' );
//Put page action icon on all tabs
chrome.tabs.onUpdated.addListener(function(tabId) {
	
	chrome.pageAction.show(tabId);
	
	
});

chrome.tabs.getSelected(null, function(tab) {
	chrome.pageAction.show(tab.id);
});
//var contextAdded = false;
	
//Send request to current tab when page action is clicked
chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(
			tab.id,
			{callFunction: "toggleSidebar"}, 
			function(response) {
				console.log(response);
			}
		);
	});
});
console.log( 'Background.html done.' );


// logs have the key: recentLog
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		    console.log(sender.tab ?
		                "from a content script:" + sender.tab.url :
		                "from the extension");
		    if(request.method == "getLocalStorage"){
//		    	use this to reset log;
//		    	localStorage["recentLog"] = JSON.stringify(["http://www.reddit.com/r/Leagueoflegends"]);
		    	sendResponse({data: localStorage[request.key]});
		    }
		    if(request.method == "getLocalStorageLinks"){
		    	sendResponse({data: localStorage[request.key]});
		    }
		    if(request.method == "getLocalStorageLogs"){
		    	sendResponse({data: localStorage[request.key]});
		    }
		    if(request.method == "storeLocalStorage"){
		    	localStorage[request.key] = request.value;
		    	sendResponse({message: "Stored"});
		    	
		    }
		    if(request.method == "storeLocalStorageMeta"){
		    	var metakey = "meta" + request.key;
		    	if(!localStorage[request.key]){
		    		localStorage[request.key] = JSON.stringify([]);
		    	}
		    	if(!localStorage[metakey]){
		    		localStorage[metakey] = JSON.stringify([]);
		    	}
		    	localStorage[request.key] == request.value;
		    	
		    	localStorage[metakey] == request.meta;
		    	sendResponse({message: "Stored META"});
		    	
		    }
		    
		    if(request.method == "getLocalStorageMeta"){
		    	var metakey = "meta" + request.key;
		    	if(!localStorage[request.key]){
		    		localStorage[request.key] = JSON.stringify([]);
		    		localStorage[metakey] = JSON.stringify([]);
		    	}
		    	if(!localStorage[metakey]){
		    		localStorage[request.key] = JSON.stringify([]);
		    		localStorage[metakey] = JSON.stringify([]);
		    	}
		    	sendResponse({data: localStorage[request.key], meta: localStorage[metakey]});
		    }
		    if(request.method == "addToDomLog"){
		    	if(!localStorage[request.key]){
		    		localStorage[request.key] = JSON.stringify([]);
		    	}
		    	var log = JSON.parse(localStorage[request.key]);
		    	if(log.indexOf(request.value) == -1){
		    		log.push(request.value);
		    		while(log.length > 3){
			    		log.splice(0,1);
			    	}
			    	localStorage[request.key] = JSON.stringify(log);
		    	}
		    	sendResponse({message: "ok"});
		    }
		    if(request.method == "addToLog"){
		    	localStorage["recentLog"] = request.value;
		    	sendResponse({data: localStorage["recentLog"]});
		    }
		    if(request.method == "SAVECSS"){
		    	localStorage["CSS"] = request.value;
		    	sendResponse({message: "CSS saved"});
		    	
		    }
		    if(request.method == "GETCSS") {
		    	if(!localStorage["CSS"]){
		    		localStorage["CSS"] = defaultcsstext;
		    	}
		    	sendResponse({data: localStorage["CSS"]});
		    }
		  });

function CallSomething(e){
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(
				//Selected tab id
				tab.id,
				//Params inside a object data
				{callFunction: "addThisButton", object: e}, 
				//Optional callback function
				function(response) {
					console.log(response);
				}
				
		);
	});
}


// this is where the default css is.
var defaultcsstext = '<style type="text/css" id="extCSS">' +
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
