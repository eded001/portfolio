declare module '@/components/ui/badge' {
  import { ReactNode } from 'react';

  interface BadgeProps {
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }

  export const Badge: React.FC<BadgeProps>;
}