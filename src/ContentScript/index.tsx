import React from "react";
import { render } from "react-dom";

import { ContentScript } from "./ContentScript";

const root = document.createElement("div");
root.id = "hello_world";

document.documentElement.appendChild(root);

render(<ContentScript />, root);
