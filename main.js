
const fibonnaci = (number) => {
 
    function printDom(){
        let seq = document.getElementById("sequence"); 
        seq.innerHTML="";
        seq.innerHTML=elements; 
    }
    

    var elements =[0,1];
if (number <=1){
    elements= number;
    printDom();
  
    return number; 
} else{
    for (var i=2; i <= number ; i++){
        elements.push(i);
        elements[i] =  elements[i-2] + elements[i-1] ;
    }
    printDom();
 
   
    return elements.pop();
}

}
function calculateFibonnaci() {

 var number = Number(document.getElementById("number").value);
 if (number == ""){

   var fibNum = (document.getElementById("fibNum"));
   fibNum.innerHTML="Please enter a number " ;

 }else{

   let calculatedNumber =  fibonnaci (number);
   var fibNum = (document.getElementById("fibNum"));
   fibNum.innerHTML="Fibonacci number:" + calculatedNumber;
   
 }
 
}



 

