import mongoose from 'mongoose';

import { app } from './app';
import config from './app/config';

const port = process.env.PORT || 5000;
async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(` Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
