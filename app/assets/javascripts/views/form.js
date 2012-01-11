App.Views.Form = Backbone.View.extend({
    initialize: function() {
//      _.bindAll(this, 'render');
//      this.model.bind('change', this.render);
      this.render();
    },

    events: {
      "submit form": "save"
    },

    render: function() {
      $(this.el).html(JST['templates/movies/form']());
      $('#app').html(this.el);
    },

    save: function() {
      console.log('save', this.model);
      var title = this.$("[name='title']").val();
      var description = this.$("[name='description']").val();

      this.model.save(
        {
          title: title,
          description: description
        },

        {
          success: function() {
            console.log('saved');
            Backbone.history.navigate('#', true);
          },
          error: function() {
            console.log('save error');
          }
        }
      );

      return false;
    }
});