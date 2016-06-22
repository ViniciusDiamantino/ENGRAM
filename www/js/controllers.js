angular.module('app.controllers', [])

.controller('inCioCtrl', function ($scope) {
    $scope.mostra = function () {
        $scope.resultado = true;
    }
})

.controller('mensagensCtrl', function ($scope) {

})

.controller('aulasCtrl', function ($scope) {

})

.controller('histRicoCtrl', function ($scope) {

})

.controller('informaEsDaAulaCtrl', function ($scope, $ionicModal, $ionicPopup) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.presenca = function () {
        $ionicPopup.confirm({
            title: 'Presença à aula',
            template: 'Deseja confirmar presença no local indicado?',
            buttons: [
            { text: 'Sim', type: 'button-balanced'},
            {text: 'Cancelar'}
            ]
        });
    };

    $scope.cancelar = function () {
        $ionicPopup.confirm({
            title: 'Cancelamento de aula',
            template: 'Você pretende cancelar uma aula. Você quer remarcar a aula ou cancelar a aula sem remarcar?',
            buttons: [
            { text: 'Sim', type: 'button-balanced'},
            {text: 'Não', type: 'button-assertive'},
            {text: 'Cancelar'}
            ]
     });
    };

    $scope.atraso = function () {
        var alertPopup = $ionicPopup.show({
            title: 'Atraso à aula',
            template: 'Quantos minutos você pretende demorar?<br><input type=' + 'text' + '>',
            buttons: [
        { text: 'Ok', type: 'button-balanced'},
            {text: 'Cancelar'}
]
        });
    };

    
})

.controller('AulaAgendadaCtrl', function ($scope, $ionicPopup) {

    $scope.confirmacao = function () {
        $ionicPopup.confirm({
            title: 'Confirmar agendamento',
            template: 'Deseja confirmar o agendamento da aula?',
            buttons: [
            { text: 'Sim', type: 'button-balanced' },
            {text: 'Cancelar'}
            ]
         
        });

    };

})

.controller('infoInstrutoresCtrl', function ($scope, $ionicPopup, $state) {
    $scope.nova = function () {
        var alertPopup = $ionicPopup.show({
            title: 'Nova Mensagem',
            template: 'Digite a mensagem aqui<br><input type=' + 'text' + '>',
            buttons: [
        { text: 'Enviar', type: 'button-balanced', onTap: function () { $state.go('aluno.mensagens') } },
            { text: 'Cancelar' }
            ]
        });
    };
})

.controller('AulaFinalizadaCtrl', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/avaliacao.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });
})

.controller('inCioInstrutorCtrl', function ($scope) {

})

.controller('mensagensInstrutorCtrl', function ($scope) {

})

.controller('aulasInstrutorCtrl', function ($scope) {

})

.controller('histRicoInstrutorCtrl', function ($scope) {

})

.controller('informaEsDaAulaInstrutorCtrl', function ($scope, $ionicModal, $ionicPopup) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.presenca = function () {
        $ionicPopup.confirm({
            title: 'Presença à aula',
            template: 'Deseja confirmar presença no local indicado?',
            buttons: [
            { text: 'Sim', type: 'button-balanced' },
            { text: 'Cancelar' }
            ]
        });
    };

    $scope.cancelar = function () {
        $ionicPopup.confirm({
            title: 'Cancelamento de aula',
            template: 'Você pretende cancelar uma aula. Você quer remarcar a aula ou cancelar a aula sem remarcar?',
            buttons: [
            { text: 'Sim', type: 'button-balanced' },
            { text: 'Não', type: 'button-assertive' },
            { text: 'Cancelar' }
            ]
        });
    };

    $scope.atraso = function () {
        var alertPopup = $ionicPopup.show({
            title: 'Atraso à aula',
            template: 'Quantos minutos você pretende demorar?<br><input type=' + 'text' + '>',
            buttons: [
        { text: 'Ok', type: 'button-balanced' },
            { text: 'Cancelar' }
            ]
        });
    };

    $scope.finalizar = function () {
        $ionicPopup.confirm({
            title: 'Finalizar aula',
            template: 'Deseja finalizar esta aula?',
            buttons: [
            { text: 'Sim', type: 'button-balanced' },
            { text: 'Cancelar' }
            ]
        });
    };

})

.controller('agendaInstrutorCtrl', function ($scope) {

})

.controller('avaliacoesInstrutorCtrl', function ($scope) {

})

.controller('otimoCtrl', function ($scope, $ionicModal) {

        $ionicModal.fromTemplateUrl('avaliacoes/otimo.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
  
})

.controller('bomCtrl', function ($scope, $ionicModal) {
  
        $ionicModal.fromTemplateUrl('avaliacoes/bom.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
   
})

.controller('regularCtrl', function ($scope, $ionicModal) {
   
        $ionicModal.fromTemplateUrl('avaliacoes/regular.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
   
})

.controller('ruimCtrl', function ($scope, $ionicModal) {
        
        $ionicModal.fromTemplateUrl('avaliacoes/ruim.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
   
})

.controller('cadastroCtrl', function ($scope) {

})

.controller('loginCtrl', function ($scope) {

    $scope.mostraBotao = function (item) {
        if (item == 1) {
            $scope.mostraAluno = true;
            $scope.mostraInstrutor = false;
        } else {
            $scope.mostraInstrutor = true;
            $scope.mostraAluno = false;
        }

    }

})

