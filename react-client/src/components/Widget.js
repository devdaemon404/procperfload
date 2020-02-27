import React from 'react';
import Cpu from './Cpu';
import Mem from './Mem';
import Info from './Info';
import '../widget.css';

const Widget = ({ data }) => {
    const { freeMem, totalMem, usedMem, memUsage, osType, upTime, cpuModel, numCores, cpuLoad, macA, cpuSpeed } = data;
    const cpu = { cpuLoad };
    const mem = { totalMem, usedMem, memUsage, freeMem }
    const info = { macA, upTime, cpuModel, osType, numCores, cpuSpeed }
    return (
        <div>
            <h1>Widget!!</h1>
            <Cpu cpu={cpu} />
            <Mem mem={mem} />
            <Info info={info} />
        </div>
    )
}

export default Widget;
