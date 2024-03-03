// @ts-nocheck

import { PencilIcon } from '@heroicons/react/24/solid';
import React from 'react';

type TTabItem = {
  label: string;
  isActive: boolean;
  clickHandler: () => void;
};
export const TabItem = ({ label, data, isActive, clickHandler }: TTabItem) => {
  // console.log(data);
  console.log(isActive);

  return (
    <div
      className={`w-64 cursor-pointer hover:bg-gray-300 mx-1 rounded-md px-4 py-2 text-gray-600 ${
        isActive ? 'bg-gray-200' : ''
      }`}
    >
      <div className='flex items-center justify-between'>
        <a className='font-semibold' onClick={clickHandler}>
          {label}
        </a>
        <PencilIcon fill='true' className='h-4 fill-gray-500' />
      </div>
      <div className='mt-2 flex items-center gap-4'>
        <p className='text-xl font-bold'>{data.current}</p>
        <p className='text-sm'>{data.change}%</p>
      </div>
    </div>
  );
};
