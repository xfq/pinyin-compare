"use strict";

function sort() {
  let textareaValue = document.querySelector("#text").value;

  let linesArray = textareaValue.split("\n");

  let resultArray = linesArray.sort(function compareFunction(param1, param2) {
    return param1.localeCompare(param2, "zh");
  });

  let resultString = resultArray.join('<br>');

  document.querySelector("#show").innerHTML = resultString;
}
