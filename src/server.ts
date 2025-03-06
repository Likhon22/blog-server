import mongoose from 'mongoose';
import { Server } from 'http';
import { app } from './app';
import config from './app/config';
let server: Server;
const port = process.env.PORT || 5000;
async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('Connected to MongoDB');
    server = app.listen(port, () => {
      console.log(` Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
