import React from 'react';

export default () => (
    <div>
        <img style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            width: "100px",
            height: "100px"
        }} src="/static/loading.svg" />
    </div>
)

export const LoadingRelative = () => (
    <div>
        <img style={{
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%; -50%)",
            width: "100px",
            height: "100px"
        }} src="/static/loading.svg" />
    </div>
)
