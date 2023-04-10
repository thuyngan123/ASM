import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'
const productSchema = mongoose.Schema(
    {
        // _id: Number,
        Name: String,
        Price: Number,
        images: Object,
        Description: String,
        // CategoryId: String,
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category"


        },
    },
    {
        timestamps: true, versonKey: false
    })
productSchema.plugin(mongoosePaginate)
export default mongoose.model("Product", productSchema)