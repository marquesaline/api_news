import mongoose from 'mongoose';
import { DB_URL } from '../config/env';

class Database {
    private DB_URL_MOONGO = DB_URL;

    createConnection(){
        mongoose.connect(this.DB_URL_MOONGO);
    }
}

export default Database;