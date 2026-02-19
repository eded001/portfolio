import { ReactNode } from 'react';

export interface CardProps {
    children?: ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps>;
export const CardHeader: React.FC<CardProps>;
export const CardTitle: React.FC<CardProps>;
export const CardContent: React.FC<CardProps>;
export const CardDescription: React.FC<CardProps>;