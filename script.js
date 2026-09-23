let hourHand=document.querySelector(".hour");
let minuteHand=document.querySelector(".minute");
let secondHand=document.querySelector(".second");
function startClock(){
    let currentDate=new Date()
    let currentHour=new Date().getHours();
    let currentMinute=currentDate.getMinutes();
    let currentSecond=currentDate.getSeconds();

    secondHand.style.transform=`rotate(${(currentSecond*6)-180}deg)`
    minuteHand.style.transform=`rotate(${(currentMinute*6)-180}deg)`

    hourHand.style.transform=`rotate(${((currentHour+(currentMinute/60))*30)-180}deg)`

}
setInterval(() => {
    startClock()
    
}, 1000);

