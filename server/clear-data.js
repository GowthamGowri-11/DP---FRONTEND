// Clear all data except admin
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');
const Property = require('./models/Property');

const clearData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Atlas');

    // Clear only users and properties, keep admin
    await User.deleteMany({});
    await Property.deleteMany({});
    
    console.log('✓ Cleared all users and properties');
    console.log('✓ Admin account preserved');
    console.log('\nYou can now add fresh property data!');

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

clearData();
