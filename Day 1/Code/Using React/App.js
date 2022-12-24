const heading = React.createElement(
    "h1",
    {
        id : "title"
    },
    "This is heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id : "title"
    },
    "This is heading 2"
);

const container = React.createElement(
    "div",
    {
        id : "container"
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
