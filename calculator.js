let string=""
let dis=document.getElementById("display")
function calculate(number){
    
    string+=number
    dis.value= string
}
function clear_1(){
    string=""
    dis.value= string
    
}
function del(){
    
    string=string.substring(0,string.length-1)
    dis.value=string    
}
function final(){
    var result=document.getElementById("equal")
    
    result=eval(string)
    dis.value=result
    
}