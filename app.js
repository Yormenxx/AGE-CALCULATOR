const $inputDay = document.getElementById("input-day"),
 $inputMonth = document.getElementById("input-month"),
 $inputYear = document.getElementById("input-year"),
 $btnCalcular = document.getElementById("btn-calcular"),
 $dayText = document.getElementById("day-result"),
 $monthText = document.getElementById("month-result"),
 $yearText = document.getElementById("year-result");
 
const $form = document.getElementById("form")


const dayNow = new Date();

let yearDate = dayNow.getFullYear();

let dayDate = dayNow.getDate();

let monthDate = dayNow.getMonth();



$btnCalcular.addEventListener("click",(e)=>{


    let dayReturn =evaluarDay();
    
    let monthReturn =evaluarMonth();

    let yearReturn = evaluarYear();
    

    let resultDayText = dayDate - dayReturn;


    if(resultDayText < 0){

        resultDayText = resultDayText * (-1);

        $dayText.textContent = resultDayText;

    }else{

        $dayText.textContent = resultDayText;
    }


    
    let resultMonthText = monthDate - monthReturn;

    if(resultMonthText < 0){

        resultMonthText = resultMonthText *(-1);

        $monthText.textContent = resultMonthText;

    }else{

        $monthText.textContent = resultMonthText;

    }

   
    let resultYearText = yearDate - yearReturn;

    if(resultYearText <0){

        resultYearText = resultYearText * (-1)

        $yearText.textContent = resultYearText;

    }else{
        $yearText.textContent = resultYearText;
    }
  
    
    
   
    $form.reset();
            

})



function  evaluarDay() {

    if(!isNaN($inputDay.value)){


        if($inputDay.value >31 || $inputDay.value < 0){

            alert("Valor day no estan dentro del rango")

            $form.reset();
            
        }else{
            return $inputDay.value;
        }


    }else if( typeof $inputDay.value === "string"){

        alert("No es un numero");

        $form.reset();

    }




};

function evaluarMonth(){

    if(!isNaN($inputMonth.value)){

      
        if($inputMonth.value >12 || $inputMonth.value < 0 ){

            alert("Valor Month no estan dentro del rango")
            $form.reset();
            
        }else{
            return $inputMonth.value;
        }

    }else if(typeof $inputMonth.value ==="string"){

        alert("Valor month es un texto, debe de ser numero")
        $form.reset();
    }



}


function evaluarYear(){

    if(!isNaN($inputYear.value)){

        

        if($inputYear.value < 1900){

            alert("Valor Year no estan dentro del rango")
            $form.reset();
            
        }
        else{
            return $inputYear.value;
        }

    }else if(typeof $inputYear.value ==="string"){

        alert("Valor year es un texto, debe de ser numero")
        $form.reset();
    }



}




