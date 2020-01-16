/////////////////////////////////////////////////////////////////
///////////////////////PÁGINA DE CERVEZAS////////////////////////
/////////////////////////////////////////////////////////////////

   /////////////////////////////////////////////
    /////////EFECTOS IPA  Y  WHITE////////////////////////////
    ///////////////////////////////////////////////
    if (window.matchMedia("(max-width: 767px)").matches) {
        function ipa(){
            // $("#blond").hide("slow");
            // $("#ipa").show("slow");
            // $("#sipa").hide("slow");
            // $("#white").hide("slow");
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
                "margin-top": "-170px"
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
                "left":"15%",
                "top": "1000px"
            },"slow");

            $(".casetera-1").animate({
                "top": "90%",
                "right":"-75px"
            },800).animate({
                "top": "90%",
                "right":"0px"
            },"slow");
        ////////////////////////////////////////////////////
            

        }
        function white(){
            // $("#blond").hide("slow");
            // $("#ipa").hide("slow");
            // $("#sipa").hide("slow");
            // $("#white").show("slow");
        ///////////////////////////////////////////////
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
                "margin-top": "-170px"
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
                "left":"15%",
                "top": "1000px"
            },"slow");

            $(".casetera-3").animate({
                "top": "90%",
                "right":"-75px"
            },800).animate({
                "top": "90%",
                "right":"0px"
            },"slow");
        ////////////////////////////////////////////////////
            

        }
}else{
    function ipa(){
        // $("#blond").hide("slow");
        // $("#ipa").show("slow");
        // $("#sipa").hide("slow");
        // $("#white").hide("slow");
    ///////////////////////////////////////////////
        $(".tarjeta-1").animate({
            "top": "50%",
            "left": "65%"
        },1500).animate({
                "top": "30%",
                "left": "12%"
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
            "top": "35%"
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
    function white(){
        // $("#blond").hide("slow");
        // $("#ipa").hide("slow");
        // $("#sipa").hide("slow");
        // $("#white").show("slow");
    ///////////////////////////////////////////////
        $(".tarjeta-3").animate({
            "top": "50%",
            "left": "65%"
        },1500).animate({
                "top": "30%",
                "left": "10%"
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
            "top": "35%"
        },"slow");

        $(".casetera-3").animate({
            "top": "90%",
            "right":"-75%"
        },800).animate({
            "top": "90%",
            "right":"20%"
        },"slow");
    ////////////////////////////////////////////////////
        

    }
}


$("#blond").hide();
$("#ipa").hide();
$("#sipa").hide();
$("#white").hide();

$(window).on('load', function(){
    var url = String(window.location.href);
    var string = "?cerv=2";
    var posicion = url.indexOf(string);
    if(posicion != -1){
            $("#blond").hide("slow");
            $("#ipa").hide("slow");
            $("#sipa").hide("slow");
            $("#white").show("slow");
    }else{
            $("#blond").hide("slow");
            $("#ipa").show("slow");
            $("#sipa").hide("slow");
            $("#white").hide("slow");
    }
        
    

    $(".loader").fadeOut("slow");
    
});

// $("#ipa").load(function() {
//     $(".loader").fadeOut("slow");
// });
// $("#white").load(function() {
//     $(".loader").fadeOut("slow");
// });



var index = 1;

$(".flechaizq").on( "click", function() {
    index --;
    if(index < 1){
        index = 2;
    }
    if(index == 1){
            $("#blond").hide("slow");
            $("#ipa").show("slow");
            $("#sipa").hide("slow");
            $("#white").hide("slow");
    }else if(index == 2){
            $("#blond").hide("slow");
            $("#ipa").hide("slow");
            $("#sipa").hide("slow");
            $("#white").show("slow");
    }else{
        index = 1;
    }
    console.log("index", index);
  });

  $(".flechader").on( "click", function() {
    index ++;
    if(index > 2){
        index = 1;
    }
    if(index == 1){
            $("#blond").hide("slow");
            $("#ipa").show("slow");
            $("#sipa").hide("slow");
            $("#white").hide("slow");
    }else if(index == 2){
            $("#blond").hide("slow");
            $("#ipa").hide("slow");
            $("#sipa").hide("slow");
            $("#white").show("slow");
    }else{
        index = 1;
    }
    console.log("index", index);
  });







   
 

  

  

  




//   $("#blond").load(function(){
//     console.log("llamando a blond function");
//         blond();
    
//     });



// //////////////////////////////////////////////////////////////
// /////////////////////////LÍQUIDO DELICIOSO////////////////////
// //////////////////////////////////////////////////////////////


// $(".num1").mouseover(function () { 
//     $(".texto").show();
//     $(".nombrecerveza span").replaceWith("<span>BLOND</span>");
//     $(".nombrecerveza span").addClass("contenedorinvisible");
    
// });

// $(".num1").mouseout(function () { 
//     $(".texto").hide();
//     $(".nombrecerveza span").removeClass("contenedorinvisible");
// });

// $(".num1").mouseover(function () { 
//     $(".descripcioncerveza span").replaceWith("<span>SNUGGLE</span>");
//     $(".descripcioncerveza span").addClass("contenedorinvisible2");
// });

// $(".num1").mouseout(function () { 
//     $(".descripcioncerveza span").removeClass("contenedorinvisible2");
// });

// //////////////////////////////////////////////////////////////////////

// $(".num2").mouseover(function () { 
//     $(".texto").show();
//     $(".nombrecerveza span").replaceWith("<span>IPA</span>");
//     $(".nombrecerveza span").addClass("contenedorinvisible");
    
// });

// $(".num2").mouseout(function () { 
//     $(".texto").hide();
//     $(".nombrecerveza span").removeClass("contenedorinvisible");
// });

// $(".num2").mouseover(function () { 
//     $(".descripcioncerveza span").replaceWith("<span>AMAS</span>");
//     $(".descripcioncerveza span").addClass("contenedorinvisible2");
// });

// $(".num2").mouseout(function () { 
//     $(".descripcioncerveza span").removeClass("contenedorinvisible2");
// });

// //////////////////////////////////////////////////////////////////////

// $(".num3").mouseover(function () { 
//     $(".texto").show();
//     $(".nombrecerveza span").replaceWith("<span>WHITE</span>");
//     $(".nombrecerveza span").addClass("contenedorinvisible");
    
// });

// $(".num3").mouseout(function () { 
//     $(".texto").hide();
//     $(".nombrecerveza span").removeClass("contenedorinvisible");
// });

// $(".num3").mouseover(function () { 
//     $(".descripcioncerveza span").replaceWith("<span>SWIRL</span>");
//     $(".descripcioncerveza span").addClass("contenedorinvisible2");
// });

// $(".num3").mouseout(function () { 
//     $(".descripcioncerveza span").removeClass("contenedorinvisible2");
// });

// //////////////////////////////////////////////////////////////////////

// $(".num4").mouseover(function () { 
//     $(".texto").show();
//     $(".nombrecerveza span").replaceWith("<span>SIPA</span>");
//     $(".nombrecerveza span").addClass("contenedorinvisible");
    
// });

// $(".num4").mouseout(function () { 
//     $(".texto").hide();
//     $(".nombrecerveza span").removeClass("contenedorinvisible");
// });

// $(".num4").mouseover(function () { 
//     $(".descripcioncerveza span").replaceWith("<span>CARESS</span>");
//     $(".descripcioncerveza span").addClass("contenedorinvisible2");
// });

// $(".num4").mouseout(function () { 
//     $(".descripcioncerveza span").removeClass("contenedorinvisible2");
// });






//MENU
$(".menuletras").click(function (e) { 
    $(".menu").show("slow");
  });
  
  $(".menufondo").click(function (e) { 
    $(".menu").show("slow");
  });
  
  $(".menuexit").click(function (e) { 
    $(".menu").hide("slow");
    
  });