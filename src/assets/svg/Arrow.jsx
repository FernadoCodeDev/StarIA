import React from "react";
const Arrow = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z"
          fill="currentcolor"
        />
      </g>
    </svg>
  );
};

export default Arrow;
