var SliderUI = Backbone.View.extend({
  tagName: "div",
  className: ".slider",

  initialize: function() {
    var self = this;

    //Set Up the JQuery UI Slider
    this.el.find('div').slider({
      min: this.model.get('min'),
      max: this.model.get('max'),
      value: this.model.get('value'),
      orientation: 'vertical',
      range: 'min',
      step: this.el.data('slider-step') || 1,
      change: function(event, ui) {
        self.model.set({value: ui.value});
        self.render();
      },
      slide: function(event, ui) {
        self.model.set({value: ui.value});
        self.render();
      },
      stop: function(event, ui) {
        self.model.trigger('newValue', ui.value);
      }
    });

    this.render();
  },

  render: function() {
    this.showValueChange();
    this.lineUpValue();
  },

  lineUpValue: function() {
    this.el.find('.value').css({
      bottom: this.model.percentage() + '%'
    });
  },

  showValueChange: function() {
    var append = this.el.data('slider-append') || '';
    this.el.find('.value span').first().text(this.model.get('value') + append);
  }
});
