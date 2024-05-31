// js/calculator.js
define(['math', 'display'], function(math, display) {
    return {
      calculateAndShow: function(expression) {
        var result = math.evaluate(expression);
        display.show(result);
      }
    };
  });
  