import React from 'react'
import Header from '../components/Header'
import Products from './Products';

const Dashboard = () => {
  return (
    <>
    <div className='flex'>
      <Header/>
    <main className='grow'>
        <Products/>
    </main>
    </div>
   </>
  );

}

export default Dashboard