import React from 'react';
import Cpu from './Cpu';
import Mem from './Mem';
import Info from './Info';
import '../widget.css';

const Widget = ({ data }) => {
    const { freeMem, totalMem, usedMem, memUsage, osType, upTime, cpuModel, numCores, cpuLoad, macA, cpuSpeed, isActive } = data;
    const cpuWidgetId = `cpu-widget-${macA}`;
    const memWidgetId = `mem-widget-${macA}`;
    const cpu = { cpuLoad, cpuWidgetId };
    const mem = { totalMem, usedMem, memUsage, freeMem, memWidgetId }
    const info = { macA, upTime, cpuModel, osType, numCores, cpuSpeed }
    let notActiveDiv = '';
    if (!isActive) {
        notActiveDiv = <div className="not-active">Offline</div>
    }


    return (
        <div className="widget col-sm-12">
            {notActiveDiv}
            <Cpu cpu={cpu} />
            <Mem mem={mem} />
            <Info info={info} />
        </div>
    )
}

export default Widget;
