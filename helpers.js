'use strict';

export const visuallyHidden = `
  position: absolute !important;
  width: 1px !important; 
  height: 1px !important; 
  padding:0 !important;
  border:0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`;

export const setCustomProperty = (name, value) => {
  const root = document.documentElement;
  root.style.setProperty(name, value);
};
