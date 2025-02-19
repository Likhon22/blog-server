import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Server } from 'http';
import { app } from './app';
import config from './app/config';
let server: Server;
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    server = app.listen(config.port, () => {
      console.log(` Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
