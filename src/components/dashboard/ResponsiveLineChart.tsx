// @ts-nocheck

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  LineChart,
  Legend,
  Line,
} from 'recharts';
import { ChartTooltip } from '../../components/dashboard/ChartTooltip';
import { IChartDatum } from '../../interfaces';

type TResponsiveLineChartProps = {
  kpi: string;
  data: IChartDatum[];
  colors: {
    stroke: string;
    fill: string;
  };
};

export const ResponsiveLineChart = ({
  kpi,
  // data,
  colors,
}: TResponsiveLineChartProps) => {
  const data = [
    { date: 'Oct 2022', value: 20000, bgValue: 22000 },
    { date: 'Dec 2022', value: 18000, bgValue: 12000 },
    { date: 'Feb 2023', value: 19000, bgValue: 12000 },
    { date: 'Apr 2023', value: 18000, bgValue: 12000 },
    { date: 'Jun 2023', value: 22500, bgValue: 22500 },
    { date: 'Aug 2023', value: 15000, bgValue: 12000 },
    { date: 'Oct 2023', value: 23000, bgValue: 22000 },
    { date: 'Dec 2023', value: 32000, bgValue: 32000 },
    { date: 'Jan 2024', value: 18000, bgValue: 12000 },
  ];

  const YTickFormatter = (number) => {
    return (number / 1000).toString() + 'K';
  };

  return (
    <ResponsiveContainer height={400}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickMargin={12}
          unit=''
        />
        <YAxis
          type='number'
          tickFormatter={YTickFormatter}
          domain={[0, 40000]}
          tickCount={3}
          axisLine={false}
          tickMargin={12}
        />
        <Tooltip />
        <Line
          dot={false}
          type='bumpX'
          dataKey='value'
          stroke='#65b8eb'
          strokeWidth={3}
        />
        <Line
          activeDot={false}
          dot={false}
          type='bumpX'
          dataKey='bgValue'
          stroke='#65b8eb'
          strokeWidth={3}
          strokeDasharray='4'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

{
  /* <AreaChart
        data={data}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='0 0 0' />
        <XAxis
          dataKey='date'
          tickCount={data?.length ?? 0}
          tick={{
            stroke: 'light-grey',
            strokeWidth: 0.5,
            fontSize: '12px',
          }}
        />
        <YAxis
          tickCount={13}
          tick={{
            stroke: 'light-grey',
            strokeWidth: 0.5,
            fontSize: '12px',
          }}
          interval='preserveStartEnd'
          domain={[0, 'dataMax + 10']}
        />
        <Tooltip
          content={<ChartTooltip kpi={kpi} colors={colors} />}
          wrapperStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '0 solid #000',
            borderRadius: '10px',
          }}
        />
        <Area
          type='monotone'
          dataKey='value'
          stroke={colors?.stroke}
          strokeWidth={3}
          fill={colors?.fill}
          dot={{
            stroke: colors?.stroke,
            strokeWidth: 3,
          }}
        />
      </AreaChart> */
}
