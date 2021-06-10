const imgContainers = document.getElementsByClassName('imgContainer');

for (let i = 0; i < imgContainers.length; i++) {
    imgContainers.item(i).addEventListener('click', (e) => {
        e.target.style.width = '100vw';
        e.target.style.height = '100vh';
        e.target.style.transition = 'width 3s';

        const redirectName = 'pages/' + e.target.id.substring(3) + '.html';
        setTimeout(() => {
            window.location.href = redirectName;
        }, 1000);
    });
}

