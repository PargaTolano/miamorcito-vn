import { Branch, Scene, Show } from "react-visual-novel";
import { CustomSay as Say } from "../dialog/CustomSay";

import { arrendadora, cats, magordito } from "../assets";

/**
 * 
 * @param {import("react-visual-novel").SayProps} props 
 * @returns 
 */
function MagorditoSay(props) {
  return (
    <Say
      image={{
        uri: magordito,
        style: {
          width: "100vw",
          transform: "translate(-50%,-50%) scale(0.4)",
          left: "50%",
          top: "50%",
        },
      }}
      {...props}
    />
  );
}

export function BranchArrendadora() {
  return (
    <Branch>
      <Scene
        src={arrendadora}
        audio={{ whileVisible: { uri: cats, loop: true } }}
      />
      <MagorditoSay hide={0.3}>Hola wapa</MagorditoSay>
      <Say
        image={{
          uri: magordito,
          style: {
            width: "100vw",
            transform: "translate(-50%,-50%) scale(0.4)",
            left: "50%",
            top: "50%",
          },
          animation: {
            initial: {
              scaleX: 1,
            },
            entrance: {
              scaleX: -1,
              transitionDuration: "100ms",
            },
          },
        }}
        hide={0.3}
      >
        Veo que viniste a tu chamba
      </Say>
      <MagorditoSay hide={0.3}>Dejame decirte una cosa</MagorditoSay>
      <MagorditoSay hide={0.3}>Soy el poderoso magordito</MagorditoSay>
      <MagorditoSay hide={0.3}>
        Y poseo poderes magicos muy poderosos
      </MagorditoSay>
      <MagorditoSay hide={0.3}>
        Por ejemplo, puedo mejorar tu san valentin
      </MagorditoSay>
      <MagorditoSay
        menu={[
          {
            label: "Ahuevo",
            onClick: (ctx) => {
              ctx.goToBranch("Patio");
            },
          },
          {
            label: "Nel pastel",
            onClick: (ctx) => {
              ctx.goToBranch("CryCat");
            },
          },
        ]}
      >
        Quieres ver como?
      </MagorditoSay>
    </Branch>
  );
}
