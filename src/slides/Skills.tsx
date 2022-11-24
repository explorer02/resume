import { Div, H3, Li, Slide, Ul } from "@gregcello/revealjs-react";

export const Skills = () => {
  return (
    <Slide>
      <H3 className="color-orange">Skills</H3>
      <br />
      <Div style={{ display: "flex", justifyContent: "space-around" }}>
        <Ul style={{ flex: "1 0 0" }} className="text-sm">
          <Li>HTML</Li>
          <Li>CSS</Li>
          <Li>Javascript</Li>
          <Li>Typescript</Li>
        </Ul>

        <Ul style={{ flex: "1 0 0" }} className="text-sm">
          <Li>React</Li>
          <Li>GraphQL (Client side)</Li>
          <Li>NextJS</Li>
          <Li>Component Libraries (Spaceweb, MUI, BaseUI)</Li>
          <Li>React & Chrome Dev Tools</Li>
          <Li>MongoDB Atlas</Li>
        </Ul>
      </Div>
    </Slide>
  );
};
