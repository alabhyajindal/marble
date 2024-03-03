// @ts-nocheck

import React, { useState } from 'react';
import { TabItem } from './TabItem';
import { TabPanel } from './TabPanel';
import { TTab } from '../../interfaces';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type TTabViewProps = {
  tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapse() {
    setIsCollapsed((c) => !c);
  }

  return (
    <div className='mx-auto py-4 bg-slate-50 border rounded-lg drop-shadow-md'>
      <div className='tabs mx-4 items-center'>
        {tabs?.map((tab: TTab, index: number) => (
          <TabItem
            key={tab?.id}
            label={tab?.label}
            data={tab?.data}
            isActive={index === activeTab}
            clickHandler={() => setActiveTab(index)}
          />
        ))}
        <div
          onClick={toggleCollapse}
          className='cursor-pointer ml-4 h-4 hover:bg-gray-300 p-3 flex items-center rounded-md'
        >
          {isCollapsed ? (
            <ChevronUpIcon className='h-4 stroke-gray-600' />
          ) : (
            <ChevronDownIcon className='h-4 stroke-gray-600' />
          )}
        </div>
      </div>
      <div className={`${isCollapsed ? 'hidden' : ''}`}>
        {tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
