import React from "react";
import { useRef, useEffect } from "react";


function BtnLine() {
    const btnLine = useRef(null)
    useEffect(() => {
        drawLine()
    }, [])

    function drawLine() {
        btnLine.current.height = 70
        btnLine.current.width = 415
        const ctx = btnLine.current.getContext('2d')
        const gradient = ctx.createLinearGradient(1, 1, 404, 50);
        gradient.addColorStop(0.05, 'rgba(255, 255, 255, 0.04)');
        gradient.addColorStop(0.22, 'rgba(255, 255, 255, 0.23)');
        gradient.addColorStop(1, '#ffffff');
        ctx.beginPath()
        ctx.moveTo(1, 1)
        ctx.lineTo(70, 50)
        ctx.lineTo(401, 50)
        ctx.strokeStyle = gradient
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(403, 50, 2, 0, Math.PI * 2, true);
        ctx.stroke()
    }

    return (
        <canvas ref={btnLine} id="button-line"></canvas>
    )
}

export default BtnLine