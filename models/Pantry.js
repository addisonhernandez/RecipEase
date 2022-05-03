import mongoose from 'mongoose';

const PantrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this item.'],
  },
  quantity: {
    amount: {
      type: Number,
      required: [true, 'Please provide the amount of this item.'],
    },
    unit: {
      type: String,
      required: [true, 'Please provide the unit of measurement.'],
    },
  },
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
