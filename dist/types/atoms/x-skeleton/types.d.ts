export type XSkeletonShape = 'rounded' | 'circle' | 'rect';
export type XSkeletonAnimation = 'shimmer' | 'pulse' | 'none';

export interface XSkeletonProps {
  shape?: XSkeletonShape;
  animation?: XSkeletonAnimation;
  width?: string | number;
  height?: string | number;
  delay?: string;
}
