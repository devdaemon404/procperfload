const connectDB = require('./config/db');
const Machine = require('./models/Machine')
connectDB();
const socketMain = (io, socket) => {
    let macA;
    // console.log(`A socket connected :${socket.id}`)
    socket.on('clientAuth', (key) => {
        if (key === '5fsfsdjeASDASDJaewwae34asd') {
            socket.join('clients');
        } else if (key = 'akjsdkjk232asDDS') {
            socket.join('ui');
        } else {
            socket.disconnect(true);
        }
    });

    socket.on('initPerfData', (async (data) => {
        macA = data.macA;
        const mongooseResponse = await checkAndAdd(data);
        console.log(mongooseResponse);
    }))
    socket.on('perfData', (data => {
        console.log(data);
    }))
}

const checkAndAdd = async (data) => {
    try {
        let machine = await Machine.findOne({ macA: data.macA });
        if (machine !== null) {
            return 'found';
        }
        machine = new Machine(data);
        await machine.save();
        return 'added';
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

module.exports = socketMain; 