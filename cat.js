const modelViewer = document.getElementById('cat');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // 计算鼠标在屏幕中的位置比例（0-1之间）
    const xRatio = clientX / window.innerWidth;
    const yRatio = clientY / window.innerHeight;

    // 计算相机的水平和垂直角度（范围可根据你的模型微调）
    const horizontalAngle = 90 - (xRatio - 0.5) * 90;  // 左右最多转45度
    const verticalAngle = 90 + (0.5 - yRatio) * 60;    // 上下最多转30度

    // 设置新的camera-orbit，让小猫的脸转向鼠标方向
    const orbit = `${horizontalAngle}deg ${verticalAngle}deg 1.5m`;
    modelViewer.setAttribute('camera-orbit', orbit);
});
