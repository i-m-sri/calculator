// js/math.js
define([], function() {
    return {
      evaluate: function(expression) {
        try {
          // Evaluate the expression using JavaScript's eval (note: eval should be used with caution)
          let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
          return eval(sanitizedExpression);
        } catch (e) {
          return 'Error in expression';
        }
      }
    };
  });
  