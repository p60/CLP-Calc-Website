var calculatorApp = {},
    pi = {};

(function($, undefined) {
  var calc;

  calculatorApp = {

    start: function() {

      var template = _.template($('#template').html()),
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

      this.createToggle();
    },

    createSlider: function(index, ele) {
      var sliderEle = $(ele),
          values = window.location.hash.split('|'),
          sliderOptions = {
            element: sliderEle,
            min: parseInt(sliderEle.find('.min').text()),
            max: parseInt(sliderEle.find('.max').text())
          },
          slider,
          sliderView;

      if(window.location.hash) {
        _.extend(sliderOptions, { value: parseInt(values[index].replace(/#/, '')) });
      }

      slider = new CLPSlider(sliderOptions);
      sliderView = new SliderUI({ model: slider, el: sliderEle });

      slider.bind('newValue', function(value) {
        //Set the value from the slider on to the calculator
        var obj = {},
            att = sliderOptions['element'].data('slider-name');
        obj[att] = value;
        calc.set(obj);
      });

      if(window.location.hash) {
        slider.trigger('newValue', sliderView.control.slider('value'));
      }
    },

    createToggle: function() {
      $('.switch li').click(function() {
        var el = $(this);
        if(!el.hasClass('selected')) {
          el.siblings().removeClass('selected');
          el.addClass('selected');
          calc.set({ frequency: parseInt(el.text()) });
        }
      });
    }
  };

  _.extend(pi, {
    niceNumber: function(num) {
      var numString = num.toString(),
          parts = [],
          i, start, end;

      for(i = numString.length; i > 0; i = i - 3) {
        start = (i-3 > 0) ? i-3 : 0;
        end = i;
        parts.push(numString.slice(start, end));
      }
      return parts.reverse().join(',');
    }
  });

  Number.prototype.toNiceString = function() {
    var numString = this.toString(),
        parts = [],
        i, start, end;

    for(i = numString.length; i > 0; i = i - 3) {
      start = (i-3 > 0) ? i-3 : 0;
      end = i;
      parts.push(numString.slice(start, end));
    }
    return parts.reverse().join(',');
  };
})(jQuery);
