// Оптимизация видеофона для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    
    // Проверка мобильного устройства
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile && video) {
        // Для мобильных уменьшаем качество для повышения производительности
        video.setAttribute('playsinline', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');
        
        // Контроль потребления памяти
        video.removeAttribute('poster');
    }
    
    // Предзагрузка видео для быстрого старта
    if (video) {
        video.load();
    }
});