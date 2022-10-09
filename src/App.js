// import ReactPlayer from "react-player";

import SideNav from "./components/nav/SideNav";
import TopNav from "./components/nav/TopNav";
import Section from "./components/sections";

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="bottom-section">
        <SideNav />
        <Section />
      </div>
    </div>
  );
}

export default App;
