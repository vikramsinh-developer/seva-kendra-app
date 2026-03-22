import React, { useEffect } from 'react';
import '../styles/Modal.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    // save focused element to restore focus when modal closes
    const previousActive = document.activeElement as HTMLElement | null;
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previousActive?.focus();
    };
  }, [onClose]);

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" aria-label={title || 'Dialog'}>
      <div className="modalContent">
        <button className="modalClose" onClick={onClose} aria-label="Close">✕</button>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
