function changeTheme(){
    let button = document.querySelector('#toggle-theme-btn');
    let emoji = document.querySelector('#toggle-theme-emoji');

    let currentTheme = document.documentElement.classList.contains('light');

    if(currentTheme) {
        emoji.innerHTML = '🌞';
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        emoji.innerHTML = '🌙';
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
}
