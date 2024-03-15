
const parent = React.createElement(
    "div",
     {
        id: "parent"
     }, 
     [React.createElement("div", {id: "child1"}, [ 
        React.createElement("h1", {}, "I am Heading1"),
        React.createElement("h2", {}, "I am Heading2")
     ]), React.createElement("div", {id: "child1"}, [ 
        React.createElement("h1", {}, "I am Heading1"),
        React.createElement("h2", {}, "I am Heading2")
     ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
