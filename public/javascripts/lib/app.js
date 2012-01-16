_.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
};

var calculatorApp = {};

(function($, undefined) {
  var calc;

  calculatorApp = {

    start: function() {

      var values = window.location.hash.split('|'),
          template = _.template($('#template').html()),
          self = this,
          sliderOptions,
          sliderEle;

      // Set up a Calculator
      calc = new CLPCalculator();
      new PriceView({ el: $('#bottom'), model: calc });

      // Set up the sliders
      $('.slider').each(function(index, ele) {
        self.createSlider(index, ele);
      });

      calc.calculate();
    },

    createSlider: function(index, ele) {
      var sliderEle = $(ele),
          sliderOptions = {
            element: sliderEle,
            min: parseInt(sliderEle.find('.min').text()),
            max: parseInt(sliderEle.find('.max').text())
          },
          slider;

      if(window.location.hash) {
        _.extend(sliderOptions, { value: parseInt(values[index]) });
      }

      slider = new CLPSlider(sliderOptions);
      new SliderUI({ model: slider, el: sliderEle });

      slider.bind('newValue', function(value) {
        //Set the value from the slider on to the calculator
        var obj = {},
            att = sliderOptions['element'].data('slider-name');
        obj[att] = value;
        calc.set(obj);
      });

      if(window.location.hash) {
        slider.trigger('newValue', slider.control.slider('value'));
      }
    }
  };
})(jQuery);
