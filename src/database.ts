// IMPORT MODULES
import db from 'mongoose';


const connect = async () => {
    try {
        db.connect(process.env.URL_DB || 'mongodb://localhost:27017/blog', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Database is connected`)
    } catch (err) {
        console.error('[ERROR_DB]', err)
    }
}

export default connect;
