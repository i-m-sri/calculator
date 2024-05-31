// js/display.js
define([], function() {
    return {
      show: function(result) {
        document.getElementById('result').textContent = result;
      }
    };
  });
  