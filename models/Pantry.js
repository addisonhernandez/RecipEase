import mongoose from 'mongoose';

const PantrySchema = new mongoose.Schema({
  food: {
    type: String,
    required: [true, 'Please provide a name for this item.'],
  },
  text: String,
  quantity: {
    type: Number,
    required: [true, 'Please provide the amount of this item.'],
  },
  measure: {
    type: String,
    required: [true, 'Please provide the unit of measurement.'],
  },
  weight: Number,
  foodCategory: String,
  Image: String,
  date_added: {
    type: Date,
    default: Date.now,
  },
  expiration: {
    type: Date,
  },
  // TODO: an array of recipes this item is in?
});

export default mongoose.models.Pantry || mongoose.model('Pantry', PantrySchema);
