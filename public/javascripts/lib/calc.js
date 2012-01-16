var CLPCalculator = Backbone.Model.extend({
  defaults: {
    responseRate: 25,
    customerBase: 0,
    frequency: 2,
    cost: 50
  },

  initialize: function() {
    this.bind('change:responseRate', function() {
      this.calculate()
    });

    this.bind('change:customerBase', function() {
      this.calculate()
    });

    this.bind('change:frequency', function() {
      this.calculate()
    });
  },
  responseRate: function() {
    return this.get('responseRate') / 100;
  },

  perQuarterGroupSize: function() {
    var factor = 1;
    if(this.get('frequency') === 2) {
      factor = 2;
    }
    return this.get('customerBase') / factor;
  },

  perQuarterSurveySize: function() {
    return Math.round(this.perQuarterGroupSize() * this.responseRate());
  },

  perQuarterCost: function() {
    return this.perQuarterSurveySize() * this.get('cost');
  },

  calculate: function() {
    var r = this.get('responseRate'),
        c = this.get('customerBase'),
        f = this.get('frequency');
    if(r & c) {
      this.trigger('showResults');
    }
  }
});
