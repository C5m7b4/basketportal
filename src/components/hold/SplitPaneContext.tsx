import React from 'react';

export type SplitPaneContextType = {
  position: number;
  setPosition: (n: number) => void;
};

const initialValue: SplitPaneContextType = {
  setPosition: (n: number) => n,
  position: 0,
};

export const SplitPaneContext =
  React.createContext<SplitPaneContextType | null>(initialValue);

interface SplitProviderProps {
  children: React.ReactNode;
}

const SplitContextProvider: React.FC<SplitProviderProps> = ({ children }) => {
  const [position, setPosition1] = React.useState<number>(0);

  const setPosition = (e) => {
    console.log('setting positio', e);
    setPosition1(e);
  };

  return (
    <SplitPaneContext.Provider value={{ position, setPosition }}>
      {children}
    </SplitPaneContext.Provider>
  );
};

export default SplitContextProvider;
