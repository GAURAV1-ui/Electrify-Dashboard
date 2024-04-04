import Vechile from '../models/model.vechileSchema.js';

export const addVechile = async (req,res) => {
   
   try{
    const {licensePlate,
        make,
        vin,
        model, 
        type,
        date,
        milesDriven
    } = req.body;
    console.log(req.body);

    const vechile = new Vechile(
    {
        licensePlate,
        make,
        vin,
        model,
        type,
        date,
        milesDriven
      }
);

const savedVechile = await vechile.save();
return res.json(savedVechile);
   } catch(error) {
    console.log(error);
   }
}

export const getVechile = async (req,res) => {
    try{
        const vechileData = await Vechile.find();
        console.log(vechileData);
        return res.json(vechileData);
    } catch(error) {
        console.log(error);
    }
   
}
