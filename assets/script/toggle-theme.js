function changeTheme(){
    let button = document.querySelector('#toggle-theme-btn');
    let currentTheme = document.documentElement.classList.contains('light');

    if(currentTheme) {
        button.innerHTML = '🌞';
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        button.innerHTML = '🌙';
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
}