     document.getElementById('button1').addEventListener('click', function() {
    const inputString = document.getElementById('input1').value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('output').textContent = reversedString;
});
     document.getElementById('reverseArrayButton').addEventListener('click', function() {
         const inputStrings = document.getElementById('inputStrings').value.split(',');
         const reversedArray = [];

         inputStrings.forEach(function(string) {
             const reversedString = string.trim().split('').reverse().join('');
             reversedArray.push(reversedString);
         });

         document.getElementById('arr').textContent = reversedArray.join(', ');
     });