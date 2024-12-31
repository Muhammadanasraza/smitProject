import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    eligibilty: String,
    duration: String,
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //to get trainer id if login as trainer
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], //to get student id
  },
  { timestamps: true }
);

export const CourseModal =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
