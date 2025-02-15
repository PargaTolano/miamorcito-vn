import { Branch, Scene, Show } from "react-visual-novel";
import { CustomSay as Say } from "../dialog/CustomSay";

import { patio, cats, magordito, bouquet, pargaFlor } from "../assets";

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

/**
 *
 * @param {import("react-visual-novel").SayProps} props
 * @returns
 */
function FlowerSay(props) {
  return (
    <Say
      image={{
        uri: bouquet,
        style: {
          width: "100vw",
          transform: "translate(-50%,-50%) scale(0.4)",
          left: "50%",
          top: "50%",
        },
        animation: {
          initial: {
            scale: 1,
          },
          entrance: {
            scale: 1.4,
            animationDuration: "1.2s",
            transitionDuration: "1.2s",
          },
          exit: {
            scale: 0.5,
            opacity: 0,
            animationDuration: "1.2s",
            transitionDuration: "1.2s",
          },
        },
      }}
      {...props}
    />
  );
}

/**
 *
 * @param {import("react-visual-novel").SayProps} props
 * @returns
 */
function HeartSay(props) {
  return (
    <Say
      image={{
        uri: pargaFlor,
        style: {
          width: "100vw",
          transform: "translate(-50%,-50%) scale(0.4)",
          left: "50%",
          top: "50%",
        },
        animation: {
          initial: {
            scale: 1,
          },
          entrance: {
            scale: 1.4,
            animationDuration: "1.2s",
            transitionDuration: "1.2s",
          },
          exit: {
            scale: 0.5,
            opacity: 0,
            animationDuration: "1.2s",
            transitionDuration: "1.2s",
          },
        },
      }}
      {...props}
    />
  );
}

const text = `pero no sin antes
dedicarte unas palabras
que un tipo muy zafado me encargo
ahem....
"miamorcito"
"feliz san valentin"
"quiero que sepas que te amo"
"y que estoy tan feliz de haberte conocido"
"estoy feliz por nuestro segundo san valentin juntos"
"que si bien no estamos en el mismo lugar"
"se que estamos juntos y nos queremos mucho"
"adoro que siempre puedo contar contigo"
"adoro como tu sonrisa siempre me hace el dia"
"adoro los chistes horribles que haces"
"adoro tu adiccion a los elotes y crepas"
"gracias por hacerme sentir tan amado"
"te amo cada dia mas <3"
-Parga
`;

const parsedLines = text.split("\n");

export function BranchPatio() {
  return (
    <Branch>
      <Scene src={patio} audio={{ whileVisible: { uri: cats, loop: true } }} />
      <Show
        src={{
          uri: magordito,
          style: {
            width: "100vw",
            transform: "translate(-50%,-50%) scale(0.4)",
            left: "50%",
            top: "50%",
          },
        }}
        hide={-1}
      />
      <Say>Alv me maree con el viaje</Say>
      <Say>Bienvenida al patio de los mensos!</Say>
      <Say>Ps ya eso es todo, no hay mas</Say>
      <Say
        menu={[
          {
            label: "Ok...",
            style: { fontSize: "3rem" },
            onClick: (ctx) => {
              ctx.goToNextStatement();
            },
          },
          ,
        ]}
      >
        Nos vamos?
      </Say>

      <Say>Aweno sisierto</Say>

      {parsedLines.map((line) => (
        <Say>{line}</Say>
      ))}

      <FlowerSay>"Cuidamelas que voy tarde a una junta bb"</FlowerSay>
      <HeartSay
        menu={[
          {
            label: "Chi <3",
            onClick: (ctx) => ctx.goToBranch("HappyEnding"),
          },
          {
            label: "Pa que o que",
            onClick: (ctx) => {
              ctx.goToBranch("SadHamster");
            },
          },
        ]}
      >
        "Ti amo &lt;3 Quieres ser mi san valentin?"
      </HeartSay>
    </Branch>
  );
}
