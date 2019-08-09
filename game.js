	var start=new Date().getTime();
			
			var c=1;
			
			var best;
			
			function getRandomColor(){
			
				var letters="0123456789ABCDEF".split("");
				
				var color="#";
				
				for(var i=0;i<6;i++){
				
					color+=letters[Math.floor(Math.random()*16)];
					
				}
				
				return color;
				
			}
			
			function makeShapeAppear(){
			
				var top=Math.random()*400;
				
				var left=Math.random()*400;
				
				var size=(Math.random()*200)+100;
				
				if(Math.random()>0.5){
				
					document.getElementById("shape").style.borderRadius="50%";
					
				}else{
				
					document.getElementById("shape").style.borderRadius="0";
					
				}
				
				document.getElementById("shape").style.backgroundColor=getRandomColor();
				
				document.getElementById("shape").style.top=top+"px";
				
				document.getElementById("shape").style.left=left+"px";
				
				document.getElementById("shape").style.width=size+"px";
				
				document.getElementById("shape").style.height=size+"px";
			
				document.getElementById("shape").style.display="block";
				
				start=new Date().getTime();
				
			}
			
			function appearAfterDelay(){
			
				setTimeout(makeShapeAppear,Math.random()*2000);
				
			}
			
			appearAfterDelay();
		
			document.getElementById("shape").onclick=function(){
			
				var end=new Date().getTime();
				
				var timeTaken=(end-start)/1000;
			
				document.getElementById("timeTaken").innerHTML=timeTaken+"s";
				
				document.getElementById("shape").style.display="none";
				
				if(c==1){
				
					document.getElementById("p2").innerHTML="Best Score:"+timeTaken+"s";
					
					c++;
					
					best=timeTaken;
					
				}else{
				
					if(timeTaken<best){
					
						document.getElementById("p2").innerHTML="Best Score:"+timeTaken+"s";
						
						best=timeTaken;
						
					}else{
					
						document.getElementById("p2").innerHTML="Best Score:"+best+"s";
						
					}
					
				}

				appearAfterDelay();
				
			}