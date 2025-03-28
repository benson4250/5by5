// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表单提交处理
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // 简单的表单验证
    if (!name || !email || !message) {
        alert('请填写所有必填字段');
        return;
    }
    
    // 模拟表单提交（实际项目中应该是AJAX或fetch）
    alert(`感谢 ${name}，您的消息已收到！\n我们将尽快回复您。`);
    
    // 重置表单
    this.reset();
});

// 滚动时导航栏变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'rgba(44, 62, 80, 1)';
        header.style.boxShadow = 'none';
    }
});

// 简单的图片预加载
function preloadImages() {
    const imagesToPreload = [
        'images/hero-bg.jpg',
        'images/personal-protection.png',
        'images/venue-security.png',
        'images/risk-assessment.png',
        'images/team-1.jpg',
        'images/team-2.jpg',
        'images/team-3.jpg'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 页面加载完成后执行预加载
window.addEventListener('load', preloadImages);
