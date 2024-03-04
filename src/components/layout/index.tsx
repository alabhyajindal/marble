import { PropsWithChildren } from 'react';
import { Breadcrumb } from '../breadcrumb';
import { Menu } from '../menu';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-full bg-zinc-100 px-12 pt-8'>
      <div>{children}</div>
    </div>
  );
};
