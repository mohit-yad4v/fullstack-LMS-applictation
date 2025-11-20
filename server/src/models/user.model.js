import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        role: {
            type: String,
            enum: ["instructor", "student"],
        },
        enrolledCourses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        photoUrl: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);

