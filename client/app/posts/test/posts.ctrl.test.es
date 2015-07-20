//
//  Posts Controller

export default ngMod => {
  describe('Posts Controller Tests:', () => {
    var rootScope; var scope; var posts; var data;

    beforeEach(() => {

      var mockDataService = {};
      window.module(ngMod.name, ($provide) => {
        $provide.value('data', mockDataService);
      });

      inject($q => {
        var dummyResponse = ['dummy', 'data'];
        var defer = $q.defer();
        defer.resolve(dummyResponse);
        mockDataService.entries = defer.promise;
      });
    });

    beforeEach(inject(($controller, $rootScope, data) => {
      scope = $rootScope.$new();
      posts = $controller('PostsCtrl', { $scope: scope, mockDataService: data });
    }));

    it('posts controller should resolve data from the api', () => {
      expect(posts.entries.$$state.value).toEqual(['dummy', 'data']);
    });
  });
};
