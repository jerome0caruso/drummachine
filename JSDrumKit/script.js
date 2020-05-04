function playSound(e){
    // selects audio element(html) and uses attr. selector and when e(event that happens for keydown)
    //is hit it finds that specific data key and plays audio. if() no audio use return to stop function
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    //currentTime restarts sound
    audio.currentTime=0;
    audio.play();
    //adds a class .playing to the key from event
    key.classList.add('playing'); 
}

//runs when transitionends
function removeTransition(e){
    if(e.propertyName !== 'transform') return //doesn't worry about it if not hit
    //this- is what's called against it(each specific key). Here it's the key.and removes class
    this.classList.remove('playing');
    //e.target.
    
}

//Grabs all of the elements with class= keys
//and retuns it in a NodeList
const keys = document.querySelectorAll('.key');
//with a NodeList of elements you can't listen on all you must loop
//and attach event listener to each one.
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener("keydown", playSound)


