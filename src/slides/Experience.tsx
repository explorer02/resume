import { Div, H3, Li, Link, P, Slide, Ul } from "@gregcello/revealjs-react";

export const Experience = () => {
  return (
    <Slide>
      <Slide>
        <H3 className="color-orange">Experience</H3>
        <br />
        <Div style={{ textAlign: "left" }}>
          <P className="text-md color-purple">Frontend Developer</P>
          <P className="text-md color-green">Sprinklr (June 21 - Current)</P>
          <Ul className="text-sm">
            <Li>Worked on high performant Enterprise and Lite platform</Li>
            <Li>
              Created Widgets, Forms, Virtualized Lists, Grids, Modals,
              Tombstones, Data Layer for reusable Components and more
            </Li>
            <Li>Conducted Interviews, Trained new hires and interns</Li>
          </Ul>
        </Div>
      </Slide>

      <Slide>
        <Div style={{ textAlign: "left" }}>
          <P className="text-md color-purple">Frontend Developer Intern</P>
          <P className="text-md color-green">Sprinklr (May 20 - Jun 20)</P>
          <Ul className="text-sm">
            <Li>
              Worked on{" "}
              <Link href="https://blog-explorer.netlify.app/" target="_blank">
                Static website for Blogs
              </Link>
            </Li>
            <Li>
              Tech Stack - HTML, CSS, JS, React, Gatsby, Tailwind, Prismic,
              Netlify, Algolia
            </Li>
            <Li>
              Salient Features -
              <Ul>
                <Li>Serverless</Li>
                <Li>Light weight</Li>
                <Li>Quick Navigation</Li>
                <Li>Code Highlighting</Li>
                <Li>Serverless</Li>
                <Li>Search for content inside blogs</Li>
                <Li>
                  Create Blog through Prismic Rich text Editor or Markdown
                </Li>
              </Ul>
            </Li>
          </Ul>
        </Div>
      </Slide>
    </Slide>
  );
};
