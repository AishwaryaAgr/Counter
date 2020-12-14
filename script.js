let counter = document.querySelector('.counter');
const addCont = document.querySelector('#higherCountBtn');
const lowCont = document.querySelector('#lowerCountBtn');

let count = 0 ;

addCont.addEventListener('click',increasecnt);
lowCont.addEventListener('click',decreasecnt);

function increasecnt(){
    count++;
    if(count>'0'){
        counter.style.color = '#4caf50'
    }
    else if(count == '0'){
        counter.style.color = 'black'
    }
    else if(count<'0'){
        counter.style.color = 'red'
    }
    counter.innerHTML = count ;
    counter.animate([{opacity : '0.2'}, {opacity: '1.0'}],{duration:500, fill: 'forwards'});
}
function decreasecnt(){
    count--;
    if(count>'0'){
        counter.style.color = '#4caf50'
    }
    else if(count == '0'){
        counter.style.color = 'black'
    }
    else {
        counter.style.color = 'red'
    }

    counter.innerHTML = count ;
    counter.animate([{opacity : '0.2'}, {opacity: '1.0'}],{duration:500, fill: 'forwards'});
}
