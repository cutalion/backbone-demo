var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new App.Routers.Movies();
    Backbone.history.start();
  }
};