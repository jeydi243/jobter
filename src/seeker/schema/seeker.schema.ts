import * as mongoose from 'mongoose';

export const SeekerSchema = new mongoose.Schema({
    id: Number,
    loginId: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    resume: String,
    description: String,
    photo: String,
    skills: String,
    experience: String,
    createdAt: { type: Date, default: Date.now }
})