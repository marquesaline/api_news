import dotenv from 'dotenv';

dotenv.config();

export const DB_URL_LOCAL: string = process.env.DB_URL_LOCALHOST ?? '';


export const DB_URL: string = process.env.DB_URL_CONTAINER ?? '';