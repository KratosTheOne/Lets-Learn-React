import React from "react";
import ReactDOM from "react-dom/client";

/**
 *HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
File watcher algorithm - made with C++
MINIFY
BUNDLING
Cleaning our code
DEV and production Build
Super fast building algorithm
does image optimization also
Caching while development
Compresses
Compatible with older version of browser
HTTPS in dev
port Number
Consistent hashin algorithm
Zero Configuration
*/

const heading = React.createElement(
    "h1",
    {
        id : "title"
    },
    "This is heading 1 from parcel"
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
