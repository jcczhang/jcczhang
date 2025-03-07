const modelViewer = document.getElementById('cat');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // 0-1 mouse
    const xRatio = clientX / window.innerWidth;
    const yRatio = clientY / window.innerHeight;

    // 
    const horizontalAngle = 90 - (xRatio - 0.5) * 90;  // left right 45C
    const verticalAngle = 90 + (0.5 - yRatio) * 60;    // up down 30C

    // camera-orbit head to me
    const orbit = `${horizontalAngle}deg ${verticalAngle}deg 1.5m`;
    modelViewer.setAttribute('camera-orbit', orbit);
});
