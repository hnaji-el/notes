import React from "react";
import { createRoot } from "react-dom/client";

// 2. Create a React element
const element = React.createElement(
  "h1",
  {
    id: "hello",
    style: { color: "red", fontSize: "70px" },
  },
  "Hello World!"
);

// 3. Render the application
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
