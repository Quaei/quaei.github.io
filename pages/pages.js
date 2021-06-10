const contentContainers = document.getElementsByClassName('contentContainer');

const media = window.matchMedia('(max-width: 800px)');

window.onscroll = function() {
    for (let i = 0; i < contentContainers.length; i++) {
        const el = contentContainers.item(i);

        const rect = el.getBoundingClientRect();
        // const bodyRect = document.getElementsByTagName('body')[0].getBoundingClientRect();

        if (!media.matches) {
            if (rect.top <= 0) {
                el.style.opacity = '0.2';
            }
            else if (rect.top <= 50) {
                el.style.opacity = '0.5';
            }
            else {
                el.style.opacity = '1';
            }
        }
    }
}