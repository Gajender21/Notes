import React from "react";

function Background({ theme }) {
  return (
    <div className="fixed z-[2] w-full h-screen">
      {" "}
      <h1
        className={
          "absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tighter font-medium " +
          theme.backgroundTextColor
        }
      >
        Notes.
      </h1>
    </div>
  );
}

export default Background;
