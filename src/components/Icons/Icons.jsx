// src/components/icons/Icon.jsx
import React from "react";
import { icons } from "./allIcons";

const Icon = ({ name, className, ...props }) => {
  const IconSVG = icons[name];
  if (!IconSVG) return null; // or return a default icon
  return React.cloneElement(IconSVG, { className, ...props });
};

export default Icon;
