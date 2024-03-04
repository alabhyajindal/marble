export const ChartDate = ({}) => {
  return (
    <div className='flex gap-6 justify-end mt-4'>
      <div className='bg-gray-100 flex items-center gap-3 pl-4 pr-12 py-1 text-gray-500 text-sm rounded-md cursor-pointer hover:bg-gray-200'>
        <div className='w-4 h-1 bg-gradient-to-r from-blue-500 to-blue-300'></div>
        <p>Oct 1, 2022 - Feb 21, 2024</p>
      </div>{' '}
      <div className='bg-gray-100 flex items-center gap-3 pl-4 pr-12 py-1 text-gray-500 text-sm rounded-md cursor-pointer hover:bg-gray-200'>
        <div className='w-4 h-1 border-t-2 border-b-2 border-dashed border-blue-300'></div>
        <p>Oct 1, 2021 - Feb 21, 2023</p>
      </div>
    </div>
  );
};
