buster.spec.expose(); // Make some functions global

describe("The Calculator", function () {

  before(function() {
    this.calc = new CLPCalculator({
      responseRate: 50,
      customerBase: 1000,
      frequency: 2
    });
  });

  it("stores the correct inputs", function() {
    expect(this.calc.get('responseRate')).toEqual(50);
    expect(this.calc.get('customerBase')).toEqual(1000);
    expect(this.calc.get('frequency')).toEqual(2);
  });

  it("returns response rate in the decimal form", function() {
    expect(this.calc.responseRate()).toEqual(.5);
  });

  it("calculates the customer base size per quarter", function() {
    expect(this.calc.perQuarterGroupSize()).toEqual(500);
  });

  it("calculates the number of surveys per quarter", function() {
    expect(this.calc.perQuarterSurveySize()).toEqual(250);
  });

  it("calculates the cost per quarter", function () {
      expect(this.calc.perQuarterCost()).toEqual(12500);
  });

});
