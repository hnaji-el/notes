1. Events
  - Events allow web applications to be dynamic.
  - We are listening for an event, and an event handler is called when the event is fired.
  -? As the user interacts with the page, hundreds of events are fired off in response.
  - Event listener is a long-running process that will call the event handler whenever the
    event triggered.
  - Event listener takes a place in memory, so we need to pay attention for memory leak.
  - React has a built-in event delegation system that implements a bunch of optimizations
    for us. like batching multiple event listeners together to reduce memory consumption.

2. React abstraction.
  React likes for us to stay within its abstraction
  - One of the core ideas behind React is that it does the DOM manipulation for us.
    -> We shouldn't really interacting with the DOM directly at all.
  - React has a built-in event delegation system.
    -> The recommended way to handle events in React is to use event handler attributes.
       -> Automatic cleanup
       -> Improved performance
       -> No DOM interaction
    -> While we do sometimes have to use `addEventListener` for window-level events
       (global events).

3. React state
  - State is used for values that change over time.

4. React hook
  - A hook is a special type of function that allows us to "hook into" React internals.

5. Core React Loop (Fundamental flow of React)
  Mount::
  - When we render the component for the first time, there is no previous snapshot
    to compare to, so React will take the React elements (the description),
    turn them into DOM nodes, and inject them into the DOM.
    Additionally, React will create a component instance.
  
  Trigger::
  - When something happens that calls the state-setter function, the state variable
    gets updated. And Whenever a state variable is updated, it triggers a re-render.
  
  Render::
  - Because the state changed, we need to generate a new description of the UI!.
    React will invoke our component function again, producing a new set of React elements.
    With this new snapshot in hand, React will compare it to the previous snapshot
    and figure out what needs to happen for the DOM to match this latest snapshot.
    This process is known as reconciliation.
    Reconciliation is the process of hunting for changes between the two snapshots.
  
  Commit::
  - If any DOM updates are required, React will perform those changes
    (eg. changing the text content of a DOM node, creating new nodes, deleting removed nodes, etc).
    Once the changes have been committed, React goes idle, and waits for the next trigger,
    the next state change.

6. Rendering Vs Painting
  - the term "render" means we are taking some sort of unprocessed raw input, and generating
    the final ready-to-use output.

6. Asynchronous Updates
  - Updating a state variable is asynchronous (state updates are asynchronous).
  - Because state updates are asynchronous, So they can be batched.

7. React state Vs Svelte variable
  FACTS::
  - React exists within the context of JavaScript rules.
  - With React, you are writing JavaScript.
  - With Svelte, you are not writing JavaScript, you are writing a custom language called Svelte
    and it compiles into JavaScript.

  - JavaScript doesn't give a way to observe variables
  - JavaScript doesn't give a way to thread a value through function calls.

  WHAT DO WE NEED?::
  - We need to create a variable that lives outside of the component.
  - We need to scoped this variable to component instance, So, I can create multiple component instances.

  SOLUTION::
  - React state solution is actually a really elegant way to solve the problem.

8. Built-in HTML Forms
  - Forms have a default submission behaviour, that they will make a network request when I submit them,
    executing a full page reload. unless I explicitly prevent that with `event.preventDefault()`.

  - Form controls that trigger the form submit event are:
    -> Click/Tap the submit button.
       - Click using `pointing devices` like: Mouse, Touchpad, etc.
       - Tap using `touch-sensitive screens` like: smartphones, tablets, etc.
    -> Press the 'Enter' key whenever the input or submit button is focused. 
       Press the 'Spacebar' key when the submit button is focused.
       - Press using the keyboard (input device).

  - The built-in HTML form inputs are classified into two main classes:
    -> The first one defines current value as DOM node's value property.
       - Most form inputs except checkboxes and radio buttons.
       - The value HTML attribute plays the role of default value.
    -> The second one defines current value as DOM node's checked property. And they have "on" value.
       - Checkboxes, radio buttons.
       - The checked HTML attribute plays the role of default value.

  - There are two kinds of inputs:
    -> Controlled inputs
    -> Uncontrolled inputs

  - There are two approaches for data submission:
    -> Controlled Approach or Data Binding Approach
    -> Uncontrolled Approach or FormData Approach
       - discrete request
       - multipart (multipart/form-data) request

8.1. React Forms
  - React make changes just on controlled approach (data binding approach).
  - React has tweaked the form controls so that they all follow the same pattern.

  - What React do is making the value HTML attribute (for most inputs) and checked HTML attribute
    (for checkboxes and radio buttons) locks (controls) the form input, So that React will ensure
    that the DOM node's value is exactly the value HTML attribute (same for checked).
  - How does React do that?.
  - When the user type a character, the browser re-paint the character to display it.
    at the same time React undo this change, so the browser re-paint again to hide this character.
    So React with that will make sure that the form input value is controlled by the value HTML attribute
    (same for checked).
  - How can we make changes?
  - For that we need to use a React state as a value of the value HTML attribute, So that we lock the
    the form input value to the React state. and we respond to user's changes with `onChange`
    event handler by updating the state variable with the new value.
  - As a summary, the pattern is:
    -> The current value is locked using either value (for most inputs)
       or checked (for checkboxes and radio buttons).
    -> We respond to changes with the onChange event listener.

  - Data Binding required two attributes value/checked and onChange.
  - In Data Binding, the state can update the input, and the input can update the state.

  RULES::
  - Follow the HTML standards (eg. radio buttons should be grouped using the “name” attribute).

8.2. Client-side Validation
  - There are two ways:
    -> JavaScript way: generally add a validation logic in `submit` event handler function.
       SNIPPET CODE::
       function handleSubmit(event) {
         if (validation fails) {
           return;
         }
         // ... some code in case validation not fail
       }
    -> Built-in HTML validation attributes: (recommanded approach).
       - We add constraints using [ required, min, max, minlength, maxlength, pattern, etc ]
       - Form input has a `validity` DOM node's property that implements `ValidityState` interface.
         This property has validity states of form input.
       - Form input matches `:invalid` or `:valid` CSS pseudo-classes based on the value of `validity.valid`
       - We can use JavaScript to access `validity` and check for validation.
       - Form submission.
       - Tooltip (pattern with title to add a description of what the pattern do).

8.3. HTML validation attributes
  - minlength & maxlength: doesn't work properly when the input's value is changed (ex: use .toUpperCase())
  - maxlength: I'm using it to stop the user at the `maxlength` (it seems working properly in all cases).
  - I use `pattern` with `maxlength`.

8.4. Best User Experience with Forms
  - Provide instructions to help users understand how to complete the form and use individual form controls.
    -> Providing instructions within the <label> may be sufficient.
    -> If providing instructions outside of labels, which allows more flexible positioning and design,
       consider using aria-labelledby or aria-describedby.
  - Provide fast feedback as possible.

9. Props Vs. State
  - Props allow to customize the behaviour of a given component.
  - State is used for values that change over time.

10. Complex state (mutation bug).
  - Never mutate React state.

11. Front-end Performance
  - We generally don't work with enormous data sets on the front-end. It would take too long to transfer
    that much data over the network, and low-end devices wouldn't have the memory to hold it all.
  - Iteration speed is rarely the limiting factor on the front-end.
  - When it comes to front-end performance, we have bigger things to worry about than this stuff.
  
12. Lifting State Up
  - Lifting state up is an incredibly important idea/concept.
  - We should lift the state to the lowest/closest ancestor component.
  - Why not lift all state to the very top of the application?
    -> unless your app is very tiny, it isn't practical, it would lead to problems in terms of performance
       and code organization.
  - Notes:
    -> In React the data can only pass through components via props, or via context.

13. Component Instances
  - Whenever we render a component, we “mount” the component. Mounting a component involves two steps:
    -> Creating a component instance, an object that holds all the contextual information about this
       particular instance of the component.
    -> Converting React elements into DOM nodes.
  - When we “unmount” the component, the opposite of all that happens:
    -> Destroying the component instance.
    -> Cleaning up any DOM nodes associated with that instance.

14. Snapshots
  - A snapshot is a more abstract/metaphorical concept. It refers to the data available at a moment
    in time as a result of performing a render. It's a combination of two things:
    -> The specific values of any props/state.
    -> The React elements returned from the component function.

How React reacts to the things that change in our application.
The library, after all, is literally named for how it reacts to state changes!
