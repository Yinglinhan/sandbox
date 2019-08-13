import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";
import "./styles.css";

function CheckBox() {
  let [mode, cycle] = useCycle("empty", "checked");
  return (
    <div className="CheckBox">
      <Frame
        center={true}
        backgroundColor="none"
        width={32}
        height={32}
        border={"4px solid #9E9E9E"}
        onTap={function handleTap() {
          cycle();
        }}
        whileTap={{ backgroundColor: "#F5F5F5" }}
        transition={{ duration: 0.3 }}
      >
        <Frame
          center={true}
          backgroundColor="none"
          color="#424242"
          animate={mode}
          variants={{
            empty: { opacity: 0, rotate: 0 },
            checked: { opacity: 1, rotate: 90 }
          }}
          transition={{ duration: 0.35 }}
        >
          ╳
        </Frame>
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CheckBox />, rootElement);
