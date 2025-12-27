document.addEventListener('DOMContentLoaded', function() {
    // 推荐码和链接
    const REFERRAL_CODE = '26021839';
    const REFERRAL_LINK = `https://www.okx.com/join/${REFERRAL_CODE}`;
    
    // 设备检测优化
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 如果是移动设备，添加移动设备类
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
    
    // 处理CTA按钮 - 重定向到OKX带推荐码
    const heroCta = document.getElementById('heroBtn');
    const footerCta = document.getElementById('footerBtn');
    
    function redirectToOKX() {
        window.open(REFERRAL_LINK, '_blank');
    }
    
    heroCta.addEventListener('click', redirectToOKX);
    footerCta.addEventListener('click', redirectToOKX);
    
    // 复制推荐码功能
    const copyBtn = document.getElementById('copyBtn');
    
    copyBtn.addEventListener('click', function() {
        // 创建临时输入元素
        const tempInput = document.createElement('input');
        tempInput.value = REFERRAL_CODE;
        document.body.appendChild(tempInput);
        
        // 选择并复制文本
        tempInput.select();
        document.execCommand('copy');
        
        // 移除临时输入元素
        document.body.removeChild(tempInput);
        
        // 临时更新按钮文本提供反馈
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '已复制!';
        
        setTimeout(function() {
            copyBtn.textContent = originalText;
        }, 2000);
    });
    
    // 改善移动端按钮触摸响应
    if (isMobile) {
        const allButtons = document.querySelectorAll('button');
        allButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            button.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // FAQ手风琴功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 切换点击项目的激活类
            item.classList.toggle('active');
            
            // 更新切换图标
            const toggleIcon = question.querySelector('.toggle-icon');
            toggleIcon.textContent = item.classList.contains('active') ? '−' : '+';
            
            // 关闭其他打开的FAQ项目
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
        });
    });
    
    // YouTube视频懒加载
    const videoSection = document.querySelector('.youtube-video');
    const videoFrame = document.querySelector('.video-container iframe');
    
    // 存储原始src
    const videoSrc = videoFrame.src;
    videoFrame.removeAttribute('src');
    
    // 滚动到附近时加载视频
    const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoFrame.setAttribute('src', videoSrc);
                videoObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });
    
    if (videoSection) {
        videoObserver.observe(videoSection);
    }
    
    // 滚动时添加动画
    const observerOptions = {
        threshold: 0.25
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // 为动画观察各个部分
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // 添加动画类
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .in-view {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* 移动端触摸状态 */
            .touch-active {
                opacity: 0.8;
                transform: scale(0.98);
            }
            
            /* 为移动设备优化动画 */
            .mobile-device .fade-in {
                transition: opacity 0.4s ease, transform 0.4s ease;
            }
            
            /* 语言切换样式 */
            .language-switch {
                margin-top: 15px;
                font-size: 0.9rem;
            }
            
            .language-switch a {
                color: white;
                text-decoration: underline;
            }
            
            .current-lang {
                font-weight: bold;
            }
        </style>
    `);
    
    // 处理固定底部间距
    const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
    document.body.style.paddingBottom = footerHeight + 'px';
    
    // 窗口大小变化时更新底部间距
    window.addEventListener('resize', function() {
        const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
        document.body.style.paddingBottom = footerHeight + 'px';
        
        // 检查移动设备的方向变化
        updateLayoutForOrientation();
    });
    
    // 处理移动设备的方向变化
    function updateLayoutForOrientation() {
        if (isMobile && window.innerHeight < 500) {
            // 在小设备的横屏模式下使底部栏静态
            document.querySelector('.sticky-footer').classList.add('static-footer');
            document.body.style.paddingBottom = '0';
        } else {
            // 移除静态底部栏类
            document.querySelector('.sticky-footer').classList.remove('static-footer');
            const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
            document.body.style.paddingBottom = footerHeight + 'px';
        }
    }
    
    // 初始化当前方向的布局
    updateLayoutForOrientation();
    
    // 防止移动设备双击缩放
    if (isMobile) {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
}); 