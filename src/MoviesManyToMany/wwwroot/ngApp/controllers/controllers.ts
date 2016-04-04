namespace MoviesManyToMany.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class ListController {
        public movies;

        constructor(private $http: ng.IHttpService) {
            $http.get('/api/Movies')
                .then((response) => {
                    this.movies = response.data;
                })
                .catch((response) => {
                    console.log(response);
                });
        }
    }

    export class AddActorController {
        public movies;
        public firstName;
        public lastName;
        public selectedMovie;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
            $http.get('/api/Movies')
                .then((response) => {
                    this.movies = response.data;
                })
                .catch((response) => {
                    console.log(response);
                });
        }

        addActor() {
            this.$http.post(`/api/Movies/${this.selectedMovie.movieId}`, {
                firstName: this.firstName,
                lastName: this.lastName
            })
                .then((response) => {
                    this.$state.go('movieActorList');
                });
        }
    }

}
