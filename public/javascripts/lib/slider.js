var CLPSlider = Backbone.Model.extend({

  initialize: function(){
    var value = this.get('value') || this.get('min');
    this.set({ value: value, });
  },

  percentage: function() {
    return percent = (this.get('value') - this.get('min')) / (this.get('max') - this.get('min')) * 100 - 6;
  }
});
