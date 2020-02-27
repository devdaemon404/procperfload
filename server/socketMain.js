const socketMain = (io, socket) => {
    // console.log(`A socket connected :${socket.id}`)
    socket.on('clientAuth', (key) => {
        if (key === '5fsfsdjeASDASDJaewwae34asd') {
            socket.join('clients');
        } else if (key = 'akjsdkjk232asDDS') {
            socket.join('ui');
        } else {
            socket.disconnect(true);
        }
    })
    socket.on('perfData', (data => {
        console.log(data);
    }))
}

module.exports = socketMain; 