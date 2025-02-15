import { Branch, Play, Scene } from "react-visual-novel";
import { CustomSay } from "../dialog/CustomSay";

import { cryCat, loneWolf, unravel } from "../assets";

export function BranchCryCat() {
  return (
    <Branch>
      <Scene
        src={loneWolf}
        audio={{ whileVisible: { uri: unravel, loop: true } }}
      />
      <CustomSay>{"Alcabo ni queria :("}</CustomSay>
      <CustomSay
        menu={[
          {
            label: "Ta weno :(",
            style: { fontSize: "3rem" },
            onClick: (ctx) => {
              ctx.goToLocation("Arrendadora", 7);
            },
          },
          ,
        ]}
      >
        Y si vamos por otra ruta?
      </CustomSay>
    </Branch>
  );
}
