import React from "react";
import StyleLoader from "./loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={StyleLoader.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
