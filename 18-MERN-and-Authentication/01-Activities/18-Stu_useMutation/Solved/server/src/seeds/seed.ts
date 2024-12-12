import db from '../config/connection.js';
import { Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';

import thoughtData from './thoughtSeeds.json' assert { type: 'json' };

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    // bulk create each model
    await Thought.insertMany(thoughtData);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
