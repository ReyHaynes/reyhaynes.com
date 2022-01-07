import React from "react";
import { FirebaseInstance as firebase } from "../../firebase";
import "./ThemeToggleButton.scss";

interface ThemeToggleButtonProps {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isThemeDark: boolean;
}

const ThemeToggleButton = ({ toggle, isThemeDark }: ThemeToggleButtonProps) => (
  <button
    className={`theme-toggle theme-toggle--state-${
      isThemeDark ? "dark" : "light"
    }`}
    onClick={(ev) => {
      toggle(ev);
      firebase.logEvent("toggle_theme");
    }}
  >
    <div className="theme-toggle-button"></div>
    <span className="theme-toggle-text">{isThemeDark ? "Night" : "Day"}</span>
  </button>
);

export default ThemeToggleButton;
