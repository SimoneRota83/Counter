
function counter(){
        
    /*text with id */
    let numberDiv=document.createElement('div');
    numberDiv.setAttribute('id','number');
    numberDiv.innerHTML=0;    
    document.body.appendChild(numberDiv);
    

    /* button for increasing*/
    let buttonIncrease=document.createElement('button');
    buttonIncrease.innerHTML="+";
    document.body.appendChild(buttonIncrease);

    /*event on click */
    buttonIncrease.onclick=function increase(){
        document.getElementById("number").innerHTML ++;
    }
    
    /* button for decreasing */
    let buttonDecrease = document.createElement('button');
    buttonDecrease.innerHTML = "-";
    document.body.appendChild(buttonDecrease);
    
    /*event on click */
    buttonDecrease.onclick = function decrease() {
        document.getElementById("number").innerHTML--;
    }
};
