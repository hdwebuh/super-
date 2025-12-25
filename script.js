const titles = document.getElementsByTagName('h2');

// 鼠标悬停在 h1 标签上时触发的函数
function onMouseEnter() {
    // 设置 h1 标签的字体颜色为彩色渐变
    this.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
    this.style.webkitBackgroundClip = 'text';
    this.style.webkitTextFillColor = 'transparent';
}

// 鼠标离开 h1 标签时触发的函数
function onMouseLeave() {
    // 重置 h1 标签的字体颜色
    this.style.backgroundImage = '';
    this.style.webkitBackgroundClip = '';
    this.style.webkitTextFillColor = '';
}

// 为所有 h1 标签添加鼠标悬停和离开事件监听器
for (const title of titles) {
    title.addEventListener('mouseenter', onMouseEnter);
    title.addEventListener('mouseleave', onMouseLeave);
}