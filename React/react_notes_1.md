1. React
  - React is a component-based library.

2. Component
  - A component is a bundle of markup, styles and logic that controls
    everything about a specific part of the UI.

3. Code organization
  - Instead of separating out application into markup (written in HTML),
    styles (written in CSS) and logic (written in JavaScript),
    we organize our application into components.
  - It is a different mental model for code organization.

4. Mechanisms of reuse
  - With HTML, we have partials.
  - With CSS, we have classes.
  - With JavaScript, we have functions.
  - With React, we have components that bundle up all 3.

5. Application Structure
  [ index.js ]
  - It is responsible for rendering our React application, turning the React elements we write into live DOM nodes.
  - It includes setup tasks like import global CSS files, or set up any error-logging services.
  [ app.js ]
  - It manages core layout stuff.
  - It includes routes.

6. Mapping over data
  - You can render an array inside JSX, React will unpack it and render each item.

7. React Keys
  - If I have a list of 4 items, and a re-render is triggered that either produces the same list or adds/deletes items, React, without keys, will delete the old list and create a new one.
  - As we know, interacting with the DOM is one of the slowest things we can do in JavaScript, and so we really want to minimize it to improve performance, which is what React keys help achieve.

  - Keys exist to show React the route. By uniquely identifying each item across all snapshots, React can figure out exactly what to do (React knows which DOM operations to trigger between renders), ensuring the best performance and no UI bugs.
  - React creates an item with a new key.
  - React deletes an item with a deleted key.
  - React checks if there are any changes to perform on the items with the same key or not.

  - How do we set the key?
    -> If each item has a unique id, so set it as a key.
    -> else check if there is a property of item data that can be used as a unique id.
    -> else if the order stays 100% consistent, use the array index as a unique id.
    -> else check if there is a possibility to combine some properties to generate a unique id.
    -> else use `Math.random()`/`crypto.randomUUID()` to dynamically generating unique id.

8. Styling in React
                                                                                      CSS Modules
                                                                                      Styled Components
  - *:Traditional CSS Styling Method  ==>  **:Naming Methodologies like BEM  ==>  ***:Emotion
                                                                                      Vanilla Extracts
                                                                                      Stitches

  *:   Problems: naming, specificity races that produce long and long CSS selectors, etc.
  **:  Solve the problems if it's followed 100%, and this is needed a superhuman discipline, especially
       for larger projects and teams.
  ***: Wet get all the benefits of naming methodologies like BEM, in terms of guaranteed unique selector
       names. They come with AUTOMATIC SCOPING.
       AUTOMATIC SCOPING: generate long, guaranteed-unique CSS selector names and scoped them to the component.
