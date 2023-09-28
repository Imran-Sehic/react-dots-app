import "App.css";
import { UIControls } from "components/controls/Controls";
import { DotInterface, UIDot } from "components/dot/Dot";
import { useState } from "react";

function App() {
  const [dots, setDots] = useState<DotInterface[]>([]);
  const [removedDots, setRemovedDots] = useState<DotInterface[]>([]);

  const addDot = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDots((dots) => [...dots, { x: e.clientX, y: e.clientY }]);
  };

  const redoCall = () => {
    const lastDot = removedDots.pop();
    Promise.all([
      setRemovedDots([...removedDots]),
      setDots((prevDots) => [...prevDots, lastDot as DotInterface]),
    ]);
  };

  const undoCall = () => {
    const lastDot = dots.pop();
    Promise.all([
      setDots([...dots]),
      setRemovedDots((prevDots) => [...prevDots, lastDot as DotInterface]),
    ]);
  };

  return (
    <div className="App">
      <UIControls
        undoCall={undoCall}
        redoCall={redoCall}
        dots={dots.length}
        removedDots={removedDots.length}
      />
      <div className="Drawer" onClick={addDot}>
        {dots.length > 0 &&
          dots.map(({ x, y }, index) => {
            return <UIDot x={x} y={y} key={`dot-${index}`} />;
          })}
      </div>
    </div>
  );
}

export default App;
