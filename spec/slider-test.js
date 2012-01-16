buster.spec.expose();

describe("The Slider", function() {

  before(function() {
    $('body').append('<div class="slider"><span class="min">25</span><span class="max">1000</span><span style="display: block; padding: 0; margin: 0;" class="value"><span>0</span><span></span></span><div></div></div>');
    this.slider = new CLPSlider({
      element: $('.slider')
    });
  });

  after(function() {
    $('.slider').remove();
  });

  it("should create a slider", function() {
    expect(this.slider.control.slider('value')).toEqual(25);
  });

  it("should set the max and min of the slider based on the html", function() {
    min = parseInt($('.min').text());
    max = parseInt($('.max').text());
    expect(this.slider.control.slider('option', 'min')).toEqual(min);
    expect(this.slider.control.slider('option', 'max')).toEqual(max);
  });

  it("should set the value of the value span to the value of the slider when it is changed", function() {
    this.slider.control.slider('value', 50);
    expect($('.value span').first().text()).toEqual('50');
    expect(this.slider.get('value')).toEqual(50);
  });
});
