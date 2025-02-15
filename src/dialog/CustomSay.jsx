import { Say } from "react-visual-novel";

/**
 * @param {import("react-visual-novel").SayProps | pink} props
 * @returns
 */
export function CustomSay(props) {
  return (
    <Say
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `3px solid ${props.pink ? "hotpink" : "blue"}`,
        borderRadius: "10px",
        backgroundColor: "#444444E0",
        fontSize: "0.5rem",
        width: "1000px",
        height: "200px",
      }}
      {...props}
      durationMs={300}
      scrim={true}
    />
  );
}
