import React from 'react'
import drawCircle from '../utilities/canvasLoadAnimation';

const Mem = ({ mem }) => {
    const { totalMem, usedMem, memUsage, freeMem } = mem;
    const canvas = document.querySelector('.memCanvas');
    drawCircle(canvas, memUsage * 100);
    const totalMemGigs = (totalMem / 1073741824).toFixed(2);
    const freeMemGigs = (freeMem / 1073741824).toFixed(2);
    return (
        <div className="col-sm-3 mem">
            <h3>Memory Usage</h3>
            <div className="canvas-wrapper">
                <canvas className="memCanvas" width="200" height="200"></canvas>
                <div className="mem-text">{memUsage * 100}%</div>
            </div>
            <div>
                Total Memory: {totalMemGigs} GB
            </div>
            <div>
                Free Memory: {freeMemGigs} GB
            </div>
        </div>
    )
}

export default Mem;
