import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { id:"heading", xyz:"abc"}, "Hello World From React!")
console.log('heading', heading);
 root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);