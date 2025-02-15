import { Branch, Scene, Show } from "react-visual-novel";
import { CustomSay } from "../dialog/CustomSay";

import {
  valentines,
  alwaysForever,
  fabiola,
  parga,
} from "../assets";

export function BranchHappyEnding() {
  return (
    <Branch>
      <Scene
        src={valentines}
        audio={{ whileVisible: { uri: alwaysForever, loop: true } }}
      />
      <Show
        src={{
          uri: fabiola,
          style: {
            height: "30vmin",
            left: "50%",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
        hide={-1}
      />
      <Show
        src={{
          uri: parga,
          style: {
            height: "30vmin",
            right: "50%",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
        hide={-1}
      />
      <CustomSay pink>Feliz San Valentín Mi Vida</CustomSay>
      <CustomSay pink>Gracias por hacerme tan feliz &lt;3</CustomSay>
    </Branch>
  );
}
