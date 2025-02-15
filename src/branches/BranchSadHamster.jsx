import { Branch, Scene } from "react-visual-novel";
import { CustomSay } from "../dialog/CustomSay";

import { gym, sadHamster, sadHamsterMusic } from "../assets";

export function BranchSadHamster() {
  return (
    <Branch>
      <Scene
        src={gym}
        audio={{ whileVisible: { uri: sadHamsterMusic, loop: true } }}
      />
      <CustomSay
        image={{
          uri: sadHamster,
          style: {
            width: "100vw",
            transform: "scale(0.5)",
          },
        }}
      >
        {"Alcabo ni queria :("}
      </CustomSay>
      <CustomSay
        image={{ uri: sadHamster }}
        menu={[
          {
            label: "Ta weno :(",
            style: { fontSize: "3rem" },
            onClick: (ctx) => {
              ctx.goToLocation("Patio", 27);
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
