angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

.state('aluno.inCio', {
    url: '/page1',
    views: {
        'side-menu21': {
            templateUrl: 'templates/aluno/inCio.html',
            controller: 'inCioCtrl'
        }
    }
})

  .state('aluno.mensagens', {
      url: '/page2',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/mensagens.html',
              controller: 'mensagensCtrl'
          }
      }
  })

  .state('aluno.aulas', {
      url: '/page3',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/aulas.html',
              controller: 'aulasCtrl'
          }
      }
  })

  .state('aluno', {
      url: '/side-menu21',
      templateUrl: 'templates/aluno/aluno.html',
      abstract: true
  })

  .state('aluno.histRico', {
      url: '/page4',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/histRico.html',
              controller: 'histRicoCtrl'
          }
      }
  })

  .state('aluno.informaEsDaAula', {
      url: '/page5',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/informaEsDaAula.html',
              controller: 'informaEsDaAulaCtrl'
          }
      }
  })

  .state('aluno.informacoesInstrutores', {
      url: '/page6',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/informacoesInstrutores.html',
              controller: 'infoInstrutoresCtrl'
          }
      }
  })

  .state('aluno.aulaAgendada', {
      url: '/page7',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/infoAulaAgendada.html',
              controller: 'AulaAgendadaCtrl'
          }
      }
  })

  .state('aluno.aulaReagendada', {
      url: '/page8',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/infoAulaReagendamento.html',
              controller: 'informaEsDaAulaCtrl'
          }
      }
  })

  .state('aluno.historicoAulas', {
      url: '/page9',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/historicoAulas.html',
              controller: 'histRicoCtrl'
          }
      }
  })

  .state('aluno.aulaFinalizada', {
      url: '/page10',
      views: {
          'side-menu21': {
              templateUrl: 'templates/aluno/infoAulaFinalizada.html',
              controller: 'AulaFinalizadaCtrl'
          }
      }
  })

.state('instrutor.inCio', {
    url: '/page1',
    views: {
        'side-menu22': {
            templateUrl: 'templates/instrutor/inCioInstrutor.html',
            controller: 'inCioInstrutorCtrl'
        }
    }
})

  .state('instrutor.mensagens', {
      url: '/page2',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/mensagensInstrutor.html',
              controller: 'mensagensInstrutorCtrl'
          }
      }
  })

  .state('instrutor.aulas', {
      url: '/page3',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/aulasInstrutor.html',
              controller: 'aulasInstrutorCtrl'
          }
      }
  })

  .state('instrutor', {
      url: '/side-menu22',
      templateUrl: 'templates/instrutor/instrutor.html',
      abstract: true
  })

  .state('instrutor.histRico', {
      url: '/page4',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/histRicoInstrutor.html',
              controller: 'histRicoInstrutorCtrl'
          }
      }
  })

  .state('instrutor.informaEsDaAula', {
      url: '/page5',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/informaEsDaAulaInstrutor.html',
              controller: 'informaEsDaAulaInstrutorCtrl'
          }
      }
  })

  .state('instrutor.aulaAgendada', {
      url: '/page7',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/infoAulaAgendada.html',
              controller: 'informaEsDaAulaInstrutorCtrl'
          }
      }
  })

  .state('instrutor.aulaReagendada', {
      url: '/page6',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/infoAulaReagendamento.html',
              controller: 'informaEsDaAulaInstrutorCtrl'
          }
      }
  })

  .state('instrutor.historicoAulas', {
      url: '/page9',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/historicoAulas.html',
              controller: 'informaEsDaAulaInstrutorCtrl'
          }
      }
  })

  .state('instrutor.aulaFinalizada', {
      url: '/page8',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/infoAulaFinalizada.html',
              controller: 'informaEsDaAulaInstrutorCtrl'
          }
      }
  })


  .state('instrutor.agenda', {
      url: '/page10',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/agendaInstrutor.html',
              controller: 'agendaInstrutorCtrl'
          }
      }
  })

  .state('instrutor.avaliacoes', {
      url: '/page11',
      views: {
          'side-menu22': {
              templateUrl: 'templates/instrutor/avaliacoesInstrutor.html',
              controller: 'avaliacoesInstrutorCtrl'
          }
      }
  })

 .state('instrutor.novaAula', {
            url: '/page12',
            views: {
                'side-menu22': {
                    templateUrl: 'templates/instrutor/novaAula.html',
                    controller: 'mensagensInstrutorCtrl'
                }
            }
        })



  .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
  })

    $urlRouterProvider.otherwise('/page6')



});