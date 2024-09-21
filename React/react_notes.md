1. The Browser turns static HTML into DOM.
               Browser
     HTML    ---------->    DOM
  
2. What is DOM?
  - DOM is a live-running environment that displays the website.

3. HTML vs DOM
  - To use an analogy: HTML is the blueprint for a specific car,
    and the DOM is the car itself, zipping around the city.

4. React philosophy
  - React is a platform-agnostic.
  - React has a core React library and different platform-specific renderers.

  -> `react-dom` for the web
  -> `react-native` for mobile (iOS / Android) or desktop (Windows / macOS) applications
  -> `react-three-fiber` for 3D scenes using WebGL and Three.js

5. React element
  React element is a JavaScript object that describes a part of the UI.

6. Build System
  - React is used within a build system.
  - The build system takes the files we write, and it processes them,
    it gets them ready to actually be used.

7. Why do we need a build system?
  - We need it for two reasons: bundling and compiling.
  - JSX: Syntax Extension isn't a valid JavaScript, the Browser doesn't understand it.
    So, JSX needs to be compiled into JS. [compiler]
  - Compile modern JavaScript features into browser-friendly JavaScript. [compiler]
  - React apps often have hunders or even thousands JavaScript files,
    So need to bundled them together for a good performance. [bundler]
  - Support importing non-JS files. [bundler]

8. Virtual DOM
  - Virtual DOM is a programming concept used by React to enhance performance by maintaining
    a lightweight, in-memory representation of the Real DOM.

9. ReactDOM
  - ReactDOM is the implementation of the Virtual DOM.
  - ReactDOM handles the rendering of React elements in the Real DOM.

10. JSX
  - JSX is a syntax extension for JavaScript that allows HTML-like syntax within JavaScript,
    making React elements easier to read and write.

11. JSX Compiler
  - The JSX Compiler compiles JSX into pure JavaScript without touching expression slots;
    it just forwards them a long to pure JavaScript.






The truly magical thing about React is that we don't have to worry about keeping our state (held in JavaScript) and our UI (in the DOM?) in sync.

With React, we're describing what we want the UI to be, based on the current application state. React takes those descriptions and makes it real.
