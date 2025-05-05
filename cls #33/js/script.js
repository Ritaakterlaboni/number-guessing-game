//amra chai jscreenone ar start button a click korle name input dekhabe tai age nameinput dhormu 
let inputNameOne = document.querySelector(".inputNameOne");         //class ar name r variable aki rokom rakha vlo 
                                                                    //jehetu amra aita dekte chai button a click korle tai age aita dorsi
let screenOne = document.querySelector(".screenOne");

let playOneButton = document.querySelector(".playOneButton");
                                                                    //akhon ami dekhamu addevenlistener diye clcik korte hobe tai
let errorOne = document.querySelector(".errorOne");         //aita diya o kaj kora hoitase tai ake o dorsi

let screenTwo = document.querySelector(".screenTwo");       //jeita niya kaj korbo seitai dorte hobe

playOneButton.addEventListener("click", function(){                      //jake clcik korbo tar class name diye addevenlisetener dibo r // log a konta dekte cai tar class name r jodi tar value dekte chai taile .value dibo classname ar loge
    if(inputNameOne.value =="" ){
        errorOne.style.display="block"
    }   
    else{
        errorOne.style.display = "none";
        screenTwo.style.display="block"
        screenOne.style.display="none"
    }          
    
})

