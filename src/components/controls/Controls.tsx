import "./Controls.css";

export interface ControlsInterface {
  undoCall: () => void;
  redoCall: () => void;
  dots: number;
  removedDots: number;
}

export const UIControls: React.FC<ControlsInterface> = ({
  undoCall,
  redoCall,
  dots,
  removedDots,
}) => {
  return (
    <div className="Controls">
      <button disabled={dots === 0} onClick={undoCall}>
        Undo
      </button>
      <button disabled={removedDots === 0} onClick={redoCall}>
        Redo
      </button>
    </div>
  );
};
