namespace MoviesManyToMany {

    angular.module('MoviesManyToMany', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MoviesManyToMany.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MoviesManyToMany.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('movieActorList', {
                url: '/movieActorList',
                templateUrl: '/ngApp/views/movieActorList.html',
                controller: MoviesManyToMany.Controllers.ListController,
                controllerAs: 'controller'
            })
            .state('addActor', {
                url: '/addActor',
                templateUrl: '/ngApp/views/addActor.html',
                controller: MoviesManyToMany.Controllers.AddActorController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
