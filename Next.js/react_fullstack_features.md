## Server-Side Rendering 

### Why?

* With client-side rendering (CSR), we have:
  * Long load time
  * A poor initial user experience
  * SEO issues

### How does server-side rendering (SSR) solve these problems?

* The big idea with the SSR technique is that we perform the **first React render** on the server, so that the user receives a fully-formed HTML file.

* CSR flow
  * First, the server sending an empty HTML file. Once that file has been received by the client, it can start loading the JS bundle. Once the JS bundle is ready, the React application can finally be rendered.

* SSR flow
  * First, when a user visits a website, the server receives the request, and does the first React render, generating a fully-formed HTML. Then, the HTML file is sent to the client, and the painting starts, allowing the user to see the content even while the JavaScript bundle is still loading. Finally, the JavaScript bundle is loaded and executed, at that time React performs hydration, enabling interactivity in our application.

### Server-Side Rendering Strategies

* The term “Server Side Rendering” refers very specifically to one thing: Using the `react-dom/server` APIs to generate the HTML in Node.js.
* There are different implementations/strategies of SSR:
  * On-demand Server Side Rendering (SSR)
    * The HTML is generated “just-in-time”, when the server receives the request.
  * Static Site Generation (SSG)
    * Generate the initial HTML for each page by doing the first React render at compile-time.
    * Then store all of the generated HTML files to the server.
    * Those files are served “as-is” when the user requests them.
  * Incremental Static Regeneration (ISR)
    * The first time a user requests a particular page, the server will generate the HTML and send it to the user, the same as “on-demand” server-side rendering. The difference is that it hangs onto that generated HTML. The next time someone requests that same page, Next will automatically serve up that pre-generated HTML, same as SSG.
* They each have their own pros and cons, but fundamentally, they all serve the same purpose: to improve performance.

### Hydration

* In a client-side rendering, the initial render is responsible for creating all of the DOM nodes. With server-side rendering, however, all of those DOM nodes already exist. Instead, React has to “adopt” the DOM (Hydration).
* The hydration is the process of turning the static DOM nodes into an interactive web application.
* "Hydration is like watering the “dry” HTML with the “water” of interactivity and event handlers". (Dan Abramov)

* At a high level, the process of hydration goes something like this:
  * Perform a “speed render”, to figure out the shape of our component tree, and to initialize our component instances.
  * Wire up all of the interactivity (add event listeners, attach refs, etc).

## React Server Components

### Why?

* SSR addresses some of the challenges of CSR but introduces new challenges.
  * A React component will be rendered on the server and hydrated on the client, meaning it will be executed twice—once on the server and once on the client.
  * If there is any data fetching on mount, it will also be executed twice, on both the server and the client.

* And there is a big goal: writing server logic in React code that runs only on the server and never on the client, similar to how we do with PHP.

### Definition

* React Server Components is an optional new mode for React, it's a new paradigm, a different way of things working.
* Within this optional mode, there are two types of components: Server Components and Client Components.

### Server Components

* The big idea with “Server Components” is that they only run on the server and never on the client. They're intended to be used for components that don't need to be interactive.

### Client Components

* A Client Component will render on the server during Server-Side Rendering (SSR) and it will hydrate on the client and potentially re-render on the client.

### How Server Components work?

* Server Components are pre-rendered, so the JavaScript bundle doesn't include them; it includes only their results, which are React elements (plain JavaScript objects).

* RSC Without SSR:
  * Pre-rendering happens at compile time. When the bundler (e.g. Webpack) bundles the JavaScript code, it pre-renders the Server Components.
* RSC With SSR:
  * Pre-rendering happens during SSR.

* The most obvious benefit of RSC is performance. If half of the components in your application are Server Components, it means that your JS bundle will be significantly smaller, since all of that code can be omitted.

### Is RSC a replacement for SSR? Do we have to pick one or the other?

* React Server Components is about "pre-rendering" components so that the component itself isn't included in the JS bundle
* Server-Side Rendering is about generating HTML that will be served to the user while the app is hydrating.

* RSC and SSR are separate features. It's possible to use them separately. But they're intended to be used together.

* Modern React frameworks like Next.js include a server component, allowing us to build true full-stack applications using React. In this module, we'll see how to build a full-stack application that uses bleeding-edge features like React Server Components.

## General Definitions

* 'use strict' is a directive that tightened some of the rules in JavaScript.
* View Page Source: to see the HTML source code.
* Elements tab: live view of the current DOM after all JavaScript has been executed and after any changes have been made to the DOM.

## Terminology

* Client-Side React Application
* Full-Stack React Application (RSC with SSR)
* Server-Rendered Application (SSR)
* Full Stack React | React framework | React meta-framework | full-stack React meta-framework
* React full-stack features: Suspense, React Server Components, etc.
* For the most part, we're going to focus on the core React features, and use Next as the “setting”, the environment in which we access those features.
