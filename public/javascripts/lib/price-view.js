var PriceView = Backbone.View.extend({
  tagName: "div",
  id: "bottom",

  initialize: function() {
    this.template = _.template($('#template').html());
    this.model.bind('showResults', function() {
      this.render()
    }, this);
  },

  render: function() {
    var data = _.extend(this.model.toJSON(), {
      surveys: this.model.perQuarterSurveySize(),
      cost: this.model.perQuarterCost(),
      customers : this.model.perQuarterGroupSize()
    });
    this.el.html(this.template(data));
  }
});
