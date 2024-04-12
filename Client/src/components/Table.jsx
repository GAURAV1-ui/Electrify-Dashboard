import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';

const Table = ({ handleTotalMiles, handleFilteredMiles }) => {
    const [allVechileData, setAllVechileData] = useState([]);
    const [vechileData, setVechileData] = useState([]);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);

    useEffect(() => {
        try {
            axios.get('https://electrify-dashboard-2.onrender.com/getvechile').then((response) => {
                setAllVechileData(response.data);
                console.log(response.data);
                setVechileData(response.data);
                handleFilteredMiles(response.data);
                handleTotalMiles(response.data);
            });
        } catch (error) {
            throw new Error('Something went wrong');
        }
    }, []);

    function convertDateFormat(dateString) {
        const parts = dateString.split('/');
        const month = parts[1].padStart(2, '0');
        const day = parts[2].padStart(2, '0');
        const year = parts[0];
        return `${year}/${month}/${day}`;
    }

    const handleSelect = async (date) => {
        setState([date.selection]);

        const vechileStartDate = date.selection.startDate.toLocaleDateString('zh-Hans-CN');
        const vechileEndDate = date.selection.endDate.toLocaleDateString('zh-Hans-CN');
        const start = convertDateFormat(vechileStartDate).toString();
        const end = convertDateFormat(vechileEndDate).toString();

        const filteredVechileData = allVechileData.filter((data) => {
            return data.date >= start && data.date <= end;
        });
        setVechileData(filteredVechileData);
        handleFilteredMiles(filteredVechileData);
    };

    const clearHandler = () => {
      setState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
      ]);
     setVechileData(allVechileData);
    }

    return (
        <div className="max-w-screen-lg">
            {showDateRangePicker && (
                <DateRangePicker
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    direction="horizontal"
                    ranges={state}
                    onChange={handleSelect}
                />
            )}
            <div className='flex justify-between'>
            <h1 className="mb-2 text-xl font-bold pl-4">Vehicles Data</h1>
            <div className='flex gap-2'>
            <button 
              className='block sm-2 px-8 py-1 mr-4 rounded bg-[#50C878] text-white hover:bg-[#4ce07d]'
              onClick={clearHandler}
              >
              Clear
            </button>
            <button
                className="block sm-2 px-2 py-1 mr-4 rounded bg-[#50C878] text-white hover:bg-[#4ce07d]"
                onClick={() => setShowDateRangePicker(!showDateRangePicker)}
            >
                {showDateRangePicker ? 'Close Date Filter' : 'Open Date Filter'}
            </button>
            </div>
            </div>
            <div className="overflow-x-auto rounded-lg bg-white p-4">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-[#50C878] text-white">
                        <tr>
                            <th className="border p-2">License Plate</th>
                            <th className="border p-2">Make</th>
                            <th className="border p-2">Model</th>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">VIN</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Miles Driven</th>
                        </tr>
                    </thead>
                    {vechileData.length > 0 ? (
                        <tbody>
                            {vechileData.map((data) => (
                                <tr key={data._id}>
                                    <td className="border p-2 text-center">{data.licensePlate}</td>
                                    <td className="border p-2 text-center">{data.make}</td>
                                    <td className="border p-2 text-center">{data.model}</td>
                                    <td className="border p-2 text-center">{data.type}</td>
                                    <td className="border p-2 text-center">{data.vin}</td>
                                    <td className="border p-2 text-center">{data.date}</td>
                                    <td className="border p-2 text-center">{data.milesDriven}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td className="border p-2" colSpan="7">
                                    <div className="flex justify-center">
                                        <h1 className="text-center font-bold">No data found...</h1>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Table;
