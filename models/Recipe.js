import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  ingredients: {
    type: [String],
  },
  instructions: {
    type: String,
  },
  picture_link: {
    type: String,
  },
  title: {
    type: String,
  },
});

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);
