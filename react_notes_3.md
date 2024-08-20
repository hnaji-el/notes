# Hooks

## Components

  - React.createClass({ state: {}, render() {}, ... });  
  - class components  
  - function components  

## Tools in the toolbox

  components  |  components + hooks       

## What are the problems if we use only components to solve all problems (UI, business logic)?

  - It has some complexity to integrate a business logic with React using components.  
  - React application get flooded with the components that existed for a purpose other
    than rendering user interface. components that are doing business logic stuff.

## Hooks

  - Hooks is a dedicated way for us to integrate and share business logic across our application
    without having to stack a million components in our app.
  - A hook is a bundle of business logic. (reusable like components)
  - Hooks let us “hook into” the component instance, for things like:
    -> managing side effects
    -> capturing element references
    -> otimizing performance
  - There are many hooks that solve discrete problems

## Examples of business logic

  - Animations
  - Network requests
  - Pulling data from context
  - Lazy loading other components
  - Behaviours like scrolling to the top of the page on mount

# React.useState() Hook
  
  - React.useState() hook lets us “hook into” the component instance, getting and setting state
    from the instance.
  
# React.useId() Hook

  - React.useId() hook lets us “hook into” the component instance, getting the unique id for
    every component instance.

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


















