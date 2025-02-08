<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Namste React</title>
    
</head>
<body>
    <div id="root">
        <h1>Heloo world using by Html!</h1>
    </div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- <script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Hello world form javascript";
   const divElement = document.getElementById("root");
   divElement.appendChild(heading);
</script> -->
<script src="./App.js"></script>




//App.js
const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello world form react js"
);



/App.js
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


</body>
</html>
