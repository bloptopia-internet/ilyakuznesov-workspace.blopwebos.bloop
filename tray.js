$('.desktop-taskbar-tray-clock').click(() => {
    $('.desktop-taskbar-window-clock').css('display', 'block');
    $('.desktop-taskbar-window-back').css('display', 'block');
});

$('.desktop-taskbar-tray-lang').click(() => {
    $('.desktop-taskbar-window-lang').css('display', 'block');
    $('.desktop-taskbar-window-back').css('display', 'block');
});

$('.desktop-taskbar-tray-sound').click(() => {
    $('.desktop-taskbar-window-sound').css('display', 'block');
    $('.desktop-taskbar-window-back').css('display', 'block');
});

$('.desktop-taskbar-window-back').click(() => {
    $('.desktop-taskbar-window-back').css('display', 'none');
    $('.desktop-taskbar-window-lang').css('display', 'none');
    $('.desktop-taskbar-window-clock').css('display', 'none');
    $('.desktop-taskbar-window-sound').css('display', 'none');
});

if (localStorage.getItem('keybrdLang') == 'en') {
    $('.desktop-taskbar-window-lang-lang-selected').removeClass('desktop-taskbar-window-lang-lang-selected')
    $('.desktop-taskbar-window-lang-lang_en').addClass('desktop-taskbar-window-lang-lang-selected')
    $('.desktop-taskbar-tray-lang').html('<div>ENG</div>')
}
$('.desktop-taskbar-window-lang-lang_en').click(() => {
    $('.desktop-taskbar-window-lang-lang-selected').removeClass('desktop-taskbar-window-lang-lang-selected')
    $('.desktop-taskbar-window-lang-lang_en').addClass('desktop-taskbar-window-lang-lang-selected')
    localStorage.setItem('keybrdLang', 'en')
    $('.desktop-taskbar-tray-lang').html('<div>ENG</div>')
});
$('.desktop-taskbar-window-lang-lang_ru').click(() => {
    $('.desktop-taskbar-window-lang-lang-selected').removeClass('desktop-taskbar-window-lang-lang-selected')
    $('.desktop-taskbar-window-lang-lang_ru').addClass('desktop-taskbar-window-lang-lang-selected')
    localStorage.setItem('keybrdLang', 'ru')
    $('.desktop-taskbar-tray-lang').html('<div>РУС</div>')
});

$('.desktop-taskbar-window-sound-cont-range').val(localStorage.getItem("soundlevel"))

setInterval(() => {
    localStorage.setItem("soundlevel", $('.desktop-taskbar-window-sound-cont-range').val())
    let audio = document.querySelector('audio');
    let volume = $('.desktop-taskbar-window-sound-cont-range').val() / 100;
    audio.volume = volume;
}, 1000)