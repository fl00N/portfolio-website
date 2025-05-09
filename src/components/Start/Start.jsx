import Shapes from "../3D/StartShapes/Shapes";
import "./Start.css";
import OpacityText from "../Animation/OpacityText/OpacityText";

export default function Start() {
  return (
    <div className="mainStartDiv">
      <FirstPage />
      <SecondPage />
    </div>
  );
}

const FirstPage = () => {
  return (
    <div className="startDiv">
      <Shapes />

      <div className="greetingDiv">
        <p>Hello there!</p>
        <h1>
          I'm Andrii Bondar,
          <span>a Frontend developer</span>
        </h1>
        <h3>From Ukraine</h3>
        <h3>Based in the UK</h3>
      </div>
    </div>
  );
};

const SecondPage = () => {
  const paragraph =
    "I'm a motivated developer with a drive and a commitment to continuous learning. I have built a strong foundation through self-study and hands-on projects.";

  return (
    <>
      <div className="textUnderStart">
        <OpacityText paragraph={paragraph} />
      </div>
    </>
  );
};
