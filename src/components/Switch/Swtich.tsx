import React, { useState } from "react";
import "./style.css";

interface SwitchProps {
  onToggle: (isLive: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onToggle }) => {
  const [isLive, setIsLive] = useState(false);

  const handleToggle = () => {
    setIsLive(!isLive);
    onToggle(!isLive);
  };

  return (
    <div className="switch-container">
      <span className={`switch-label ${isLive ? "active" : ""}`}>
        {isLive ? "Live" : "Test"}
      </span>
      <div
        className={`switch ${isLive ? "live" : "test"}`}
        onClick={handleToggle}
      >
        <div className={`switch-toggle ${isLive ? "live" : "test"}`} />
      </div>
    </div>
  );
};

export default Switch;
