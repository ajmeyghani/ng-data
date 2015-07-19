//
//   Manage the state of the posts.
//
export default ngMod => {
  ngMod.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    $urlRouterProvider.otherwise("/404");
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('404', {
      url: "/404",
      template: require('./404.html'),
    })
    .state('index', {
      abstract: true,
        views: {
          '@': {
            template: require('./posts.layout.tpl.html'),
          }
        },
      })
    .state('list', {
      parent: 'index',
      url: '/list',
      views: {
        'list@index': {
          template: require('./posts.list.tpl.html')
        }
      }
    })
    .state('details', {
      parent: 'index',
      url: '/list/:id',
      views: {
        'details@index': {
          template: require('./posts.details.tpl.html'),
          controller: 'PostDetailCtrl',
          controllerAs: 'postDetail'
        }
      }
    })
  });
};
