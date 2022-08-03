// testing input
            /*
            var age = prompt("enter your age");
            age;
            alert("you are " + age + " years old ");
            */
    
           /* 
            var age = parseInt(prompt("please enter your age: "));
            if( age >=18 && age <=120){
                alert("you are alowed to vote");
            }
            else if(age >=1 && age <=17){
                alert("too young to vote");
            }
            else if( age <1 || age >120 ){
                alert("the age is invalid");
            }
            else{
                alert("you have not entered your age");
            }
           */
          /*
           var userinput= prompt("please choose your favourite color\nwhite\nblue\nred\ngreen");
           switch(userinput){

            case 'white':
            alert("you seem to be beatiful person");
            break;
           
          
            case 'blue':
            alert("you seem to be beatiful person");
            break;
           
          
            case 'red':
            alert("you seem to be beatiful person");
            break;
           
          
            case 'green':
            alert("you seem to be beatiful person");
            break;
          
           default:
            alert("please choose colors listed in the list");
           }
           */
           //switch case statement
           /*
           let choices= prompt("please choose your preferred presdential candidate \nRaila\nRuto\nWajakhoya\nnone");
           switch(choices){

            case 'raila':
            alert("you like progress of this country");
            break;
           
          
            case 'ruto':
            alert("you like killing the country economy in the name of punishing Raila");
            break;
           
          
            case 'wajakhoya':
            alert("you just want to smoke weed and nothing else");
            break;
          
           default:
            alert("please leave the country, you are not exercising your rights");
           }
           */

           //while loop
           /*
           var i=1;
           while(i<=5){
            console.log("welcome to class" + i);
            i++;
           }
           */

           //do while loop
           /*
           var i=1;
           do{
                console.log("welcome" + i);
                i++;
           }
           while(i<=5);

           */

           //for loop
           /*
           for( var i=1; i<=5; i++){
            console.log("welcome to class");
           }
           */
          /*
          var i=1;
          while(i<=10){
            console.log(i);
            i++;
          }
          */

          /*
         var num = parseInt(prompt("please enter a number"));
           for(i=1; i<=num; i++){
                if(i % 2 == 0){
                    document.write(i + "<br>");
                }
           }
           */

           /*looping ann array
          var my_array = [2, 3, 4, 9, 0];
          
          for(i=0; i<my_array.length; i++){
            document.write(my_array[i] + " " + "<br>");
          }
          */
          //looping an array through use of function.
          /*
          var my_array = [2, 3, 4, 9, 0];

          my_array.forEach(function(my_array){
            document.write(my_array);
          });
          */
         /*
          function addnumbers(){
            var num1= parseInt(document.getElementById("num1").value);
            var num2= parseInt(document.getElementById("num2").value);
            parseInt(document.getElementById("answer").value = num1 + num2);

          }
          */
          /*
         
         
          
          
         function changecolorclick(){
          document.getElementById("change").style.backgroundColor = "red";
         }
         function changecolorout(){
          document.getElementById("change").style.backgroundColor = "blueviolet";
         }
         function changecolorover(){
          document.getElementById("change").style.backgroundColor = "black";
         }


         function mydate(){
          document.getElementById("date").innerHTML= new Date();
          }
        
          
          var intervalid;
          //getcurrentDateTime
    
          function startTime(){
            intervalid = setinterval(getcurentDateTime, 1000);
          }
    
          function stopTime(){
            clearInterval(intervalid);
          }
    
          function getcurentDateTime(){
            document.getElementById("mydiv").innerHTML = new date()
          }
          class student{
            constructor(name, email){
              this.name = name;
              this.email = email;
            }
            login(){
              console.log(this.name, "has logged in...");
            }
            logout(){
              console.log(this.name, "has logged out...");
            }
           }
           var student1 = new student('john', 'samiiir@gmail.com');
            */


           /*
           class student{
            constructor(name, email){
              this.name = name;
              this.email = email;
            }
            login(){
              console.log(this.name, "has logged in...");
              return this;
            }
            logout(){
              console.log(this.name, "has logged out...");
              return this;
            }
           }
           var student1 = new student('john', 'samiiir@gmail.com');
           student1.login().logout();
           var student2 = new student('samiir', 'cade@gmail.com');
           var student3 = new student();
          */

           class math_computation1{
              addition(){
                console.log(50 + 50 + " is the output of parent class");
              }
           }
           
           class math_computation2 extends math_computation1{
            addition(){
              console.log(50 + 150 + " is the output of child class");
            }

            
           }
           var num1 = new math_computation1();
           var num2 = new math_computation2();

           num1.addition();
           num2.addition();


           //callback functon
          function greeting(name) {
            alert('Hello ' + name);
          }
          
          function processUserInput(callback) {
            var name = prompt('Please enter your name.');
            callback(name);
          }
          
          processUserInput(greeting);
           