import React from 'react';
import styled from 'styled-components';
import useColorTheme from '@/hooks/useColorTheme';
import { ColorThemeStyle } from '@/styles/themes';
import './styles.css';

interface MainProps {
  theme: ColorThemeStyle;
  direction: 'row' | 'column';
}

const Main = styled.div<MainProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: 100%;
`;

export type SplitPaneContextType = {
  topHeight: number;
  setTopHeight: (n: number) => void;
};
const initialValue: SplitPaneContextType = {
  topHeight: 0,
  setTopHeight: (n: number) => n,
};
const SplitPaneContext =
  React.createContext<SplitPaneContextType>(initialValue);

export type PanelDirection = 'vertical' | 'horizontal';
type SplitPaneProps = {
  children: JSX.Element[];
  direction: PanelDirection;
};

const SplitPane: React.FC<SplitPaneProps> = ({
  children,
  direction = 'vertical',
}) => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const [topHeight, setTopHeight] = React.useState<number>(0);
  const separatorYPosition = React.useRef<number | null>(null);
  const splitPaneRef = React.createRef<HTMLDivElement>();

  const onMouseDown = (e: React.MouseEvent) => {
    separatorYPosition.current = e.clientY;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!separatorYPosition.current) {
      return;
    }
    const newTopHeight =
      Number(topHeight) + e.clientY - separatorYPosition.current;
    separatorYPosition.current = e.clientY;

    //const splitPaneHeight = splitPaneRef?.current?.clientHeight;

    setTopHeight(newTopHeight);
  };

  const onMouseUp = () => {
    separatorYPosition.current = null;
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  return (
    <Main
      id="main-splitter-div"
      ref={splitPaneRef}
      direction={direction === 'vertical' ? 'column' : 'row'}
      theme={theme}
    >
      <SplitPaneContext.Provider value={{ topHeight, setTopHeight }}>
        <PaneOne contents={children[0]} direction={direction} />
        <div className="separator" onMouseDown={onMouseDown} />
        <PaneTwo contents={children[1]} />
      </SplitPaneContext.Provider>
    </Main>
  );
};

export type PaneProps = {
  contents: JSX.Element;
  direction?: PanelDirection;
};

export const PaneOne: React.FC<PaneProps> = ({ contents, direction }) => {
  const topRef = React.createRef<HTMLDivElement>();
  const { topHeight, setTopHeight } = React.useContext(SplitPaneContext);

  React.useEffect(() => {
    if (!topRef) return;
    if (!topRef.current) return;

    if (!topHeight) {
      setTopHeight(topRef.current.clientHeight);
      topRef.current.style.flex = 'none';
      return;
    }

    topRef.current.style.height = `${topHeight}px`;
  }, [topHeight]);

  return (
    <div className="split-pane-top" ref={topRef}>
      {contents}
    </div>
  );
};

export const PaneTwo: React.FC<PaneProps> = ({ contents }) => {
  return <div style={{ height: '75%' }}>{contents}</div>;
};

export default SplitPane;
