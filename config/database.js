import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO)
  .then(() => console.log('database connected'))
  .catch(err => console.error(err));

  export default mongoose;