import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useColorTheme from '@/hooks/useColorTheme';
import { ColorThemeStyle } from '@/styles/themes';
import SplitContextProvider, {
  SplitPaneContext,
  SplitPaneContextType,
} from './SplitPaneContext';

interface MainProps {
  theme: ColorThemeStyle;
  direction: 'row' | 'column';
}
const Main = styled.div<MainProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const PaneDiv = styled.div(
  ({ theme }) => `
  flex: 1;
  overflow: hidden;
  background-color: ${theme.sidebar.color};
  color: ${theme.sidebar.text};
  `
);

interface ResizerProps {
  theme: ColorThemeStyle;
  direction: 'row-resize' | 'col-resize';
}
const Separator = styled.div<ResizerProps>`
  border: 5px solid black;
  cursor: ${(props) => props.direction};
  width: 20px;
  background-color: black;
`;

export type PanelDirection = 'vertical' | 'horizontal';

type Props = {
  children: JSX.Element[];
  direction: PanelDirection;
};

const SplitPane: React.FC<Props> = ({ children, direction = 'vertical' }) => {
  const { getCurrentColorThemeStyle } = useColorTheme();
  const theme = getCurrentColorThemeStyle();
  const { position, setPosition } = React.useContext(
    SplitPaneContext
  ) as SplitPaneContextType;
  const separatorPosition = React.useRef<number | null>(null);
  const splitPaneRef = React.createRef<HTMLDivElement>();
  const dragging = React.useRef<boolean>(false);

  console.log('position', position);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    if (separatorPosition) {
      console.log('mouse down and passing events');
      if (direction === 'vertical') {
        separatorPosition.current = e.clientY;
      } else {
        separatorPosition.current = e.clientX;
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    console.log('mouse is moving');

    if (direction === 'vertical') {
      console.log('set position function', setPosition);
      if (separatorPosition && separatorPosition.current) {
        const newTopHeight = e.clientY - separatorPosition.current;
        console.log('newTopHeight', newTopHeight);
        separatorPosition.current = e.clientY;
        setPosition(newTopHeight);
      }
    } else {
      if (separatorPosition && separatorPosition.current) {
        const newTopWidth = position + e.clientX - separatorPosition.current;
        separatorPosition.current = e.clientX;
        setPosition(newTopWidth);
      }
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    if (separatorPosition && separatorPosition.current) {
      separatorPosition.current = null;
    }
  };

  useEffect(() => {
    console.log('separation.position', separatorPosition);
  }, [separatorPosition]);

  useEffect(() => {
    console.log('base position', position);
  }, [position]);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <Main
      ref={splitPaneRef}
      direction={direction === 'vertical' ? 'column' : 'row'}
      theme={theme}
    >
      <SplitContextProvider>
        <PaneOne contents={children[0]} direction={direction} />
        <Separator
          onMouseDown={onMouseDown}
          theme={theme}
          direction={direction === 'vertical' ? 'row-resize' : 'col-resize'}
        />
        <PaneTwo contents={children[1]} />
      </SplitContextProvider>
    </Main>
  );
};

export type PaneProps = {
  contents: JSX.Element;
  direction?: PanelDirection;
};

export const PaneOne: React.FC<PaneProps> = ({ contents, direction }) => {
  const paneRef = React.createRef<HTMLDivElement>();
  const { position, setPosition } = React.useContext(
    SplitPaneContext
  ) as SplitPaneContextType;
  console.log('paneone. position', position);

  useEffect(() => {
    console.log('pane one resize', position);
    if (!position && paneRef && paneRef.current) {
      setPosition(paneRef.current.clientHeight);
      paneRef.current.style.flex = 'none';
      return;
    }

    if (paneRef && paneRef.current) {
      console.log('resizing');
      if (direction === 'vertical') {
        paneRef.current.style.height = `${position}px`;
      } else {
        paneRef.current.style.width = `${position}px`;
      }
    }
  }, [position]);

  return <PaneDiv ref={paneRef}>{contents}</PaneDiv>;
};

export const PaneTwo: React.FC<PaneProps> = ({ contents }) => {
  return <PaneDiv>{contents}</PaneDiv>;
};

export default SplitPane;
