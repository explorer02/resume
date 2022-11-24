import { H2, H4, Li, Link, Slide, Ul } from "@gregcello/revealjs-react";

export const Intro = () => {
  return (
    <Slide>
      <H2 className="color-green">Ajay Bhardwaj</H2>
      <H4>Frontend Dev @ Sprinklr</H4>
      <br />
      <Ul>
        <Li>
          <Link href="#/1">Skills</Link>
        </Li>
        <Li>
          <Link href="#/2">Experience</Link>
        </Li>
        <Li>
          <Link href="#/3">Projects</Link>
        </Li>
        <Li>
          <Link href="#/4">Qualification</Link>
        </Li>
        <Li>
          <Link href="#/5">Contact</Link>
        </Li>
      </Ul>
    </Slide>
  );
};
