/**
 * Created by xaipo on 5/10/2017.
 */
/**
 * Created by xaipo on 9/30/2015.
 */



app.controller('LoginController', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {

   // console.log(myProvider.getUser());

    $scope.estadoInicio=function(){

        $scope.us = JSON.parse(window.localStorage.getItem('se'));

        if($scope.us!=null){
            // window.location ='./error.html';

        }
        //   console.log($scope.us);
    }


    $scope.user={
        'name':'',
        'pass':''
    }

    $scope.token='';

    $scope.login=function(){

     //   console.log('entrar1');
//console.log($scope.user);
       // var ss= Date();
        //var vec= ss.split(' '




        if($scope.user.name!=undefined && $scope.user.name!=''&&$scope.user.pass!=undefined && $scope.user.pass!='')    {

            //console.log($scope.user);

            $scope.user.pass=SHA1($scope.user.pass);
            console.log($scope.user.pass);
//console.log($scope.user.pass);

            $scope.user.password=
                $scope.us = JSON.parse(window.localStorage.getItem('se'));
            $http({
                method: 'POST',
                url: myProvider.getLogin(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    user: $scope.user.name,
                    password: $scope.user.pass

                }


            }).then(function successCallback(response) {
                console.log(response.data);

                if(response.data.length==0){

                    alert('Error al ingresar');
                }else{
                    var resp = {

                        name:response.data[0].USER,
                        _id:response.data[0].CODIGO,
                       // tipo:response.data.value.tipo
                    }
                    //console.log(response.data.value);
                    //console.log(resp);
                    var obj= response.data[0]
                    //console.log(obj.tk);
                    console.log(obj);


                            //window.localStorage.setItem("se", JSON.stringify(obj.tk));
                            window.localStorage.setItem("usuario", JSON.stringify(obj));
                           window.location ='./indexAdmin.html';


                    /*window.localStorage.setItem("se", JSON.stringify(obj.value.tk));
                     window.localStorage.setItem("usuario", JSON.stringify(resp));
                     window.location ='./index.html';*/
                }


            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;
                alert('error al realizar Ingreso');

            });
        }else{

            alert('comuniquese con el amdministrador del sistema');
        }


    }



    $scope.logout=function(){

        $scope.us = JSON.parse(window.localStorage.getItem('usuario'));
       // console.log($scope.us);

            localStorage.removeItem('usuario');
            window.location ='index.html';







    }

    //  console.log($rootScope.usuarioLogin);

}]);