// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]; // random 6 digit ki from hex value chahiye to denote colors 
    } // multiplied by 16 so that we can numbers till 15.9999
    return color;
};

let intervalId;

const startChangingColor = function(){
    if(!intervalId){ // iska matlab hai agar interval pehle se chal nahi raha hai tabhi naya interval shuru karo.Aisa karne se ek hi time pe multiple intervals start hone se bachte ho
        intervalId = setInterval(changeColor, 1000);
    }
   function changeColor(){
    document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; // to save memory by flushing the previously stored intervalId's
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);