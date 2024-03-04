// @ts-nocheck

import React, { useMemo } from 'react';
import { CrudFilter, useList } from '@refinedev/core';
import dayjs from 'dayjs';
import Stats from '../../components/dashboard/Stats';
import { ResponsiveAreaChart } from '../../components/dashboard/ResponsiveAreaChart';
import { ResponsiveBarChart } from '../../components/dashboard/ResponsiveBarChart';
import { TabView } from '../../components/dashboard/TabView';
import { RecentSales } from '../../components/dashboard/RecentSales';
import { IChartDatum, TTab } from '../../interfaces';
import { ResponsiveLineChart } from '../../components/dashboard/ResponsiveLineChart';
import { ChartDate } from '../../components/dashboard/ChartDate';

const filters: CrudFilter[] = [
  {
    field: 'start',
    operator: 'eq',
    value: dayjs()?.subtract(7, 'days')?.startOf('day'),
  },
  {
    field: 'end',
    operator: 'eq',
    value: dayjs().startOf('day'),
  },
];

export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: 'dailyRevenue',
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: 'dailyOrders',
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: 'newCustomers',
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat('en-US', {
          month: 'short',
          year: 'numeric',
          day: 'numeric',
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  const tabs: TTab[] = [
    {
      id: 1,
      label: 'Online store sessions',
      data: { current: '255,581', change: 9 },
      content: (
        <div>
          <ResponsiveLineChart
            kpi='Daily revenue'
            data={memoizedRevenueData}
            colors={{
              stroke: 'rgb(54, 162, 235)',
              fill: 'rgba(54, 162, 235, 0.2)',
            }}
          />
          <ChartDate />
        </div>
      ),
    },
    {
      id: 2,
      label: 'Net return value',
      data: { current: '-$1,507.44', change: 14 },
      content: (
        <ResponsiveBarChart
          kpi='Daily orders'
          data={memoizedOrdersData}
          colors={{
            stroke: 'rgb(255, 159, 64)',
            fill: 'rgba(255, 159, 64, 0.7)',
          }}
        />
      ),
    },
    {
      id: 3,
      label: 'Total orders',
      data: { current: '-$10,511', change: 2 },
      content: (
        <ResponsiveAreaChart
          kpi='New customers'
          data={memoizedNewCustomersData}
          colors={{
            stroke: 'rgb(76, 175, 80)',
            fill: 'rgba(54, 162, 235, 0.2)',
          }}
        />
      ),
    },
    {
      id: 4,
      label: 'Conversion rate',
      data: { current: '3.18%', change: 7 },
      content: (
        <ResponsiveAreaChart
          kpi='New customers'
          data={memoizedNewCustomersData}
          colors={{
            stroke: 'rgb(76, 175, 80)',
            fill: 'rgba(54, 162, 235, 0.2)',
          }}
        />
      ),
    },
  ];

  return (
    <>
      {/* <Stats
        dailyRevenue={dailyRevenue}
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
      /> */}
      <TabView tabs={tabs} />
      <RecentSales />
    </>
  );
};
