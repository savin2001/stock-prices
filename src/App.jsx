import React from "react";

import Home from "./main-section/Home.jsx";
import SideMenu from "./side-menu/SideMenu.jsx";

function App() {
  return (
    <div className="App">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <Home />
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
