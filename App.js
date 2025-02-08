/*
 *<div class="psrent">
 *       <div class="child1">
 *              <h1>Hello world</h1>
 *              <h2>Hello world</h2>
 *       </div>
 * <div class="child2">
 *              <h1>Hello world</h1>
 *              <h2>Hello world</h2>
 *       </div>
 *</div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
