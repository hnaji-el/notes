# Hooks

## Components

  - React.createClass({ state: {}, render() {}, ... });  
  - class components  
  - function components  

## Tools in the toolbox

  components  |  components + hooks       

## What are the problems if we use only components to solve all problems (UI, business logic)?

  - It has some complexity to integrate a business logic with React using components.  
  - React application get flooded with the components that existed for a purpose other than rendering user interface. components that are doing business logic stuff.

## Hooks

  - Hooks is a dedicated way for us to integrate and share business logic across our application without having to stack a million components in our app.
  - A hook is a bundle of business logic. (reusable like components)
  - Hooks let us “hook into” the component instance, for things like:
    -> managing side effects
    -> capturing element references
    -> otimizing performance
  - There are many hooks that solve discrete problems.

## Examples of business logic

  - Animations
  - Network requests
  - Pulling data from context
  - Lazy loading other components
  - Behaviours like scrolling to the top of the page on mount

# Rules of Hooks

  - There are two "Rules of Hooks":
    -> Hooks must be called within a component or a custom hook.
    -> Hooks must be called at the top level of a component or a custom hook.
      ( we're not allowed to call a hook conditionally)
  - Why?
    -> React hooks are implemented in a way where the order matters.
    -> If we render a component 100 times, it should call the exact same hooks in the exact
       same order. When we render a hook conditionally, we make it possible for the hooks
       to change from one render to another!
  - Why does React rely on the order?
    -> React doesn't take any unique id about hooks. (ex: React.useState({id: 'x', value: 0}))
    -> React has no visibility into the code that we write inside our components.

# React.useState() Hook
  
  - React.useState() hook lets us “hook into” the component instance, getting and setting state
    from the instance.
  
# React.useId() Hook

  - React.useId() hook lets us “hook into” the component instance, getting the unique id for
    every component instance.

# React.useRef() Hook
 
  - It creates a ref object containing a current property. ({ current: undefined })
  - The ref object is like a box, We can store whatever we want in this box: DOM nodes, numbers,
    arrays, objects, functions, etc. But the primary use case for refs is to store DOM nodes.
  - The ref attribute can be either a ref object or a function.
    -> The ref function will be called on every single render.
    -> With the ref object, React sets the ref on the very first render. leading to improved
       performance.
  - This is the conventional way to work with DOM node references in React!.

# Side Effects

## What is an effect? (external system, side effect or effect)

  - Core React Loop is the purview (main job, typical job responsibilities) of React.
  - But every now and then when we are building React applications, we need to do things that fall outside of React's purview (not controlled by React). But still need to be synchronized with the state that we're holding in React. These things are called external systems or side effects (effects).
  - A side effect is a thing that falls outside of React's typical job responsibilities (not controlled by React), but still needs to be synchronized with the state that we're holding in React.

## Examples of the effects

  -> Updating the document's title
  -> Logging to the console
  -> Writing/reading from localStorage
  -> Auto-focusing an input
  -> Listening for global events (window-level events)
  -> Managing timeouts/intervals
  -> Observing intersections
  -> Making network requests

## Why do we need React.useEffect() hook?

  - The render process is for doing the main job and we don't want to be mixing our concerns.
  - We need more control, more flexibility around how that effect is managed.
  - The React.useEffect() hook provides us with these features by allowing us to specify:
    -> effect function
    -> cleanup function
    -> effect dependencies

## How React.useEffect() hook works?

  - If dependency array isn't provided:
    -> Effect runs after every single render.
  - If dependency array is provided:
    -> Effect runs after the very first render, and then again whenever the dependencies change.

  - The cleanup function (if provided) runs before the effect re-runs or before the component unmounts.

## Cleanup

  - The cleanup function is used to remove the long-running processes / subscriptions like:
    -> Event listeners
    -> Intersection observers
    -> Intervals and Timeouts

  - Example with the event listeners
    -> Every time this component is mounted, we add another event listener, stacking them up like hotcakes.
    -> Because we're referencing a part of the component instance (by calling setMousePosition), the JavaScript garbage collector isn't able to clean up this instance! That means that every time we mount this component, we create an instance that will never be erased.
  - This is known as a memory leak. The longer the person spends using our application, the more memory it will consume. 

## Stale Values

  - The state variable inside the effect will grow stale.
  - The effect has gotten out-of-sync with the rest of the code, and it means that we're seeing multiple versions of the state at the same time.
  Fix it::
  - To fix it, we can add the state variable to the dependency array. This means that the effect will re-run whenever we call state-setter function, keeping it in sync as the state changes.
  - We can alse use state-setter callback. 

# Strict Mode

  - In React, there are lots of things that can cause significant problems for our users, but that aren't necessarily obvious to us as developers. (subtle issues)
  - To help us find and fix these issues in development, the React team has introduced a new “Strict Mode”.
  - Strict Mode surfaces these subtle issues, And so, It improves the robustness of our application.
  - Strict Mode does a lot of things:
    -> Re-runs all effects.
    -> Re-runs each render.
    -> ...
  - Strict Mode produces 2 categories of results:
    -> Safeguards designed to amplify potential issues.
    -> Warnings about deprecated APIs.

# Development Environment Vs. Production Environment

  - Development Environment
     -> Lint warnings (ESLint warnings).
     -> More detailed error messages.
     -> Strict Mode.
  - Production Environment (no one of the previous list has a meaning in production)
    






In order to truly become comfortable with React, we need to build an intuition for how effects and renders are connected




































