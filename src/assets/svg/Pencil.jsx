import React from "react";
const Pencil = (props) => {
  return (
    <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M13 0L16 3L9 10H6V7L13 0Z" fill="currentcolor" />
      <path d="M1 1V15H15V9H13V13H3V3H7V1H1Z" fill="currentcolor" />
    </g>
  </svg>
  );
};

export default Pencil;
