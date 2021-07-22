const mongoose = require('mongoose');


const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en DB');
    }


}


module.exports = {
    dbConnect
}