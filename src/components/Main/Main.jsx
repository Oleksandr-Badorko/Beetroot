import React from "react";
import "../Main/Main.scss";
import Rectangles from "../Main/Rectangle";
import BlueRectangles from "../Main/Blue-rectangle";

export const Main = () => (
  <main className="two-main">
    <div className="main">
     <Rectangles/>
    </div>
    <div className="news">
      <BlueRectangles/>
    </div>
  </main>
);
