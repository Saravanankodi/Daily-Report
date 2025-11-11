// backend/src/utils/seedAdmin.ts

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const adminEmail = 'admin@example.com';
const adminPassword = 'admin123';
const userEmail = 'user@example.com';
const userPassword = 'user123';

const seedUsers = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB Atlas');

    // Clear existing users (optional - remove if you don't want to delete old ones)
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedAdminPass = await bcrypt.hash(adminPassword, salt);
    const hashedUserPass = await bcrypt.hash(userPassword, salt);

    // Create users
    const admin = await User.create({
      email: adminEmail,
      password: hashedAdminPass,
      role: 'admin'
    });

    const user = await User.create({
      email: userEmail,
      password: hashedUserPass,
      role: 'user'
    });

    console.log('Users created successfully!');
    console.log(`Admin: ${admin.email} (Role: ${admin.role})`);
    console.log(`User: ${user.email} (Role: ${user.role})`);
    console.log('');
    console.log('Login Credentials:');
    console.log(`Admin → ${adminEmail} / ${adminPassword}`);
    console.log(`User  → ${userEmail} / ${userPassword}`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();