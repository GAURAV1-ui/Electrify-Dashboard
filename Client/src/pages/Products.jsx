import Table from '../components/Table'
import React, { useState } from 'react'

const Products = () => {

  const [filteredMiles, setFilteredMiles] = useState(0);
  const [totalMiles, setTotalMiles] = useState(0);

  const handleTotalMiles = (miles) => {
        const mile = miles.reduce((acc, curr) => acc + curr.milesDriven, 0);
        setTotalMiles(mile);
  }
  const handleFilteredMiles = (miles) => {
    const mile = miles.reduce((acc, curr) => acc + curr.milesDriven, 0);
    setFilteredMiles(mile);
  }
  return (
    <div className='grid-template-columns: repeat(2, minmax(0, 3fr))'>
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
  <h2 className='text-xl font-bold'>Dashboard</h2>

  <div className="flex space-x-8 py-6">
    <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
      <h2>Total Miles Driven</h2>
      <p className="text-gray-500 mt-3">- {totalMiles} miles</p>
    </div>
    <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
      <h2>Filtered Miles Driven</h2>
      <p className="text-gray-500 mt-3"> - {filteredMiles} miles</p>
    </div>
  </div>
  <Table handleTotalMiles = {handleTotalMiles} handleFilteredMiles = {handleFilteredMiles}/>
</div>
</div>
  )
}

export default Products