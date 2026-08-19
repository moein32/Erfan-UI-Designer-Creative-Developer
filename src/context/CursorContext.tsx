import React, { createContext, useContext, useState, useEffect } from 'react';
import { CursorState } from '../types';

interface CursorContextType {
  cursor: CursorState;
  setCursor: (state: Partial<CursorState>) => void;
  resetCursor: () => void;
  isTouchDevice: boolean;
}

const defaultCursorState: CursorState = {
  type: 'default',
  text: undefined,
  isHovered: false,
};

const CursorContext = createContext<CursorContextType>({
  cursor: defaultCursorState,
  setCursor: () => {},
  resetCursor: () => {},
  isTouchDevice: false,
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursor, setCursorState] = useState<CursorState>(defaultCursorState);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch devices
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => {
      window.removeEventListener('resize', checkTouch);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  const setCursor = (state: Partial<CursorState>) => {
    if (isTouchDevice) return;
    setCursorState((prev) => ({ ...prev, ...state, isHovered: true }));
  };

  const resetCursor = () => {
    if (isTouchDevice) return;
    setCursorState(defaultCursorState);
  };

  return (
    <CursorContext.Provider value={{ cursor, setCursor, resetCursor, isTouchDevice }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
