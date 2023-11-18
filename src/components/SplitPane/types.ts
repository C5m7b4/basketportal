import React from 'react';

export interface HTMLElementProps {
  title?: string;
  style?: React.CSSProperties;
  className?: string;
  role?: string;
}

export interface IAxis {
  x: number;
  y: number;
}

export interface ICacheSizes {
  sizes: (string | number)[];
  sashPosSizes: (string | number)[];
}

export interface ISplitProps extends HTMLElementProps {
  children: JSX.Element[];
  allowResize?: boolean;
  split?: 'vertical' | 'horizontal';
  sizes: (string | number)[];
  sashRender: (index: number, active: boolean) => React.ReactNode;
  onChange: (sizes: number[]) => void;
  onDragStart?: (e: MouseEvent) => void;
  onDragEnd?: (e: MouseEvent) => void;
  className?: string;
  sashClassName?: string;
  performanceMode?: boolean;
  resizerSize?: number;
}

export interface ISashProps {
  className?: string;
  style: React.CSSProperties;
  render: (active: boolean) => void;
  onDragStart: React.MouseEventHandler<HTMLDivElement>;
  onDragging: React.MouseEventHandler<HTMLDivElement>;
  onDragEnd: React.MouseEventHandler<HTMLDivElement>;
}

export interface ISashContentProps {
  className?: string;
  type?: string;
  active?: boolean;
  children?: JSX.Element[];
}

export interface IPaneConfigs {
  maxSize?: number | string;
  minSize?: number | string;
}
