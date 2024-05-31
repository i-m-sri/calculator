// js/main-config.js
require.config({
    baseUrl: 'js', // Base URL for scripts
    paths: {
      math: 'math',
      display: 'display',
      calculator: 'calculator'
    }
  });
  
  require(['calculator'], function(calculator) {
    document.getElementById('calculateButton').addEventListener('click', function() {
      var expression = document.getElementById('expression').value;
      calculator.calculateAndShow(expression);
    });
  });
  