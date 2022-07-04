import React from "react";
import "./index.css";
import Routess from "./Routess";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Routess />);
