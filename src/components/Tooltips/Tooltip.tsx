import React, { useState, useRef } from 'react';
import TooltipModal from './TooltipModal';
import './tooltips.css';

export enum tooltipPostitionEnum {
  Up,
  Down,
}

export interface ITooltip {
  content: string;
  children?: JSX.Element;
}

const Tooltip = ({ content, children }: ITooltip) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const position = useRef({
    x: 0,
    y: 0,
  });

  const MouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('mouse has entered');
    if (position.current) {
      position.current.x = e.clientX;
      position.current.y = e.clientY;
    }
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 4000);
  };
  return (
    <div className="tooltipContainer" onMouseEnter={MouseEnter}>
      <TooltipModal
        content={content}
        isOpen={showTooltip}
        onClose={() => setShowTooltip(false)}
        position={position}
      />
      {children}
    </div>
  );
};

export default Tooltip;
