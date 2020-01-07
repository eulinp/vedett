$( document ).ready(function() {

  if($.cookie('mayor') != 'true'){
    $("#myModal").modal("toggle");
  }

    $("#sinEdad").click(function(){
      $(".menufondo").hide();
      $(".botellafixed").hide();
      $(".sinEdadSuficiente").show();
    })

    $("#conEdad").click(function(){
      $.cookie('mayor', 'true', { expires: 7, path: '' });

    })
})


//MODIFICACION A CONOCENUESTRASCERVEZAS
$(".conocenuestrascervezas").mouseover(function () { 
    $(".meetourbeersTitulo").css("color","red");
    $(".meetourbeersSubtitulo").css("color","black");
});
$(".conocenuestrascervezas").mouseout(function () { 
    $(".meetourbeersTitulo").css("color","black");
    $(".meetourbeersSubtitulo").css("color","red");
});




//MODIFICACION A RULETA
function spin_the_bottle () {



    var nrRotationsForSwitch = 2;
    var nrRotationsCurrent = 0;
    var updatingRotationsNr = false;
    var degreeCurrent = 0;
    var skinCurrent = 1;
    var skinPrevious = 1;
    var skinMax = 2;

    var target = $('.imagenruleta');

    //console.log(target);

    if(target.length > 0){

        var offset = target.offset();

        $(document).mousemove(function(evt){

            var center_x = (offset.left) + (target.width()/2);
            var center_y = (offset.top) + (target.height()/2);
            var mouse_x = evt.pageX; var mouse_y = evt.pageY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            var degree = (radians * (180 / Math.PI) * -1) + 180;
            target.css('-moz-transform', 'rotate('+degree+'deg)');
            target.css('-webkit-transform', 'rotate('+degree+'deg)');
            target.css('-o-transform', 'rotate('+degree+'deg)');
            target.css('-ms-transform', 'rotate('+degree+'deg)');

            if(degree > 350 && degree < 359.9){
              if(!updatingRotationsNr){
                updatingRotationsNr = true;
                nrRotationsCurrent++;
              }
            } else {
              updatingRotationsNr = false;
            }
            if(nrRotationsCurrent == nrRotationsForSwitch){

              // pick next skin for bottle
              if(skinCurrent <= skinMax){
                skinCurrent++;
              } else {
                skinCurrent = 1;
              }
              target.removeClass('otro-skin-' + skinPrevious);
              target.addClass('otro-skin-' + skinCurrent);
              skinPrevious = skinCurrent;
              // reset current nr rotations
              nrRotationsCurrent = 0;
          }
        });
    }
  }
  spin_the_bottle ();


  
//MODIFICACION A SPANCARDBOTTLE
  $(".spancardbottle").mouseover(function () { 
    $(".insert").css("color","rgb(0, 170, 28)");
    $(".spanabajo").css("color","rgb(0, 170, 28)");
    $(".yourcrazy").css("color","black");
});

$(".spancardbottle").mouseout(function () { 
  $(".insert").css("color","black");
  $(".spanabajo").css("color","black");
  $(".yourcrazy").css("color","rgb(0, 170, 28)");
});

//MODIFICACION A WATER
$(".water").mouseover(function () { 
  $(".water a .cuadrado").css("background","#007bff");
  $(".water a p").css("color","white");
});

$(".water").mouseout(function () { 
$(".water a .cuadrado").css("background","white");
  $(".water a p").css("color","#007bff");
});




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



if (window.matchMedia("(max-width: 767px)").matches) {


	$(function() {

	

			$(document).on("touchmove", function () {
				if (scrollY > 400){
					$("#bottle1").effect( "shake", {times:12, distance:3}, 700 );
					$("#bottle3").effect( "shake", {times:12, distance:3}, 700 );
					$("#bottle5").effect( "shake", {times:12, distance:3}, 700 );
				}else{
					$("#bottle1").stop(true);
					$("#bottle3").stop(true);
					$("#bottle5").stop(true);
				}
				
			});
		
	});
}







// $(function() {
//   $("#fechaNacimiento").datepicker(
//     {
//       minDate: new Date(1900,1-1,1), maxDate: '-18Y',
//       dateFormat: 'dd/mm/yy',
//       defaultDate: new Date(1970,1-1,1),
//       changeMonth: true,
//       changeYear: true,
//       yearRange: '-110:-18'
//     }
//   );
// });


