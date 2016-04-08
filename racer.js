var gameCount=0;

var startGame= function(){

      gameCount++;

      document.getElementById("keytoRace").style.visibility="visible";

      trackLen()
      newGame()
    }

var trackLen=function(){

      if(gameCount<=1) {

         //Creating track length
         trackLength = prompt("How many km required for you to escape from the city?")

         var playerStrip = document.querySelectorAll('tr') 

         for (var i = 0; i < playerStrip.length; i++) { 
           for ( var j = 0; j < trackLength; j++){

             var trackColoumn = document.createElement('td')
             playerStrip[i].appendChild(trackColoumn)       
                }
              }
            }
          }

var newGame=function(){

     //when user want new game while progressing the current
     if(gameCount>1) {

               location.reload();

               alert("Oops!! you want to start a new game");
               alert("Click again on Start button for new game");
                }
              }

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("keytoRace").style.visibility="hidden";
  document.getElementById("imgrob1").style.visibility="hidden";
  document.getElementById("imgrob2").style.visibility="hidden";

  document.getElementById("idimgrob1").style.visibility="hidden";
  document.getElementById("idimgrob2").style.visibility="hidden";

  var playerStrip = document.querySelectorAll('tr')
  var player1Strip = document.querySelectorAll('#player1_strip td')

  document.addEventListener('keyup', udatePlayerPosition); 

  var pCount=0;
  var qCount=0;

  function udatePlayerPosition() {

   //when user release 'p' key
    if (event.which ===80) {
    pCount++;

    pTrackLength()
    pTrackFinish()
      }

   //when user release 'q' key
       else if (event.which ===81) {

         qCount++;

         qTrackLength()
         qTrackFinish()
           }

    trackSpeed()
         } 

var pTrackLength=function(){

    if(pCount<=trackLength){

      var j=pCount;
      var player1Strip = document.querySelectorAll('#player1_strip td')

      player1Strip[j].className="active";
      player1Strip[j-1].className="";

      trackSpeed()
         }
       }

var pTrackFinish=function(){

     //when 'p' reaches finish point
     if(pCount>trackLength && pCount>qCount) { 

       var player2Strip = document.querySelectorAll('#player2_strip td');

       document.getElementById("imgrob1").style.visibility="visible";
       document.getElementById("idimgrob1").style.visibility="visible";

       document.getElementById("trackEsc").innerHTML="HURRAY! 'JOHN' ESCAPED FROM CITY";
       document.getElementById("trackEsc").style.visibility="visible";

       document.getElementById("pChaseTrack").style.visibility="hidden";
       document.getElementById("qChaseTrack").style.visibility="hidden";
       

       alert("BRAVE! JOHN ESCAPED!");
       pageReload(); 
           }
         }
   
 var qTrackLength=function(){

     if(qCount<=trackLength) {

        var j=qCount;
        var player2Strip = document.querySelectorAll('#player2_strip td') 

        player2Strip[j].className="active";
        player2Strip[j-1].className="";

        trackSpeed()
           }
         }
                
var qTrackFinish=function(){

      //when 'q' reaches finish point
      if(qCount>trackLength && qCount>pCount) {

         var player1Strip = document.querySelectorAll('#player1_strip td')

         document.getElementById("imgrob2").style.visibility="visible";
         document.getElementById("idimgrob2").style.visibility="visible";

         document.getElementById("trackEsc").innerHTML="HURRAY!'WALTER' ESCAPED FROM CITY";
         document.getElementById("trackEsc").style.visibility="visible";

         document.getElementById("pChaseTrack").style.visibility="hidden";
         document.getElementById("qChaseTrack").style.visibility="hidden";

         alert("BRAVE! WALTER ESCAPED!");
         pageReload();
            }
          }

function trackSpeed() {

      //when p chase faster than q 
      if(pCount>qCount) {

         document.getElementById("pChaseTrack").innerHTML="JOHN IS DRIVING FAST";
         document.getElementById("qChaseTrack").innerHTML="";

         document.getElementById("imgrob1").style.visibility="visible";
         document.getElementById("imgrob2").style.visibility="hidden";

         document.getElementById("idimgrob1").style.visibility="visible";
         document.getElementById("idimgrob2").style.visibility="hidden";

         document.getElementById("trackEsc").style.visibility="hidden";
                   }
      //when q chase faster than p
      if(qCount>pCount) {

          document.getElementById("qChaseTrack").innerHTML="WALTER IS DRIVING FAST";
          document.getElementById("pChaseTrack").innerHTML="";

          document.getElementById("imgrob2").style.visibility="visible";
          document.getElementById("imgrob1").style.visibility="hidden";

          document.getElementById("idimgrob1").style.visibility="hidden";
          document.getElementById("idimgrob2").style.visibility="visible";

          document.getElementById("trackEsc").style.visibility="hidden";
               }
             }
             
function pageReload() {

       //when user finish game and starts new game
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
