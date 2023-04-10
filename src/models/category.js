import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
    {
        name: String,
        products: [{ type: mongoose.Types.ObjectId, ref: "product" }]
    },
    {
        timestamps: true, versionKey: false //Tự động tạo ra thời gian,bỏ  version
    }
);

export default mongoose.model("Category", categorySchema);