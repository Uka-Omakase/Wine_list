document.addEventListener('DOMContentLoaded', () => {
  // 进入时短暂禁用滚动
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  const splash = document.querySelector('.splash');

  if (splash) {
    splash.addEventListener('animationend', () => {
      // 恢复滚动并移除遮罩
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      splash.remove();
    }, { once: true });

    // 兜底：3.2s 后强制恢复
    setTimeout(() => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (document.body.contains(splash)) splash.remove();
    }, 3200);
  }
});
