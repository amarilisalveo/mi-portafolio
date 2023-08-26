import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrolladora Web",
          "Desarrolladora Front End",
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text