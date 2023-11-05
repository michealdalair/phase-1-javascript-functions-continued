function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }



   const mondayWork= function(activity="go to the office"){
    if(activity){
        return `This Monday, I will ${activity}.`;

    }else{
    return "This Monday, I will work from home."
    }
   


   }


function wrapAdjective(string= "*"){
    return function(name="special"){
        return `You are ${string}${name}${string}!`
    }
        
}

     
wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!" 
   