import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import { Text } from '@chakra-ui/layout'
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import { Redirect } from 'react-router-dom';

import fragShader from '../shaders/frag';

interface Props {

}

export default function Home({ }: Props) {
    // If user is not logged in, redirect to login page
    const token = localStorage.getItem('token');
    if (token === null) {
        return <Redirect to={'/login'} />;
    }

    const HomeStyle = css`
        display: grid;
        place-self: center;
    `;

    const TextStyle = css`
        font-size: 16rem;
        font-weight: bold;
        color: #fff;
        position: fixed;
        place-self: center;
    `;

    const [time, setTime] = useState<number>(0.0);
    useEffect(() => { 
        const timer = setInterval(() => { setTime(prevTime => prevTime + 0.3) 
        return () => {
            window.clearInterval(timer);
        };
    }, 100)}, []);

    // Uniforms to pass into the shader
    // iResolution;           // viewport resolution (in pixels)
    // iTime;                 // shader playback time (in seconds)
    // iTimeDelta;            // render time (in seconds)
    // iFrame;                // shader playback frame
    // iChannelTime[4];       // channel playback time (in seconds)
    // iChannelResolution[4]; // channel resolution (in pixels)
    // iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    // iChannel0..3;          // input channel. XX = 2D/Cube
    // iDate;                 // (year, month, day, time in seconds)
    // iSampleRate; 
    return (
        <div className={HomeStyle}>
            <ShaderCanvas
                width={window.innerWidth}
                height={window.innerHeight}
                fragShader={fragShader}
                uniforms={{
                    iResolution: [window.innerWidth, window.innerHeight],
                    iTime: time,
                }}
            />
            <Text className={TextStyle}>Hello!</Text>
        </div>
    )
}
