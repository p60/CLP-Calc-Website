var SliderUI = Backbone.View.extend({
  tagName: "div",
  className: ".slider",
  control: {},
  initialize: function() {
    var self = this;

    //Set Up the JQuery UI Slider
    this.control = this.el.find('div').slider({
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
        self.render(ui.value);
      }
    });

    this.el.find('.value').appendTo(this.el.find('.ui-slider-handle'));

    this.render();
    this.el.show();
  },

  render: function(val) {
    var value = val || this.control.slider('value');
    this.showValueChange(value);
  },

  showValueChange: function(value) {
    var append = this.el.data('slider-append') || '';
    this.el.find('.value span').first().text(value.toNiceString() +  append);
  }
});
