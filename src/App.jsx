import { useEffect, useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

function App() {
  const [signal, setSignal] = useState("left");
  // const [right, setRight] = useState(false);
  // const [top, setTop] = useState(false);
  // const [bottom, setBottom] = useState(false);
  setTimeout(() => {
    if (signal === "left") {
      setSignal("right");
      return;
    }
    if (signal === "right") {
      setSignal("top");
      return;
    }
    if (signal === "top") {
      setSignal("bottom");
      return;
    }
    if (signal === "bottom") {
      setSignal("left");
      return;
    }
  }, 13000); // Simulate a delay for the initial load
  return (
    <div className="simulator-wrapper">
      <div className="intersection">
        <Left signal={signal} />
        <Right signal={signal} />
        <Top signal={signal} />
        <Bottom signal={signal} />
        {signal === "bottom" ? (
          <img
            src="green-light-main.png"
            alt="Bus"
            className="vehicle bus"
            style={{ top: "4%", left: `28%` }}
          />
        ) : (
          <img
            src="pngtree-three-sets-of-traffic-lights-in-red-yellow-and-green-colors-png-image_9118211.png"
            alt="Bus"
            className="vehicle bus"
            style={{ top: "4%", left: `28%` }}
          />
        )}

        {signal === "top" ? (
          <img
            src="green-light-main.png"
            alt="Bus"
            className="vehicle bus"
            style={{ bottom: "5%", right: `28%`, transform: "rotate(180deg)" }}
          />
        ) : (
          <img
            src="pngtree-three-sets-of-traffic-lights-in-red-yellow-and-green-colors-png-image_9118211.png"
            alt="Bus"
            className="vehicle bus"
            style={{ bottom: "5%", right: `28%`, transform: "rotate(180deg)" }}
          />
        )}
        {signal === "left" ? (
          <img
            src="green-light-main.png"
            alt="Bus"
            className="vehicle bus"
            style={{ top: "17%", right: `15%`, transform: "rotate(90deg)" }}
          />
        ) : (
          <img
            src="pngtree-three-sets-of-traffic-lights-in-red-yellow-and-green-colors-png-image_9118211.png"
            alt="Bus"
            className="vehicle bus"
            style={{ top: "16%", right: `15%`, transform: "rotate(90deg)" }}
          />
        )}
        {signal === "right" ? (
          <img
            src="green-light-main.png"
            alt="Bus"
            className="vehicle bus"
            style={{ bottom: "18%", left: `16%`, transform: "rotate(270deg)" }}
          />
        ) : (
          <img
            src="pngtree-three-sets-of-traffic-lights-in-red-yellow-and-green-colors-png-image_9118211.png"
            alt="Bus"
            className="vehicle bus"
            style={{ bottom: "17%", left: `16%`, transform: "rotate(270deg)" }}
          />
        )}

        <div className="stop-line left-stop-line"></div>
        <div className="stop-line right-stop-line"></div>
        <div className="stop-line top-stop-line"></div>
        <div className="stop-line bottom-stop-line"></div>
      </div>
    </div>
  );
}

export default App;
