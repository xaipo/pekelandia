var app = angular.module('myApp', ['ngStorage','ngRoute']);

app.config (function($routeProvider ,$provide){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/inicio",{templateUrl:"datos/test.html"});
    $routeProvider.when("/mostrarnoticias",{templateUrl:"datos/codigo.html", controller:'mostrarController'});
    $routeProvider.when("/vision",{templateUrl:"datos/vision_mision.html", controller:'mostrarController'});
    $routeProvider.when("/principios",{templateUrl:"datos/principios.html", controller:'mostrarController'});
    $routeProvider.when("/perfiles",{templateUrl:"datos/perfiles.html", controller:'mostrarController'});
    $routeProvider.when("/perfiles_doc",{templateUrl:"datos/perfiles_docentes.html", controller:'mostrarController'});
    $routeProvider.when("/matricula_activa",{templateUrl:"datos/activada_matricula.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_desactivada",{templateUrl:"datos/desactivada_matricula.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_primera",{templateUrl:"datos/matricula_primera_vez.html", controller:'matriculaController'});
    $routeProvider.when("/matricula_antigua",{templateUrl:"datos/matricula_antigua.html", controller:'matriculaController'});
});

app.controller('noticiasController', function($scope, $http, $rootScope, $location,$localStorage){

	
          $scope.noticia_act;  
       		

          $scope.inicializar = function () {


          	window.location="#/inicio";

         
    }

       $scope.ini_acerca = function () {


          	window.location="#/vision";

         
    }

            $http.get("php/consulta.php")
            .then(function (response) {

                $scope.listNoticias = response.data;
          
            }, function errorCallback(response) {
            
                console.log(response);
            });



		$scope.ver_mas = function (noticia) {
			window.localStorage["noticia"]= JSON.stringify(noticia);
			$scope.noticia_act = noticia;
			window.location ="#/mostrarnoticias";
			

		}

		$scope.ver_inicio = function () {
			console.log("hey");
			window.location="#/inicio";
			


		}

		$scope.ver_vision = function () {
			
				window.location="#/vision";

		}

		$scope.ver_principios = function () {
			
				window.location="#/principios";

		}

		$scope.ver_perfiles = function () {
			
				window.location="#/perfiles";

		}

		$scope.ver_perfiles_doc = function () {
			
				window.location="#/perfiles_doc";

		}

		
   
	});

app.controller('matriculaController', function($scope, $http, $rootScope, $location,$localStorage){

	
          $scope.noticia_act;  
       		

          $scope.inicializar = function () {


          	 $http.get("php/consultar_dispo_matri.php")
            .then(function (response) {

                $scope.estado_mat = response.data;
               // console.log(response.data[0].ESTADO);

                if(response.data[0].ESTADO == "si")
		            {
		            	window.location="#/matricula_activa";
		            }
		            else
		            {
		            	window.location="#/matricula_desactivada";
		    		}
          
            }, function errorCallback(response) {
            
               
            });
        
    }

       $scope.ver_page1 = function () {


          	window.location="#/matricula_primera";

         
    }
      $scope.ver_page2 = function () {


          	window.location="#/matricula_antigua";

         
    }


 $scope.enviarDatos = function () {


          	////--------Datos Obtenidos desde el html
	var cedula = $('#cedula').val();
	var nombre = $('#textnom_usuario').val();
	var fecha_naci = $('#textfecha_naci').val();
	var años = 0;
	var meses = 0;
	var sexo = $('#opsexo:checked').val();
	var talla = $('#numtalla').val();
	var peso = $('#numpeso').val();
	var torax = $('#numtorax').val();
	var id_jornada = $('#opjornada:checked').val();
	var nivel = $('#textopnivel:checked').val();
	var id_refrigerio = $('#textoplunch:checked').val();
	var alimentos_excluidos = $('#textalimen_exc').val();
	var problemas_salud = $('#textprob_salud').val();
	var alergias = $('#textaler_niño').val();
	var medicacion = $('#textmedi_recibe').val();
	var pediatra = $('#text_nom_pedia').val();
	var tel_pediatra = $('#numtelf').val();
	var perso_recibir_niños = $('#textreci_niño').val();
	var tel_emergencia = $('#num_telf_emerg').val();
	var observaciones = $('#textobserv').val();
	var centro_edu_anterior = $('#textcentro_edu').val();

// funcion para enviar datos al archivo php y devuelve un valor string
	$.ajax({

		url:"php/ingresar.php",
		success:function(result) //devuelve el resultado desde php
		{
			//alert(result); 
			if (result =="true")
			{

				
				$("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				alert("El Usuario ya se encuentra registrado");
				
			}
			if(result =="false")
			{
				
				//alert("Registro Exitoso");
				$("#resultado").html("<div style = 'background:green' class='text-1'>Registro Exitoso</div>");
				
			}
			if((result != "true")&&(result !="false"))
			{
				$("#resultado").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				alert("Error en la base de datos, No se ingreso el usuario");
			}
			
		},
		data:{ 
			id_refrigerio:id_refrigerio,
			id_jornada:id_jornada,
			cedula:cedula,
			nombre:nombre,
			fecha_naci:fecha_naci,
			anios:años,
			meses:meses,
			sexo:sexo,
			talla:talla,
			peso:peso,
			torax:torax,	
			//nivel:nivel,
			alimentos_excluidos:alimentos_excluidos,
			problemas_salud:problemas_salud,
			alergias:alergias,
			medicacion:medicacion,
			pediatra:pediatra,
			tel_pediatra:tel_pediatra,
			perso_recibir_ninios:perso_recibir_niños,
			tel_emergencia:tel_emergencia,
			observaciones:observaciones,
			centro_edu_anterior:centro_edu_anterior
		},
		type:"GET"
	});


         
    }

 $scope.escogerOpcion = function () {

 	var op = $('#sel1').val();
 	console.log(op);
 	
 	if (op=="Cédula")
 	{
 		$("#cedula").show();
		$("#nombre").hide();
				

 		

 	}else
 	{
 		$("#cedula").hide();
		$("#nombre").show();
 	}



 }
 $scope.consultar_cedula = function () {

 	var op = $('#cedula_con').val();
 	console.log(op);
 	$.ajax({

		url:"php/consultar_cedula.php",
		success:function(result) //devuelve el resultado desde php
		{
			//alert(result); 
			if (result =="true")
			{

				
				window.location="#/matricula_antigua"
				alert("El Usuario ya se encuentra registrado");
				
			}
			if(result =="false")
			{
				window.location="#/matricula_primera";
				alert("El usuario no se encuentra en la base de datos");
				;
				
			}
			if((result != "true")&&(result !="false"))
			{
				$("#mensaje").html("<div style = 'background:red' class='text-1'> No se a registrado correctamente el usuario</div>");
				alert("Error en la base de datos, No se ingreso el usuario");
			}
			
		},
		data:{ 
			
			cedula:op
			
		},
		type:"GET"
	});


 	



 }

		
   
	});


app.controller('mostrarController', function($scope, $http, $rootScope, $location,$localStorage){

	       	 
		
		$scope.Noticia=  JSON.parse(localStorage.getItem("noticia"));
		
		
	
   

	});





