const endTime='22 july 2023 10:00 PM';
const end=document.getElementById('h11');
const times=document.querySelectorAll('.time');
end.innerText=endTime;
let startTime;
clock();
function clock()
{
    
   const end1 = new Date(endTime)
   const start1 = new Date()
   const difference=(end1-start1)/1000;
   times[0].value=Math.floor(difference/86400);
   times[1].value=Math.floor((difference/3600)/24);
   times[2].value=Math.floor((difference/60)%60);
   times[3].value=Math.floor(difference%60);

}
    setInterval(clock,1000);


