import mongoose, {Schema} from 'mongoose';

const vechileSchema = new Schema({
        licensePlate: {
            type: String,
            required: true
          },
          make: {
            type: String,
            required: true
          },
          vin: {
            type: String,
            required: true,
            unique: true
          },
          model: {
            type: String,
            required: true
          },
          type: {
            type: String,
            required: true
          },
          date: {
            type: String,
            required: true
          },
          milesDriven: {
            type: Number,
            required: true
          }
          
    },
    {
        timestamps: true,
    }
);

const Vechile = mongoose.model('Vechile', vechileSchema)

export default Vechile;