import {
  RevealJS,
  Slide,
  H1,
  HighlightPlugin,
  Fragment,
} from "@gregcello/revealjs-react";
import "styles/black-theme.css";

function App() {
  return (
    <RevealJS plugins={[HighlightPlugin]}>
      <Slide>
        <Slide>
          <H1>Hello,Meow!</H1>
        </Slide>
        <Slide>
          <H1>Hello, World!</H1>
          <H1>Hello, World23!</H1>
        </Slide>
      </Slide>
      <Slide>
        <H1>Hello,Meow!</H1>
        <Slide>
          <H1>Hello, World!</H1>
          <H1>Hello, World23!</H1>
        </Slide>
      </Slide>
      <Slide>
        <H1>Hello, World 2!</H1>
      </Slide>
    </RevealJS>
  );
}

export default App;
