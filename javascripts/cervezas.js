/////////////////////////////////////////////////////////////////
///////////////////////PÁGINA DE CERVEZAS////////////////////////
/////////////////////////////////////////////////////////////////

$(window).on('load', function(){

    setTimeout(() => {
        blond();
    }, 300);
});


$("#blond").show();
$("#ipa").hide();
$("#sipa").hide();
$("#white").hide();
var index = 1;

$(".flechaizq").on( "click", function() {
    index --;
    if(index < 1){
        index = 4;
    }
    if(index == 1){
        blond();
    }else if(index == 2){
        ipa();
    }else if(index == 3){
        sipa();
    }else if(index == 4){
        white();
    }else{
        index = 1;
    }
    console.log("index", index);
  });

  $(".flechader").on( "click", function() {
    index ++;
    if(index > 4){
        index = 1;
    }
    if(index == 1){
        blond();
    }else if(index == 2){
        ipa();
    }else if(index == 3){
        sipa();
    }else if(index == 4){
        white();
    }else{
        index = 1;
    }
    console.log("index", index);
  });




   /////////////////////////////////////////////
    /////////EFECTOS BLOND///////////////////////
    ////////////////////////////////////////////
  function blond(){
    
    $("#blond").show("slow");
    $("#ipa").hide("slow");
    $("#sipa").hide("slow");
    $("#white").hide("slow");

 ///////////////////////////////////////////////
    $(".tarjeta").animate({
        "top": "50%",
        "left": "65%"
    },1500).animate({
            "top": "20%",
            "left": "15%"
    },"fast");

    $(".imagencentral").animate({
        "margin-top": "500px"
    },1200).animate({
        "margin-top": "-200px"
    },"slow");

    $(".titulocentral").animate({
        "margin-top": "-700px"
    },800).animate({
        "margin-top": "-40px"
    },"slow");

    $(".divimagencentral .texto").animate({
        "left":"25%",
        "top": "90%"
    },800).animate({
        "left":"65%",
        "top": "30%"
    },"slow");

    $(".casetera").animate({
        "top": "90%",
        "right":"-75%"
    },800).animate({
        "top": "90%",
        "right":"20%"
    },"slow");
////////////////////////////////////////////////////////

    
  }


      /////////////////////////////////////////////
    /////////EFECTOS IPA////////////////////////////
    ///////////////////////////////////////////////

  function ipa(){
    $("#blond").hide("slow");
    $("#ipa").show("slow");
    $("#sipa").hide("slow");
    $("#white").hide("slow");
///////////////////////////////////////////////
    $(".tarjeta-1").animate({
        "top": "50%",
        "left": "65%"
    },1500).animate({
            "top": "20%",
            "left": "15%"
    },"fast");

    $(".imagencentral-1").animate({
        "margin-top": "500px"
    },1200).animate({
        "margin-top": "-200px"
    },"slow");

    $(".titulocentral-1").animate({
        "margin-top": "-700px"
    },800).animate({
        "margin-top": "-40px"
    },"slow");

    $(".divimagencentral-1 .texto-1").animate({
        "left":"25%",
        "top": "90%"
    },800).animate({
        "left":"65%",
        "top": "30%"
    },"slow");

    $(".casetera-1").animate({
        "top": "90%",
        "right":"-75%"
    },800).animate({
        "top": "90%",
        "right":"20%"
    },"slow");
////////////////////////////////////////////////////
    

  }



        /////////////////////////////////////////////
    /////////EFECTOS SIPA///////////////////////////
    ////////////////////////////////////////////

  function sipa(){
    $("#blond").hide("slow");
    $("#ipa").hide("slow");
    $("#sipa").show("slow");
    $("#white").hide("slow");
    ////////////////////////////////////////
    $(".tarjeta-2").animate({
        "top": "50%",
        "left": "65%"
    },1500).animate({
            "top": "20%",
            "left": "15%"
    },"fast");

    $(".imagencentral-2").animate({
        "margin-top": "500px"
    },1200).animate({
        "margin-top": "-200px"
    },"slow");

    $(".titulocentral-2").animate({
        "margin-top": "-700px"
    },800).animate({
        "margin-top": "-40px"
    },"slow");

    $(".divimagencentral-2 .texto-2").animate({
        "left":"25%",
        "top": "90%"
    },800).animate({
        "left":"65%",
        "top": "30%"
    },"slow");

    $(".casetera-2").animate({
        "top": "90%",
        "right":"-75%"
    },800).animate({
        "top": "90%",
        "right":"20%"
    },"slow");

//////////////////////////////////////////////


    
  }

  

  function white(){
    $("#blond").hide("slow");
    $("#ipa").hide("slow");
    $("#sipa").hide("slow");
    $("#white").show("slow");

        /////////////////////////////////////////////
    /////////EFECTOS WHITE/////////////////////////
    /////////////////////////////////////////////
    $(".tarjeta-3").animate({
        "top": "50%",
        "left": "65%"
    },1500).animate({
            "top": "20%",
            "left": "15%"
    },"fast");

    $(".imagencentral-3").animate({
        "margin-top": "500px"
    },1200).animate({
        "margin-top": "-200px"
    },"slow");

    $(".titulocentral-3").animate({
        "margin-top": "-700px"
    },800).animate({
        "margin-top": "-40px"
    },"slow");

    $(".divimagencentral-3 .texto-3").animate({
        "left":"25%",
        "top": "90%"
    },800).animate({
        "left":"65%",
        "top": "30%"
    },"slow");

    $(".casetera-3").animate({
        "top": "90%",
        "right":"-75%"
    },800).animate({
        "top": "90%",
        "right":"20%"
    },"slow");
/////////////////////////////////////////////////////////////////
  }

  

  




//   $("#blond").load(function(){
//     console.log("llamando a blond function");
//         blond();
    
//     });




