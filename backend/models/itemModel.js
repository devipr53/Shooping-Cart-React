import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema([{
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  
}]);

const itemModel = mongoose.model("Item", itemSchema);
export default itemModel;