//
//  posts Component
//

export default ngMod => {
  require('./posts.module.es')(ngMod);

  // dependnet css
  require('./posts.css');

  // components definition.
  ngMod.directive('posts', () => {
    return {
      restrict: 'E',
      bindToController: true,
      transclude: true,
      template: require('./posts.tpl.html'),
      controller: 'PostsCtrl', controllerAs: 'posts'
    };
  });

  ngMod.directive('post', () => {
    return {
      restrict: 'E',
      scope: { id: '=', item: '=' },
      bindToController: true,
      controllerAs: 'post',
      template: '<p> <a ui-sref="details({id: post.id})">{{post.item.id}}, {{post.item.title}}</a> </p>',
      controller: () => {},
    };
  });
};
