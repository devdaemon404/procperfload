const os = require('os');
const io = require('socket.io-client');
let socket = io('http://127.0.0.1:8181');
socket.on('connect', () => {
    // console.log("I connected to the socket server")
    const ni = os.networkInterfaces();
    let macA;
    for (let key in ni) {
        if (!ni[key][0].internal) {
            macA = ni[key][0].mac;
            break;
        }
    }
    socket.emit('clientAuth', '5fsfsdjeASDASDJaewwae34asd');

    let performanceDataInterval = setInterval(() => {
        performanceData().then((allperfdata) => {
            // console.log(allperfdata)
            socket.emit('perfData', allperfdata)
        })
    }, 1000);

    socket.on('disconnect', () => {
       
        clearInterval(performanceDataInterval);
    });
})
function performanceData() {
    return new Promise(async (resolve, reject) => {
        const osType = os.type();

        const upTime = os.uptime();

        const cpus = os.cpus();

        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        const usedMem = totalMem - freeMem;
        const memUsage = Math.floor(usedMem / totalMem * 100) / 100;

        const cpuModel = cpus[0].model;
        const numCores = cpus.length;
        // const cpuSpeed = cpus[0].speed;

        const cpuLoad = await getCpuLoad();
        resolve({
            freeMem,
            totalMem,
            usedMem,
            memUsage,
            osType,
            upTime,
            cpuModel,
            numCores,
            cpuLoad
        })
    })
}


function cpuAverage() {
    const cpus = os.cpus();
    let idleMs = 0;
    let totalMs = 0;
    cpus.forEach(aCore => {
        for (type in aCore.times) {
            totalMs += aCore.times[type];
        }
        idleMs += aCore.times.idle
    });
    return {
        idle: idleMs / cpus.length,
        total: totalMs / cpus.length
    }
}

function getCpuLoad() {
    return new Promise((resolve, reject) => {
        const start = cpuAverage();
        setTimeout(() => {
            const end = cpuAverage();
            const idleDiff = end.idle - start.idle;
            const totalDiff = end.total - start.total;
            // console.log(idleDiff, totalDiff)
            const percentage = 100 - Math.floor(100 * idleDiff / totalDiff);
            resolve(percentage)
        }, 100);
    });
}




