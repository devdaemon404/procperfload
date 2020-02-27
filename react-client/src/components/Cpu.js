import React from 'react'
import drawCircle from '../utilities/canvasLoadAnimation';

const Cpu = ({ cpu: { cpuLoad } }) => {
    const canvas = document.querySelector('.canvas');
    drawCircle(canvas, cpuLoad);
    return (
        <div className="col-sm-3 cpu">
            <h3>CPU Load</h3>
            <div className="canvas-wrapper">
                <canvas className="canvas" width="200" height="200"></canvas>
                <div className="cpu-text">{cpuLoad}%</div>
            </div>
        </div>
    )
}

export default Cpu;
