import React from 'react';
import Plot from 'react-plotly.js';

function Graph(props) {

    const directions = { N:1, S:-1, E:1, W:-1, U:1, D:-1 }

    const getPosition = (data, index) => {
        return data?.position ? data.position[index] : 0
    }

    const getDirection = (data) => {
        if(!data?.direction) return [1,0,0]
        if (data.direction === 'N' || data.direction === 'S') return [directions[data.direction], 0, 0]
        if (data.direction === 'E' || data.direction === 'W') return [0, directions[data.direction], 0]
        if (data.direction === 'U' || data.direction === 'D') return [0, 0, directions[data.direction]]
    }

    return (
        <>
        <Plot
            data={[{
                type: "cone",
                name: 'Direction : '+(props?.data?.direction || 'N'),
                x: [getPosition(props.data, 0)],
                y: [getPosition(props.data, 1)],
                z: [getPosition(props.data, 2)],
                u: [getDirection(props.data)[0]], // 1 for N, -1 for S
                v: [getDirection(props.data)[1]], // 1 for E, -1 for W
                w: [getDirection(props.data)[2]], // 1 for U, -1 for D
                showscale: false,
                sizeref: 1,
                anchor: "tip",
                hoverinfo: "x+y+z+name",
            }]}
            layout={{
                scene: {
                domain: {x: [0, 1]},
                camera: {
                    eye: {x: -1.57, y: 1.36, z: 0.58}
                },
                xaxis: {title: 'E-W'},
                yaxis: {title: 'N-S'},
                zaxis: {title: 'U-D'}
                },
                width: 1000,
                height: 800
            }}
        />
        </>
    );
}

export default Graph;
