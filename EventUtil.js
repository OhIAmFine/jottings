var EventUtil={
		addHandler:function  (elment,type,handler) {
			// body...
			if (elment.addEventListener) {
				elment.addEventListener(type,handler,false);
			}
			else if(elment.attachEvent){
				elment.attachEvent("on"+type,handler);
			}
			else{
				elment["on"+type]=handler;
			}
		},
		getEvent:function(event){
			return event?event:window.event;
		},
		getTarget:function(event){
			return event.target||event.srcElement;
		},
		preventDefault:function(event){
			 event.preventDefault?event.preventDefault():event.returnValue=false;
			// if (event.preventDefault) {
			// 	event.preventDefault();
			// }else{
			// 	event.returnValue=false;
			// }
		},

		removeHandler:function(elment,type,handler){
			if (elment.addEventListener) {
				elment.removeEventListener(type,handler,false);
			}
			else if(elment.attachEvent){
				elment.detachchEvent("on"+type,handler);
			}
			else{
				elment["on"+type]=null;
			}
		},
		stopPropagation:function(event){
			event.stopPropagation?event.stopPropagation():event.cancleBubble=true;
			// if (event.stopPropagation) {
			// 	event.stopPropagation();
			// }else{
			// 	event.cancleBubble=true;
			// }
		},
		getCharCode:function(event){
			if(typeof event.charCode=="number"){
				return event.charCode;
			}else
			{
				return event.keyCode;
			}
		}
	}