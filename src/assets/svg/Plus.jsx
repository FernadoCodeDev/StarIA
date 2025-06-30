import React from "react";
const Plus = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
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
        <path
          d="M5 12H19"
          stroke="currentcolor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L12 19"
          stroke="currentcolor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Plus;
