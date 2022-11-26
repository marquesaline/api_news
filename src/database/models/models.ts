import mongoose from 'mongoose';
import NewsSchema from './newsSchema';

export default mongoose.model('news', NewsSchema);