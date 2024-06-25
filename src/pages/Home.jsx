import React from 'react';

import SliderComponent from '../components/containers/Slider';

import MainGrid from '../components/containers/MainGrid';
import NewRealise from '../components/containers/NewRealise';
import Schedule from '../components/containers/Schedule';
import Sidebar from '../components/sidebars/Sidebar';

const Home = () => {
  return (
    <div className='container'>
      {/* Slider  */}
      <SliderComponent />

      <section className='flex flex-col gap-4 max-w-full lg:flex-row'>
        {/* Main Section  */}
        <main className='max-w-full flex flex-col flex-1'>
          <MainGrid />

          <NewRealise />

          <Schedule />
        </main>

        {/* Sidebar */}
        <aside className='mt-3 basis-[30%]'>
          <Sidebar />
        </aside>
      </section>
    </div>
  );
};

export default Home;
