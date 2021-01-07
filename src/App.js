import Content from './Content';
import Menu from './Menu';
import './sass/App.scss';
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (  
    <div className="App">
      <AnimatedCursor/>
      <div className="Wrapper">
        <Menu />
        <Content />
        <p className="scroll-down">Scroll Down</p>
        <p className="tagline">Visual artist and photographer</p>
      </div>
    </div>
  );
}

export default App;
