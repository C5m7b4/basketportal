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
  background-color: ${(props) => props.theme.body.background};
  color: ${(props) => props.theme.body.text};
  transition: all 0.3s ease;
`;

interface PaneDivProps {
  theme: ColorThemeStyle;
  minSize?: number;
}

const PaneDivVertical = styled.div<PaneDivProps>`
  flex: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.sidebar.color};
  color: ${(props) => props.theme.sidebar.text};
  transition: all 0.3s ease;
`;
const PaneDivHorizontal = styled.div<PaneDivProps>`
  flex: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.sidebar.color};
  color: ${(props) => props.theme.sidebar.text};
  transition: all 0.3s ease;
`;

const PaneDiv = styled.div<PaneDivProps>`
  flex: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.sidebar.color};
  color: ${(props) => props.theme.sidebar.text};
  transition: all 0.3s ease;
  /* min-height: 400px; */
`;

interface ResizerProps {
  theme: ColorThemeStyle;
  direction: 'row-resize' | 'col-resize';
}
const SeparatorVertical = styled.div<ResizerProps>`
  border: 5px solid ${(props) => props.theme.colors.border};
  cursor: ${(props) => props.direction};
  width: 5px;
  background-color: black;
  transition: all 0.3s ease;
`;

const SeparatorHorizontal = styled.div<ResizerProps>`
  border: 5px solid ${(props) => props.theme.colors.border};
  cursor: ${(props) => props.direction};
  height: 5px;
  width: 100%;
  background-color: black;
  transition: all 0.3s ease;
`;

export type SplitPaneContextType = {
  position: number;
  setPosition: (n: number) => void;
};
const initialValue: SplitPaneContextType = {
  position: 0,
  setPosition: (n: number) => n,
};
const SplitPaneContext =
  React.createContext<SplitPaneContextType>(initialValue);

export type PanelDirection = 'vertical' | 'horizontal';
type SplitPaneProps = {
  children: JSX.Element[];
  direction: PanelDirection;
  minSize: number;
};

const SplitPane: React.FC<SplitPaneProps> = ({
  children,
  direction = 'vertical',
  minSize = 25,
}) => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const [position, setPosition] = React.useState<number | null>(null);
  const separatorPosition = React.useRef<number>(0);
  const splitPaneRef = React.createRef<HTMLDivElement>();
  const dragging = React.useRef<boolean>(false);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    if (direction === 'horizontal') {
      separatorPosition.current = e.clientY;
    } else {
      separatorPosition.current = e.clientX;
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!separatorPosition.current) {
      return;
    }
    if (!dragging.current) return;

    if (direction === 'horizontal') {
      const newposition =
        Number(position) + e.clientY - separatorPosition.current;
      separatorPosition.current = e.clientY;
      // const splitPaneHeight = splitPaneRef?.current?.clientHeight;
      setPosition(newposition);
    } else {
      const newposition =
        Number(position) + e.clientX - separatorPosition.current;
      separatorPosition.current = e.clientX;
      // const splitPaneHeight = splitPaneRef?.current?.clientHeight;
      setPosition(newposition);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    separatorPosition.current = 0;
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
      ref={splitPaneRef}
      direction={direction === 'vertical' ? 'row' : 'column'}
      theme={theme}
    >
      <SplitPaneContext.Provider value={{ position, setPosition }}>
        <PaneOne
          minSize={minSize}
          contents={children[0]}
          direction={direction}
        />
        {direction === 'horizontal' ? (
          <SeparatorHorizontal
            onMouseDown={onMouseDown}
            theme={theme}
            direction={'row-resize'}
          />
        ) : (
          <SeparatorVertical
            onMouseDown={onMouseDown}
            theme={theme}
            direction={'col-resize'}
          />
        )}

        <PaneTwo contents={children[1]} />
      </SplitPaneContext.Provider>
    </Main>
  );
};

export type PaneProps = {
  contents: JSX.Element;
  direction?: PanelDirection;
  minSize?: number;
};

export const PaneOne: React.FC<PaneProps> = ({
  contents,
  direction,
  minSize = 25,
}) => {
  const topRef = React.createRef<HTMLDivElement>();
  const { position, setPosition } = React.useContext(SplitPaneContext);

  React.useEffect(() => {
    if (!topRef) return;
    if (!topRef.current) return;

    if (!position) {
      if (direction === 'horizontal') {
        let parent = topRef.current.firstChild;
        if (!parent) {
          parent = topRef.current;
        }
        const rect: number = (parent as HTMLDivElement).getBoundingClientRect()
          .height;
        const percentage = minSize / 100;
        const pixels = rect * percentage;
        setPosition(pixels);
      } else {
        const parent = topRef.current.parentNode;
        const rect: number = (parent as HTMLDivElement).getBoundingClientRect()
          .width;
        const percentage = minSize / 100;
        const pixels = rect * percentage;
        setPosition(pixels);
      }

      topRef.current.style.flex = 'none';
      return;
    }

    if (direction === 'horizontal') {
      topRef.current.style.height = `${position}px`;
    } else {
      topRef.current.style.width = `${position}px`;
    }
  }, [position]);

  return (
    <>
      {direction === 'horizontal' ? (
        <PaneDivVertical ref={topRef} style={{ height: `'${minSize}%'` }}>
          {contents}
        </PaneDivVertical>
      ) : (
        <PaneDivHorizontal ref={topRef} style={{ width: `'${minSize}%'` }}>
          {contents}
        </PaneDivHorizontal>
      )}
    </>
  );
};

export const PaneTwo: React.FC<PaneProps> = ({ contents }) => {
  return <PaneDiv id="pane-master-1-2">{contents}</PaneDiv>;
};

export default SplitPane;
