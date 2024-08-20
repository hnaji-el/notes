1. Component Structures
App
|—— Header
|—— Game
    |—— GuessInput

2. File/Folder Structure
  IDEA::
    - Each component has its own folder.
  BENIFIT::
    - It solves a number of small-but-annoying problems.
  PROBLEM::
    - There is a lot of boilerplate.
  SOLUTION::
    - new-component package to generate a new component.

src/
|—— component/
    |—— App/
    |   |—— App.js
    |   |—— index.js
    |—— Header
    |   |—— Header.js
    |   |—— index.js
    |—— Game
    |   |—— Game.js
    |   |—— index.js


click
  - When a user clicks/taps on a button or presses 'Enter' key whenever the input or button
    is focused.

change
  - When a DOM Node is changed.

keyDown (key, keyCode)
  - When the user presses a key.








