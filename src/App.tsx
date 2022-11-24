import { RevealJS, HighlightPlugin } from "@gregcello/revealjs-react";

import "styles/black-theme.css";

import { Intro } from "slides/Intro";
import { Skills } from "slides/Skills";
import { Experience } from "slides/Experience";

function App() {
  return (
    <RevealJS plugins={[HighlightPlugin]} hash>
      <Intro />
      <Skills />
      <Experience />
    </RevealJS>
  );
}

export default App;
