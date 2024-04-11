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

  <div class="flex space-x-8 py-6">
    <div class="flex flex-col rounded-md border border-gray-300 hover:border-green-500 hover:shadow-lg w-[400px] h-[150px] p-8 justify-center">
        <h2 class="text-lg font-semibold text-gray-800">Total Miles Driven</h2>
        <p class="text-gray-600 mt-3 text-xl">{totalMiles} miles</p>
    </div>
    <div class="flex flex-col rounded-md border border-gray-300 hover:border-green-500 hover:shadow-lg w-[400px] h-[150px] p-8 justify-center">
        <h2 class="text-lg font-semibold text-gray-800">Filtered Miles Driven</h2>
        <p class="text-gray-600 mt-3 text-xl">{filteredMiles} miles</p>
    </div>
</div>

  <Table handleTotalMiles = {handleTotalMiles} handleFilteredMiles = {handleFilteredMiles}/>
</div>
</div>
  )
}

export default Products