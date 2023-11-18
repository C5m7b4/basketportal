import React, { useState } from 'react';
import Tree from './Tree';
import { ITreeData, NodeType } from './types';
import { Plus, Minus, Server, Table, Column, SmallDatabase } from '../../svgs';

export interface TreeNodeProps {
  children: ITreeData[];
  label: string;
  type: NodeType;
}

const TreeNode: React.FC<{
  node: TreeNodeProps;
  onClick: (node: TreeNodeProps) => void;
}> = ({ node, onClick }) => {
  const { children, label, type } = node;
  const [showChildren, setShowChildren] = useState(true);

  const handleClick = () => {
    console.log('node clicked');
    setShowChildren(!showChildren);
    debugger;
    if (node.type === 'database') {
      onClick(node);
    }
  };

  return (
    <>
      <div onClick={() => handleClick()}>
        <span style={{ display: 'grid', gridTemplateColumns: '30px 1fr' }}>
          {type === 'server' ? <Server /> : null}
          {type === 'table' ? <Table /> : null}
          {type === 'database' ? <SmallDatabase /> : null}
          {label}
        </span>
      </div>
      <ul style={{ margin: 0 }}>
        {children.length > 0 && showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
};

export default TreeNode;
