var gameCount=0;
//count number of times when user click start button
function startGame(){

      gameCount++;
      document.getElementById("keytoRace").style.visibility="visible";
      var playerStrip = document.querySelectorAll('tr')

         if(gameCount<=1) {
            //creating track length

            trackLength = prompt("How many km required for you to escape from the city?") 

               for (var i = 0; i < playerStrip.length; i++) { 
                    for ( var j = 0; j < trackLength; j++){
                        var trackColoumn = document.createElement('td')
                        playerStrip[i].appendChild(trackColoumn)
                     }
                  }
               }
       //when user want new game while progressing the current

         else if(gameCount>1) {

               location.reload();
               alert("Oops!! you want to start a new game");
               alert("Click again on Start button for new game");
                }
           }
document.addEventListener('DOMContentLoaded', function() {

          document.getElementById("keytoRace").style.visibility="hidden";
          var playerStrip = document.querySelectorAll('tr')
          player1Strip = document.querySelectorAll('#player1_strip td')
          document.addEventListener('keyup', udatePlayerPosition); 

          var pCount=0;
          var qCount=0

          function udatePlayerPosition(e) {

               //when user release 'p' key

               if (event.which ===80) {
               pCount++;

                     if(pCount<=trackLength){

                            var j=pCount;
                            player1Strip = document.querySelectorAll('#player1_strip td')
                            player1Strip[j].className="active";
                            player1Strip[j-1].className="";
                            trackSpeed()
                      }
                     //when 'p' reaches finish point

                    if(pCount>trackLength && pCount>qCount) { 
 
                            player2Strip = document.querySelectorAll('#player2_strip td');
                            document.getElementById("trackEsc").innerHTML="HURRAY! P ESCAPED FROM CITY";
                            document.getElementById("pChaseTrack").style.visibility="hidden";
                            document.getElementById("qChaseTrack").style.visibility="hidden";
                            document.getElementById("trackEsc").style.visibility="visible";
                            alert("BRAVE! P ESCAPED!");
                            pageReload(); 
                   }
             }
           //when user release 'q' key

               else if (event.which ===81) {
               qCount++;

                       if(qCount<=trackLength) {

                             var j=qCount;
                             player2Strip = document.querySelectorAll('#player2_strip td') 
                             player2Strip[j].className="active";
                             player2Strip[j-1].className="";
                             trackSpeed()
                     }
                   //when 'q' reaches finish point

                    if(qCount>trackLength && qCount>pCount) {

                             player1Strip = document.querySelectorAll('#player1_strip td')
                             var win2=document.getElementById("trackEsc").innerHTML="HURRAY! Q ESCAPED FROM CITY";
                             document.getElementById("trackEsc").innerHTML="HURRAY! Q ESCAPED FROM CITY";
                             document.getElementById("pChaseTrack").style.visibility="hidden";
                             document.getElementById("qChaseTrack").style.visibility="hidden";
                             document.getElementById("trackEsc").style.visibility="visible";
                             alert("BRAVE! Q ESCAPED!");
                             pageReload();
                    }
              }
          trackSpeed()
      }      
         function trackSpeed() {

               var x=document.getElementsByClassName("active");
               //when p chase faster than q

                    if(pCount>qCount) {
 
                             document.getElementById("pChaseTrack").innerHTML="P IS CHASING";
                             document.getElementById("qChaseTrack").innerHTML="";
                             document.getElementById("trackEsc").style.visibility="hidden";
                    }
                //when q chase faster than p

                     if(qCount>pCount) {

                             document.getElementById("qChaseTrack").innerHTML="Q IS CHASING";
                             document.getElementById("pChaseTrack").innerHTML="";
                             document.getElementById("trackEsc").style.visibility="hidden";
                   }
                 }
             //when user finish game and starts new game

          function pageReload() {
  
                             document.getElementById("trackEsc").style.visibility="visible";
                             document.getElementById("pChaseTrack").style.visibility="hidden";
                             document.getElementById("qChaseTrack").style.visibility="hidden";

                             alert("Click on start new game button to start a new game");                         
                             location.reload();

                             document.getElementById("player1_strip").style.visibility="hidden";
                             document.getElementById("player2_strip").style.visibility="hidden";
                             document.getElementById("pChaseTrack").style.visibility="hidden";
                             document.getElementById("qChaseTrack").style.visibility="hidden";
                             document.getElementById("startBtn").style.visibility="visible";
                             document.getElementById("car3").style.visibility="visible";
                             document.getElementById("car4").style.visibility="visible";

                             player1Strip[0].className="active";
                             player2Strip[0].className="active";
                }
          })
