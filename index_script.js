document.addEventListener('DOMContentLoaded', () => {
  // 进入时禁用滚动
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  const splash = document.querySelector('.splash');

  const revealApp = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.remove('is-splashing');
  };

  if (splash) {
    // 4s 时先显示正文，让它在遮罩淡出时一起“交叉淡入”
    setTimeout(() => {
      document.body.classList.remove('is-splashing');
    }, 4000);

    // 只在 .splash 自己的动画（splash-hold）结束时才移除遮罩
    splash.addEventListener('animationend', (e) => {
      if (e.target === splash && e.animationName === 'splash-hold') {
        splash.remove();
        revealApp();
      }
    });

    // 兜底：4s 强制移除（避免低配机或中断）
    setTimeout(() => {
      if (document.body.contains(splash)) splash.remove();
      revealApp();
    }, 4000);

    // 可选：点击跳过
    splash.addEventListener('click', () => {
      if (document.body.contains(splash)) splash.remove();
      revealApp();
    }, { once: true });
  } else {
    revealApp();
  }
});
