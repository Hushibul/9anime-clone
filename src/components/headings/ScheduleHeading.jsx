import { useCallback, useEffect, useState } from 'react';

const ScheduleHeading = () => {
  const weekArray = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  const [time, setTime] = useState('');

  const checkTime = useCallback((i) => {
    return i < 10 ? '0' + i : i;
  }, []);

  const startTime = useCallback(() => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    setTime(h + ':' + m + ':' + s);
  }, [checkTime]);

  useEffect(() => {
    const timer = setTimeout(startTime, 1000);
    return () => clearTimeout(timer);
  }, [startTime]);

  return (
    <div className='flex flex-col justify-center items-center bg-neutral-900 rounded-md'>
      <h4 className='mt-6 text-[22px] text-gray-200 font-medium'>
        Estimated Schedule
      </h4>
      <h6 className='mb-3 text-gray-600 text-base'>
        Now:{' '}
        {`${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()} ${time}`}
      </h6>
      <div className='flex items-center justify-between w-full px-4'>
        {weekArray.map((item, index) => (
          <h1
            key={index}
            className='text-5xl pb-5 text-gray-600 hover:text-gray-500 hover:border-b-2 hover:border-gray-500'
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ScheduleHeading;
