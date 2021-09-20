import React from 'react';
import { css } from '@emotion/css';

const FlowDivStyle = css`
    height: 75vh;
    width: 600px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #FFF;
    display: flex;
    flex-direction: column;
`;

const FlowHeaderStyle = css`
    height: 30%;
    width: 100%;
    background: #65aaea;
    border-radius: 10px 10px 0 0;
`;

const FlowBodyStyle = css`
    height: 70%;
    width: 100%;
    padding: 10px;
`;

export default function FlowContainer(props: any) {
    return <div className={FlowDivStyle}>
        <div className={FlowHeaderStyle}></div>
        <div className={FlowBodyStyle}>
            {props.children}
        </div>
    </div>
}
