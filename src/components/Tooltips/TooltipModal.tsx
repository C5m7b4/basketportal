import React from 'react';
import { createPortal } from 'react-dom';

type ModalPosition = {
  x: number;
  y: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  position: ModalPosition;
};

const TooltipModal: React.FC<Props> = ({
  isOpen,
  onClose,
  content,
  position,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-tooltip"
      style={{ top: position.y, left: position.x }}
    >
      <div className="modal-tooltip-container">
        <div className="modal-tooltip-body">
          <p>{content}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default TooltipModal;
