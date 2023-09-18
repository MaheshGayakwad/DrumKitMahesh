
  //code for mouse clicks
  
  
  for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
        document.querySelectorAll("button")[i].addEventListener("click" , function(){

        var key =  this.innerHTML;
        animation(key);

           switch (key) {
            case "w":
                
            var mySound = new Audio("./sounds/tom-1.mp3");
            mySound.play();

           

                break;
           
                case "a":
                
                var mySound = new Audio("./sounds/tom-2.mp3");
                mySound.play()
    
                    break;

                    case "s":
                
                    var mySound = new Audio("./sounds/tom-3.mp3");
                    mySound.play()
        
                        break;        



                        case "j":
                
                        var mySound = new Audio("./sounds/snare.mp3");
                        mySound.play()
            
                            break;            

                            case "k":
                
                            var mySound = new Audio("./sounds/kick-bass.mp3");
                            mySound.play()
                
                                break;


                        case "d":
                
                        var mySound = new Audio("./sounds/tom-4.mp3");
                        mySound.play()
            
                            break;            


                            case "l":
                
                            var mySound = new Audio("./sounds/crash.mp3");
                            mySound.play()
                
                                break;
                                
                                
            default:
                break;
           }

    
        });
    
    } 


    
    //code for keyboard press....


    document.addEventListener("keydown" , function(event){

       var key = event.key;

       animation(key);
            
       
       switch (key) {
        case "w":
            
        var mySound1 = new Audio("./sounds/tom-1.mp3");
        mySound1.play();

        

            break;
       
            case "a":
            
            var mySound2 = new Audio("./sounds/tom-2.mp3");
            mySound2.play()

                break;

                case "s":
            
                var mySound3 = new Audio("./sounds/tom-3.mp3");
                mySound3.play()
    
                    break;        



                    case "j":
            
                    var mySound4 = new Audio("./sounds/snare.mp3");
                    mySound4.play()
        
                        break;            

                        case "k":
            
                        var mySound5 = new Audio("./sounds/kick-bass.mp3");
                        mySound5.play()
            
                            break;


                    case "d":
            
                    var mySound6 = new Audio("./sounds/tom-4.mp3");
                    mySound6.play()
        
                        break;            


                        case "l":
            
                        var mySound7 = new Audio("./sounds/crash.mp3");
                        mySound7.play()
            
                            break;
                            
                            
        default:
            break;
       }

    });



    //Adding Animations

    function animation(key){

        document.querySelector("." + key).classList.add("pressed");

       setTimeout(function(){
        
         document.querySelector("." + key).classList.remove("pressed");  }, 100);

    }


    // var mySound = new Audio('./sounds/crash.mp3');
    // mySound.play()