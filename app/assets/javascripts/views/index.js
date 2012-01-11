App.Views.Index = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'render');
      this.collection.bind('change', this.render);
      this.render();
    },

    render: function() {
      $(this.el).html(JST['templates/movies/index']( {collection: this.collection }));
      $('#app').html(this.el);
    }
});