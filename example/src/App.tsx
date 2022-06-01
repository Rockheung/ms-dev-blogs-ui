import React from "react";
import logo from "./logo.svg";
import { Button } from "ms-dev-blogs-ui";
import "ms-dev-blogs-ui/dist/styles.css";

function App() {
  return (
    <div className="App">
      <Button variant={"primary"}>
        <p>{"hi"}</p>
      </Button>
    </div>
  );
}

export default App;
