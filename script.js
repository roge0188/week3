console.log("") document.title // document title
// Step 4: Select Elements Using the DOM Methods
// getElementById
const colorButton = document.getElementById('color-button')
console.log(colorButton)

const colorfulText = document.getElementById('colorful-text')
// querySelector
const resetButton = document.querySelector('#reset-button')

// querySelectorAll
const boxes = document.querySelectorAll('.box')
console.log( boxes{1} )

// 5.1 Change Text Content and Style
// Event listener for colorButton
colorButton.addEventListener('click', () => {
    // textContent
    colorfulText.textContent = 'You changed my color!'

    // Style
    colorfulText.style = 'color: #ff0000;'

});


// 5.2 Toggle Highlight and Update the state of the button
// classList
boxes[1].classList.toggle('highlight')

// Manipulate custom attribute
boxes[0].getAttribute('data-state')
const currentState = boxes[0].getAttribute('data-state') > 0
boxes[0].setAttribute('data-state', currentState)
// Update innerHTML to show state
boxes[0].innerHTML = '<p>State ' + currentState + '</p>'


// Event listener for box
resetButton.addEventListener('click', () => {
// Remove highlight class
boxes[2].classList.remove('highlight')

// Reset data-satate attribute
boxes[0].setAttribute('data-state', '0')

// Clear innerHTML
boxes[0].innerHTML = ''
// Reset colorfulText
colorfulText.style = 'color: '

// Reset color

});
