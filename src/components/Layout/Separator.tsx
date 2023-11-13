import { FC } from 'react';

// See how to do in TS to pick at least one of the two props
interface SeparatorProps {
  width?: number;
  height?: number;
}

export const Separator: FC<SeparatorProps> = ({ width, height }) => {
  return <div style={{ width: width, height: height }} />;
};
