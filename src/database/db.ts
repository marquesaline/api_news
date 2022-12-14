import mongoose from 'mongoose';
import { DB_URL_LOCAL, DB_URL } from '../config/env';

class Database {
    private DB_URL_MOONGO = DB_URL_LOCAL;

    createConnection(){
        mongoose.connect(this.DB_URL_MOONGO);
    }
}

export default Database;