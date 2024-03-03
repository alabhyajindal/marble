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
      onClick={clickHandler}
      className={`w-64 cursor-pointer hover:bg-gray-300 mx-1 rounded-md px-4 py-2 text-gray-700 ${
        isActive ? 'bg-gray-200' : ''
      }`}
    >
      <div className='flex items-center justify-between'>
        <p className='font-semibold border-b-2 border-spacing-2 border-dotted border-gray-400'>
          {label}
        </p>
        <PencilIcon fill='true' className='h-4 fill-gray-500' />
      </div>
      <div className='mt-2 flex items-center gap-4'>
        <p className='text-xl font-bold'>{data.current}</p>
        <div className='flex items-center -ml-2'>
          <img src='/caret-up-outline.svg' className='opacity-60 h-4' />
          <p className='text-sm text-gray-500'>{data.change}%</p>
        </div>
      </div>
    </div>
  );
};
