export type NodeType =
  | 'server'
  | 'database'
  | 'table'
  | 'column'
  | 'folder'
  | 'file'
  | 'expandable';

export interface ITreeData {
  key: string;
  label: string;
  children: ITreeData[] | [];
  type: NodeType;
}
