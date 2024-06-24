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

      <section className='flex flex-col gap-4 w-full md:flex-row'>
        {/* Main Section  */}
        <main className='w-full flex flex-col md:w-9/12'>
          <MainGrid />

          <NewRealise />

          <Schedule />
        </main>

        {/* Sidebar */}
        <aside className='md:w-3/12 mt-3'>
          <Sidebar />
        </aside>
      </section>
    </div>
  );
};

export default Home;
