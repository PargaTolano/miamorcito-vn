import { Game } from "react-visual-novel";
import "react-visual-novel/dist/index.css";

import { branches } from "./branches";
import * as assets from "./assets";
import { useState } from "react";

export default function MyGame() {
  const [start, setStarted] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {start ? (
        <Game assets={assets} branches={branches} initialBranchId="Arrendadora">
          {(render, res, progress) => {
            if (res.status === "loading") {
              return <h1>{(progress * 100).toFixed(2)}%</h1>;
            }
            if (res.status === "failure") {
              return <h1>valio barriga senior verga</h1>;
            }
            return render();
          }}
        </Game>
      ) : (
        <button
          style={{ fontSize: "3rem", padding: "1rem 3rem" }}
          onClick={() => setStarted(true)}
        >
          Start
        </button>
      )}
    </div>
  );
}
