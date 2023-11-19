import React, { useState } from 'react';
import Tree from './Tree';
import { ITreeData, NodeType } from './types';
import { Server, Table, Column, SmallDatabase } from '../../svgs';

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
  const [showChildren, setShowChildren] = useState(
    node.type == 'server' ? true : false
  );

  const handleClick = () => {
    console.log('node clicked');
    setShowChildren(!showChildren);
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
          {type === 'column' ? <Column /> : null}
          {label}
        </span>
      </div>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {children.length > 0 && showChildren && (
          <Tree treeData={children} onClick={onClick} />
        )}
      </ul>
    </>
  );
};

export default TreeNode;
