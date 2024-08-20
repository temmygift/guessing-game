
    // function one() {
    //     // Generate a random number between 0 and 10
    //     var num = Math.floor(Math.random() * 11);
    //     var submit = Number(document.getElementById("input").value)
    //     var message = num;


    //     if(num > submit){

    //     document.getElementById("message").textcontent = "Too Low the correct answer is" + num + "Try again" ;
       
    //     } 
        
    //     else if
    //         (num < submit ){


    //         document.getElementById("message").textContent = "Too high the correct answer is " + num + "Try again";
            
    //         }
    //     else if 

    //         (num === submit) {
    //                 document.getElementById("message").textContent = "The answer is correct";
    //     }
    // }
    function one() {
     
        var num = Math.floor(Math.random() * 11);
        
        var submit = Number(document.getElementById("input").value);
    
       
        // if (isNaN(submit)) {
        //     document.getElementById("message").textContent = "Please enter a valid number.";
        if( submit<num){
            document.getElementById("message").textContent = "Too low! The correct number was " + num + ". Try again!";

        } else if (submit > num) {
            document.getElementById("message").textContent = "Too high! The correct number was " + num + ". Try again!";
            
        } else if (submit === num) {
            document.getElementById("message").textContent = "Congratulations! The answer is correct!";
        }
    }
    