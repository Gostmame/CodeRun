'use strict';

let last="00:00:00:00";

let now="2022/04/15 13:10:00";

$("#clock").countdown(now,function(event) {
    var format = "%D:%H:%M:%S";
    if (event.offset.totalDays > 0) {
        if(event.offset.totalDays>10){
            format = '%-D:' + format;
        }
        else{
            format = '0%-D:' + format;

        }
     
    }
    let now =event.strftime(format);
    console.log(last+ "        "+now);
    animateTime(last,now);
    last=now;
  });
  const  animateTime = function(last, now){
    for(let i=0;i<now.length;i++){
        if(last[i]!==now[i]){
            animate(i,now[i]);
        }
    }
  };
  const animate = function(i,number){
      const element = document.getElementsByClassName('number')[i];
      let second= element.lastElementChild.cloneNode(true);
        second.textContent=number;
        element.appendChild(second);
        element.classList.add('move');
        setTimeout(function(){
            element.classList.remove('move');

        },500);
        setTimeout(function(){
            element.removeChild(element.firstElementChild);

        },500);

  }


