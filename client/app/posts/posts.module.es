export default ngMod => {
  ngMod.factory('data', ($http) => {
    var data = {};
    data.entries = $http.get('http://jsonplaceholder.typicode.com/posts');
    return data;
  });

  ngMod.controller('PostsCtrl', function ($http, $state, data) {
    data.entries.then(s => { this.data = s.data; });
  });

  ngMod.controller('PostDetailCtrl', function ($state, data) {
    this.currentId = $state.params.id;
    data.entries.then(s => {
      this.currentPost = s.data[ +$state.params.id - 1 ];
    });
  });
};
