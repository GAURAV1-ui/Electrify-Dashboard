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
return res.status(201).json(savedVechile);
} catch (error) {
console.log(error);
return res.status(500).json({ error: "Internal Server Error" });
}
}

    export const getVechile = async (req, res) => {
        try {
            const vechileData = await Vechile.find();
            if (!vechileData) {
                return res.status(404).json({ error: "No vehicle data found" });
            }
            return res.status(200).json(vechileData);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
