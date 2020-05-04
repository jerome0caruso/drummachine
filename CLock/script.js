const secondHand = document.querySelector('.second-hand');
const cTime = document.createElement("h1")
const cTimeNode = document.createTextNode(new Date())
cTime.appendChild(cTimeNode);
document.querySelector("section").appendChild(cTime);




function setDate(){
    //new Date is an inbuild datatype of js, must use new to start date.
    const now = new Date();
    //method for Date
    const seconds = now.getSeconds();
    //converts to degress
    const secondsDegrees = ((seconds /60) * 360);
    //rotates it 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    cTime.appendChild(cTimeNode);
    document.querySelector("section").appendChild(cTime);
}
//setting function to interval of 1 sec..
setInterval(setDate, 1000);