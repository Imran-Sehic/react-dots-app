import './Dot.css'

export interface DotInterface {
  x: number;
  y: number;
}

export const UIDot: React.FC<DotInterface> = ({ x, y }) => {
  return <div style={{ top: y, left: x }} className="Container"></div>;
};
