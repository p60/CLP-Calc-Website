var PriceView = Backbone.View.extend({
  tagName: "div",
  id: "bottom",

  initialize: function() {
    this.template = Handlebars.compile($('#template').html());
    this.model.bind('showResults', function() {
      this.render()
    }, this);
  },

  render: function() {
    var data = _.extend(this.model.toJSON(), {
      surveys: this.model.perQuarterSurveySize(),
      cost: this.model.perQuarterCost(),
      customers : this.model.perQuarterGroupSize(),
      detailed: this.model.get('frequency') === 2
    });
    this.el.html(this.template(data));
  }
});
