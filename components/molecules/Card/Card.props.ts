import { DetailedHTMLProps, HTMLAttributes, PropsWithoutRef } from 'react';

export interface ICardProps extends PropsWithoutRef<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  align?: 'start' | 'center';
}
