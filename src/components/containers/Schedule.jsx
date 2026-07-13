import React, { Fragment, useCallback, useState } from 'react';
import { getSchedule } from '../../api/anilist';
import { useAsync } from '../../hooks/useAnime';
import ScheduleCard from '../cards/ScheduleCard';
import ScheduleHeading from '../headings/ScheduleHeading';

const DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

// JS weeks start on Sunday; ours start on Monday.
const todayIndex = () => (new Date().getDay() + 6) % 7;

const Schedule = () => {
  const [dayIndex, setDayIndex] = useState(todayIndex);

  const fetchSchedule = useCallback(() => getSchedule(dayIndex), [dayIndex]);
  const { data: airing, loading, error } = useAsync(fetchSchedule, [dayIndex]);

  return (
    <Fragment>
      <section className='mt-8 mx-2'>
        <ScheduleHeading
          dayIndex={dayIndex}
          setDayIndex={setDayIndex}
          days={DAYS}
        />
      </section>

      <section>
        {loading && <p className='mx-2 my-4 text-gray-400'>Loading schedule…</p>}

        {error && (
          <p className='mx-2 my-4 text-gray-400'>Could not load the schedule.</p>
        )}

        {!loading && !error && airing?.length === 0 && (
          <p className='mx-2 my-4 text-gray-400'>
            Nothing airing on {DAYS[dayIndex]}.
          </p>
        )}

        {!loading &&
          airing?.map((anime) => (
            <ScheduleCard
              key={`${anime.id}-${anime.airingEpisode}`}
              id={anime.id}
              name={anime.name}
              airTime={anime.airTime}
              numOfEpisode={anime.airingEpisode}
            />
          ))}
      </section>
    </Fragment>
  );
};

export default Schedule;
