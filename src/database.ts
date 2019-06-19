import mongoose from 'mongoose';

const URI = 'mongodb://localhost/news';

mongoose.connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true
})
    .then(() => console.log('DB is connected'))

    .catch((err: Error) => {
        console.error(err);
    })

export default mongoose;