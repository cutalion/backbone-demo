var Movie = Backbone.Model.extend({
  url : function() {
    var base = 'movies';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  }
});