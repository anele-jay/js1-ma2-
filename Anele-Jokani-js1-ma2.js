
//one
var myFunctionExpression = function(){
    console.log("Anele");
}

//two

 var testFunc = document.querySelector(".btn");

 function clickMe(){
     console.log("I was clicked");
 };

 testFunc.addEventListener("click", clickMe);

 //three

 var inputClicked = document.querySelector("#firstName");

 function buttonIsReleased() {
     console.log("A key was released");
 };

inputClicked.addEventListener("keyup", buttonIsReleased);

 //four

 var mouseover = document.querySelector("button");

 function cursorMovedOver() {
     console.log("Mouse moved over");
 };

 mouseover.addEventListener("mouseover", cursorMovedOver);
 mouseover.classList.add("hover");
 

 //five

 var mouseOutRomver = document.querySelector("[data-animal='dog']");

 mouseOutRomver.classList.remove("hover");

 //six
 var listTag = document.querySelectorAll("li");

  for(let i=0; i < listTag.lenght ; i++){
    function list() {
        console.log(listTag[i]);
    }
  };

  listTag.addEventListener("mouseover", list);

  //seven 
  switch (animal) {
    case "animal"
      cat = meow;
      break;

    case "animal";
      cow = moo;
      break;

    case "animal"
      bird = tweet;
      break;

    default 
      animal = Harrumph;
  };

  //eight
   
  const sheep = ["Malcolm", "Anders", "Marie"];
  sheep.forEach(endPro);

  function endPro(item, index){
      innerHTML += index + ":" item + "<br>";
  }
  
  //nine
  const timeoutContainer = document.querySelector(".timer");

function timerUpdate() {
    timeoutContainer.innerHTML = "Tdahhhh..."
}

setTimeout(timerUpdate, 1500);

//ten

