/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *       </div>
 *  </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement(
  "div",                   // Element type: a <div> element
  { id: "parent" },         // Props: an object with id="parent"
  [React.createElement(      // Child: another <div> element (the "child")
    "div", { id: "child" }, // Child's element type and props
    [                       // Children: An array of two <h1> elements
      React.createElement("h1", {}, "I'm an h1 tag"),  // First <h1> with text
      React.createElement("h2", {}, "I'm an h2 tag")       // Second <h2> with text
    ]
  ), React.createElement(      // Child: another <div> element (the "child")
    "div", { id: "child2" }, // Child's element type and props
    [                       // Children: An array of two <h1> elements
      React.createElement("h1", {}, "I'm an h1 tag from child2"),  // First <h1> with text
      React.createElement("h2", {}, "I'm an h2 tag from child2")       // Second <h2> with text
    ]
  )]
);

// JSX

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);