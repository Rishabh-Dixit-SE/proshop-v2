import mongoose from 'mongoose';
/*to know that user is created and it is a part of user model */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},{timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;