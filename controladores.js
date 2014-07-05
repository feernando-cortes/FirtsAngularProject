/**
 * Created by Feer on 02/07/2014.
 */
function controllerTrovadores($scope){
    $scope.trovadores = [{name:'Fernando Delgadillo', hecho:false , edit:false},
                        {name:'Silvio Rodriguez', hecho:false, edit:false},
                        {name:'Raul Ornelas', hecho:false, edit:false},
                        {name:'Facundo Cabral', hecho:false, edit:false},
                        {name:'Albert Valora', hecho:false, edit:false},
                        {name:'Eduardo Levi', hecho:false, edit:false},
                        {name:'Silvio Rodriguez', hecho:false, edit:false},
                        {name:'Edgar Ocearonsky', hecho:false, edit:false}];

    $scope.addTrovador = function(){
        $scope.trovadores.push({name:$scope.nuevoTrovador, hecho:false, edit:false});
        $scope.nuevoTrovador = "";
    }

    $scope.deleteTrovador = function(){
        var tempTrovadores = $scope.trovadores;
        $scope.trovadores = [];
        angular.forEach(tempTrovadores, function (trovador) {
            if(!trovador.hecho)
                $scope.trovadores.push(trovador);
        })
    }

    $scope.editTrovador = function(){
        var contEdits = 0;
        angular.forEach($scope.trovadores, function (trovador) {
            if(trovador.edit){
                contEdits+=1;
            }
        })

        if(contEdits>1){
            alert("Solo seleccione 1 elemento porfavor");
            alert.class = "alert alert-danger"
            return;
        }

        var tempTrovadores = $scope.trovadores;
        $scope.trovadores = [];

        angular.forEach(tempTrovadores, function (trovador) {
            if(!trovador.edit)
                $scope.trovadores.push(trovador);
            if(trovador.edit){
                $scope.nuevoTrovador = trovador.name;
            }
        })
    }

}