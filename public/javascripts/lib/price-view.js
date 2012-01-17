var PriceView = Backbone.View.extend({
  tagName: "div",
  id: "bottom",

  initialize: function() {
    this.template = Handlebars.compile($('#template').html());
    this.model.bind('change', function() {
      this.render()
    }, this);
  },

  render: function() {
    var data = _.extend(this.model.toJSON(), {
      surveys: this.model.perQuarterSurveySize().toNiceString(),
      cost: this.model.perQuarterCost().toNiceString(),
      customers : this.model.perQuarterGroupSize().toNiceString(),
      detailed: this.model.get('frequency') === 2
    });
    data.customerBase = data.customerBase.toNiceString();
    this.el.html(this.template(data));
  }
});
