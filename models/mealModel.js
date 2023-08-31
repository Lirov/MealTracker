const mongoose = require("mongoose");
// Defining a schema for the 'Meal' object in MongoDB.
const mealSchema = new mongoose.Schema({
name: {
type: String,
required: [true, "Please choose a name"],
},
time: String,
description: String,
day: {
type: String,
enum: [
"Sunday",
"Monday",
"Tuesday",
"Wedensday",
"Thursday",
"Friday",
"Saturday",
],
},
});
// Creating a Mongoose model named 'Meal' based on the schema.
const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
