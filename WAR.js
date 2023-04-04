//seccion del buscador interno con js
$(document).ready(function () {
	$("input[type=text]").on("keyup",function () {
	 option=false;
	 $("input[type=text]").each(function () {
	  if (!this.value) {
	   option=true;
	  }
	 });
	   $("input[type=submit]").attr("disabled",option);
	});
});
$('.Show').click(function() {
	$('#target').show(500);
	$('.Show').hide(0);
	$('.Hide').show(0);
  });
  $('.Hide').click(function() {
	$('#target').hide(500);
	$('.Show').show(0);
	$('.Hide').hide(0);
  });
  $('.toggle').click(function() {
	$('#target').toggle('slow');
  });
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.gallery--item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.gallery--item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.gallery--item[category="'+catProduct+'"]').show();
			$('.gallery--item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.gallery--item').show();
			$('.gallery--item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

/*SEction de mostrar y ocultar seecciones de peliculas*/
function peli1(){
	document.getElementById('peli1').style.display = 'block';	
	document.getElementById('peli2').style.display = 'none';
	document.getElementById('peli3').style.display = 'none';

}
function avatar(){
	document.getElementById('p-center1').style.display = 'block';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'none';
	document.getElementById('p-center3').style.display = 'none';
	document.getElementById('p-center5').style.display = 'none';
	document.getElementById('p-center6').style.display = 'none';
}

function LF(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'block';
	document.getElementById('p-center3').style.display = 'none';
	document.getElementById('p-center4').style.display = 'none';
	document.getElementById('p-center5').style.display = 'none';
	document.getElementById('p-center6').style.display = 'none';
}

function S5(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'none';
	document.getElementById('p-center3').style.display = 'block';
	document.getElementById('p-center4').style.display = 'none';
	document.getElementById('p-center5').style.display = 'none';
	document.getElementById('p-center6').style.display = 'none';
}
function Black(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'none';
	document.getElementById('p-center3').style.display = 'none';
	document.getElementById('p-center4').style.display = 'block';
	document.getElementById('p-center5').style.display = 'none';
	document.getElementById('p-center6').style.display = 'none';
	
}
function Titan(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'none';
	document.getElementById('p-center3').style.display = 'none';
	document.getElementById('p-center4').style.display = 'none';
	document.getElementById('p-center5').style.display = 'block';
	document.getElementById('p-center6').style.display = 'none';

}
function NP(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center2').style.display = 'none';
	document.getElementById('p-center3').style.display = 'none';
	document.getElementById('p-center4').style.display = 'none';
	document.getElementById('p-center5').style.display = 'none';
	document.getElementById('p-center6').style.display = 'block';
}
function Zam(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center7').style.display = 'block';
}
function JW(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center8').style.display = 'block';

}
function OP(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center9').style.display = 'block';

}
function LC(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center10').style.display = 'block';
}
function Marlove(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center11').style.display = 'block';
}
function S6(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center12').style.display = 'block';
}
function Credlll(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center13').style.display = 'block';
}
function PeorV(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center14').style.display = 'block';
}
function LLamana(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center15').style.display = 'block';
}
function Antman(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center16').style.display = 'block';
}
function GatoB(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center17').style.display = 'block';
}
function Piloto(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center18').style.display = 'block';
}
function JurassicD(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center19').style.display = 'block';
}
function Loveand(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center20').style.display = 'block';
}
function TopG(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center21').style.display = 'block';
}
function BlackP(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center22').style.display = 'block';
}
function TitanesP(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center23').style.display = 'block';
}
function ElefantaM(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center24').style.display = 'block';
}
function Babylon(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center25').style.display = 'block';
}
function Tsystem(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center26').style.display = 'block';
}
function BatP(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center27').style.display = 'block';
}
function InspectorA(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center28').style.display = 'block';
}
function Pchang(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center29').style.display = 'block';
}
function Geminis(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center30').style.display = 'block';
}
function wick3(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center31').style.display = 'block';
}
function wick2(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center32').style.display = 'block';
}
function wick1(){
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-center33').style.display = 'block';
}
function TFormers1(){
	document.getElementById('p-center34').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function TFormers2(){
	document.getElementById('p-center35').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function TFormers3(){
	document.getElementById('p-center36').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function TFormers4(){
	document.getElementById('p-center37').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function TFormers5(){
	document.getElementById('p-center38').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function DG23(){
	document.getElementById('p-center39').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function Thelake(){
	document.getElementById('p-center40').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
function Asasins(){
	document.getElementById('p-center41').style.display = 'block';
	document.getElementById('p-center1').style.display = 'none';
	document.getElementById('wrap').style.display = 'none';
}
//Funciones añadiddas para las series cada una y ocultar el wrapp/
function OcultarP(){
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('p-centerro').style.height = '700px';
}
function SuperL(){
	document.getElementById('serie1').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function 	Temporada1(){
	document.getElementById('temp1').style.display = 'grid';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
}
function 	Temporada2(){
	document.getElementById('temp1').style.display = 'none';
	document.getElementById('temp2').style.display = 'grid';
	document.getElementById('temp3').style.display = 'none';
}
function 	Temporada3(){
	document.getElementById('temp1').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'grid';
}
function Flash(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie2').style.display = 'flex'
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function TrueL(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie3').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function GoK(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie4').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function TheLOF(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie5').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function LaEsca(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie6').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function LLTP(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie7').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function TulsaK(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie8').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function StartrekP(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie9').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
}
function ShadowP(){
	document.getElementById('serie1').style.display = 'none';
	document.getElementById('serie10').style.display = 'flex';
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('CONTENT').style.display = 'none';
	document.getElementById('p-centerro').style.display = 'none';
	document.getElementById('tempo1').style.display = 'grid';
	document.getElementById('tempo2').style.display = 'none';
}
function Tempo1(){
	document.getElementById('tempo1').style.display = 'grid';
	document.getElementById('tempo2').style.display = 'none';
}
function Tempo2(){
	document.getElementById('tempo1').style.display = 'none';
	document.getElementById('tempo2').style.display = 'grid';
}
function login(){
  var user, password

  user= document.getElementById("Usuario").value;
  password= document.getElementById("password").value;
  if( user == "cineflix13@play.com" && password == "1234"){
    window.location = "cine.html";
  } else{
    alert("Usuario o contraseña no validos")
  }
}