/*
 *
 *  <div id="parent1">
 *       <div id="child1">
 *           <h1 key="h1">this is h1 parent</h1>
 *           <h2 key="h2">this is h2 parent</h2>
 *       </div>
 *  </div>
 *  <div id="parent2">
 *        <div id="child2">
 *            <h1 key="h2">this is h2 parent</h1>
 *            <h2 key="h2">this is h2 parent</h2>
 *        </div>
 *   </div>
 *
 *
 *. ReactElement are objects, they converted to html then got rendered in html dom
 */

const elements = React.createElement("div", { id: "section" }, [
  React.createElement("div", { id: "parent1", key: "parent1" }, [
    React.createElement("h1", { id: "p1child1", key: "p1child1" }, "parent 1 h1"),
    React.createElement("h2", { id: "p1child2", key: "p1child2" }, "parent 1 h2"),
  ]),
  React.createElement("div", { id: "parent2", key:'parent2' }, [
    React.createElement("div", { id: "p2child1", key: "p2child1" }, [
      React.createElement("h1", { id: "p2child1h1", key: "p2child1h1" }, "parent 2 child1 h1"),
      React.createElement("h2", { id: "p2child2h2", key: "p2child2h2" }, "parent 2 child1 h1"),
    ]),
    React.createElement("div", { id: "p2child2", key: "p2child2" }, "parent 2 child 2"),
  ]),
]);

console.log(elements); // React element (javascript object)

const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot creates a root element inside React (which it uses to do all operations on) 
// which is rendered in the browser dom

root.render(elements);
// Root.render replaces everything inside root div, rest remains as it is.
// react can be used inside even a small element on the html page (even on the header, footer, sidebar)
