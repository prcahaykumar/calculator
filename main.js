const value=document.getElementById("display");

function addValue(input){
    value.value=value.value+input;
}

function clearscr(){
    value.value="";
}
function getResult(){
    try{
    value.value=eval(value.value)
}
catch(error){
    value.value="SYNTAX ERROR";
}
}
function  removeCh(){
    value.value =value.value.slice(0, -1);
}