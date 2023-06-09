import { CssModules } from "./composents/CssModules";
import { Emotion } from "./composents/Emotion";
import { InlineStyle } from "./composents/InlineStyle";
import { StyledComponets } from "./composents/StyledComponets";
import { StyledJsx } from "./composents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponets />
      <Emotion />
    </div>
  );
}
