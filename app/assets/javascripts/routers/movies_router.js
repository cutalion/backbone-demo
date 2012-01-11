App.Routers.Movies = Backbone.Router.extend({
  routes: {
    "": "index",
    "movie/:id": "show",
    "new": "form"
  },

  index: function() {
    var movies = new Movies;
    movies.fetch({
      success: function() {
        new App.Views.Index( {collection: movies} )
      }
    })
  },

  show: function(id) {
    var movie = new Movie({ id: id });
    movie.fetch({
        success: function(model, resp) {
            new App.Views.Edit({ model: movie });
        },
        error: function() {
            new Error({ message: 'Could not find that document.' });
            window.location.hash = '#';
        }
    });
  },

  form: function() {
    var movie = new Movie;
    new App.Views.Form({ model: movie });
  }
});