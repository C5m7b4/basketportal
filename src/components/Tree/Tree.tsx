import React from 'react';
import TreeNode from './TreeNode';
import { ITreeData } from './types';
import { TreeNodeProps } from './TreeNode';

const Tree: React.FC<{
  treeData: ITreeData[];
  onClick: (node: TreeNodeProps) => void;
}> = ({ treeData, onClick }) => {
  const handleNodeClick = (node: TreeNodeProps) => {
    if (onClick) {
      onClick(node);
    } else {
      console.log('could not find an onlick event to process');
    }
  };

  return (
    <div style={{ padding: '5px', width: '100%' }}>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} onClick={handleNodeClick} />
      ))}
    </div>
  );
};

export default Tree;
