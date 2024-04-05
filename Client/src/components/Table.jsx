import React,{useEffect,useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios'

const Table = () => {

    const [datas, setDatas] = useState([]);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
    const [miles, setMiles] = useState();

    useEffect(()=>{
        try{
            axios.get('http://localhost:8000/getvechile')
            .then((response)=> {
                setDatas(response.data);
            });

        } catch(error) {
            console.log(error);
        }

    },[]);

    console.log(state);

  return (  
     <div>
       <DateRangePicker
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
/>;
    <h1 class="mb-2 text-2xl font-bold pl-4">Vechiles Data</h1>
   <div class="overflow-x-auto rounded-lg bg-white p-4">

     <table class="min-w-full border-collapse border border-gray-200">
       <thead class="bg-[#FF8C8C] text-white">
         <tr>
           <th class="border p-2">License Plate</th>
           <th class="border p-2">Make</th>
           <th class="border p-2">Model</th>
           <th class="border p-2">Type</th>
           <th class="border p-2">VIN</th>
           <th class="border p-2">Date</th>
           <th class="border p-2">Miles Driven</th>
         </tr>
       </thead>
       <tbody class="">
        {datas.map((data)=>{
            // console.log(data);
        return(
         <tr>
           <td class="border p-2 text-center">{data.
licensePlate}</td>
           <td class="border p-2 text-center">{data.
make}</td>
           <td class="border p-2 text-center">{data.model}</td>
           <td class="border p-2 text-center">{data.type}</td>
           <td class="border p-2 text-center">{data.vin}</td>
           <td class="border p-2 text-center">{data.date}</td>
           <td class="border p-2 text-center">{data.
milesDriven}</td>
         </tr>
        )
        })}
       </tbody>
     </table>
   </div>
 </div>

  )
}

export default Table