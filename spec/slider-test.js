buster.spec.expose();

describe("The Slider", function() {

  before(function() {
    $('body').append('<div class="slider"><span class="min">25</span><span class="max">1000</span><span style="display: block; padding: 0; margin: 0;" class="value"><span>0</span><span></span></span><div></div></div>');
    this.slider = new CLPSlider({
      min: 25,
      max: 75
    });
    this.sliderView = new SliderUI({
      el: $('.slider'),
      model: this.slider
    });
  });

  after(function() {
    $('.slider').remove();
  });

  it("should create a slider", function() {
    expect(this.slider.get('value')).toEqual(25);
    expect(this.sliderView.control.slider('value')).toEqual(25);
  });

  it("should set the max and min of the slider based on the options", function() {
    expect(this.sliderView.control.slider('option', 'min')).toEqual(25);
    expect(this.sliderView.control.slider('option', 'max')).toEqual(75);
    expect(this.slider.get('min')).toEqual(25);
    expect(this.slider.get('max')).toEqual(75);
  });

  it("should set the value of the model when the view is changed", function() {
    this.sliderView.control.slider('value', 50);
    expect(this.slider.get('value')).toEqual(50);
  });

  it("should return the correct percentage for values", function() {
    expect(this.slider.percentage()).toEqual(-6);
    this.sliderView.control.slider('value', 50);
    expect(this.slider.percentage()).toEqual(44);
  });
});
