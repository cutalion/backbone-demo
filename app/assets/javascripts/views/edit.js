App.Views.Edit = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.render();
    },

    render: function() {
      $(this.el).html(JST['templates/movies/movie']( {movie: this.model }));
      $('#app').html(this.el);
    }
});