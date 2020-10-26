const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    usermail: {type: String, required: true},
    password: {type: String, required: true, minlength: 5, maxlength: 20},
    registred_date: {type: Date, default: Date.now},
    confirmation_code: {type: String, default: ""},
    status: {type: String, enum:["Under validation", "Registred", "Being deleted", "Deleted", "Banished"], default: "Under validation"}
})

// Virtual for some infos of user 
UserSchema
.virtual("infos")
.get(() => {
    return `${this.usermail} create account the ${this.registred_date} and is ${this.status}`;
})


module.exports = mongoose.model("User", UserSchema);
