var myArray=[.12,.15,.2,.23,.25,.28,.3,.4,.66,.73,.88,.91,1.22];var randomItem=0;var elea=document.getElementById("MyValue");var elem=document.getElementById("myBar");var elea2=document.getElementById("MyValue2");var elem2=document.getElementById("myBar2");var elea3=document.getElementById("MyValue3");var elea4=document.getElementById("MyValue4");var contributors=document.getElementById("buyers");var contributors2=document.getElementById("buyers2");var width=59.9;function getTimeRemaining(e){var t=Date.parse(e)-Date.parse(new Date);var r=Math.floor(t/1e3%60);var a=Math.floor(t/1e3/60%60);var n=Math.floor(t/(1e3*60*60)%24);var l=Math.floor(t/(1e3*60*60*24));return{total:t,days:l,hours:n,minutes:a,seconds:r}}function initializeClock(n,r){var e=document.getElementById(n);if(!e){console.error("Clock element not found:",n);return}var a=e.querySelector(".days");var l=e.querySelector(".hours");var o=e.querySelector(".minutes");var i=e.querySelector(".seconds");if(!a){console.error("Days element not found")}if(!l){console.error("Hours element not found")}if(!o){console.error("Minutes element not found")}if(!i){console.error("Seconds element not found")}function t(){var e=getTimeRemaining(r);a.innerHTML=("0"+e.days).slice(-2);l.innerHTML=("0"+e.hours).slice(-2);o.innerHTML=("0"+e.minutes).slice(-2);i.innerHTML=("0"+e.seconds).slice(-2);if(e.total<=0){a.innerHTML="00";l.innerHTML="00";o.innerHTML="00";i.innerHTML="00";clearInterval(c);$("#sale_status").text("Sale Live");$("#tsale_status").text("inprogress");$("#buy_title").text("Buy");$("#buybuybuy").removeAttr("disabled");var t=setInterval(s,2e3);$("#pre_status").text("Presale Ends in:");initializeClock("clockdiv",deadLine);initializeClock("clockdiv2",deadLine)}}function s(){var e=parseFloat(width*totalPresale/100).toFixed(2);var t=(e/300*100).toFixed(2);if(width>=96){clearInterval(n)}else if(width>=96.5){clearInterval(n);var r=setInterval(d,9e3)}else{var a=myArray[Math.floor(Math.random()*myArray.length)];width=width+a;elea.innerHTML=parseFloat(width*totalPresale/100).toFixed(2)+" BNB";elem.style.width=width+"%";elea2.innerHTML=parseFloat(width*totalPresale/100).toFixed(2)+" BNB";elem2.style.width=width+"%";elea3.innerHTML=e+" BNB"+" ("+t+"%"+")";elea4.innerHTML=e+" BNB"+" ("+t+"%"+")";contributors.innerHTML=parseFloat(width*totalPresale/50).toFixed(0);contributors2.innerHTML=parseFloat(width*totalPresale/50).toFixed(0)}}function d(){var e=parseFloat(width*totalPresale/100).toFixed(2);var t=e/300*100;if(width>=98){clearInterval(id2)}else{var r=myArray[Math.floor(Math.random()*myArray.length)];width=width+r;elea.innerHTML=parseFloat(width*totalPresale/100).toFixed(2)+" BNB";elem.style.width=width+"%";elea2.innerHTML=parseFloat(width*totalPresale/100).toFixed(2)+" BNB";elem2.style.width=width+"%";elea3.innerHTML=e+" BNB"+t}}t();var c=setInterval(t,1e3)}var startDate=new Date(Date.parse("2024/09/12 15:00:00"));var deadLine=new Date(Date.parse("2024/09/13 15:00:00"));var totalPresale=300;var tokenSymbol="Wukong";initializeClock("clockdiv",startDate);initializeClock("clockdiv2",startDate);
