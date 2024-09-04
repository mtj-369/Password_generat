let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let passbox = document.getElementById('passbox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genbtn = document.getElementById('genbtn');

//showing input slider value
slidervalue.innerHTML = inputslider.value;
inputslider.addEventListener('input',() =>{
    slidervalue.innerHTML = inputslider.value;
});


genbtn.addEventListener('click',()=>{
    passbox.value = generatepassword();
})


let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*";

//function to generate password

function generatepassword(){
    let genpassword ="";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbols.checked ? allsymbols : "";

    if(allchars =="" || allchars.length ==0){
        return genpassword;
    }

    let i=0;
    while(i< inputslider.value){
     genpassword += allchars.charAt(Math.floor
                               (Math.random() *allchars.length));
             i++;
     }

    return genpassword;
}

