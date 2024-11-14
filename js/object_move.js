// windows drag
let MoveAbout = document.getElementById('move_about');
let MoveWinAbout = document.querySelector('.desktop_win_about');

let MoveFAQ = document.getElementById('move_faq');
let MoveWinFAQ = document.querySelector('.desktop_win_faq');

let MoveRules = document.getElementById('move_rules');
let MoveWinRules = document.querySelector('.desktop_win_rules');

let MoveSchedule = document.getElementById('move_schedule');
let MoveWinSchedule = document.querySelector('.desktop_win_schedule');

let MoveReg = document.getElementById('move_reg');
let MoveWinReg = document.querySelector('.desktop_win_registration');

let MoveAwards = document.getElementById('move_awards');
let MoveWinAwards = document.querySelector('.desktop_win_awards');

let MoveSponsor = document.getElementById('move_sponsor');
let MoveWinSponsor = document.querySelector('.desktop_win_sponsors');

let MoveSocial = document.getElementById('move_social');
let MoveWinSocial = document.querySelector('.desktop_win_social');

let MoveGames = document.getElementById('move_games');
let MoveWinGames = document.querySelector('.desktop_win_games');

DragWindows(MoveAbout, MoveWinAbout);
DragWindows(MoveFAQ, MoveWinFAQ);
DragWindows(MoveRules, MoveWinRules);
DragWindows(MoveSchedule, MoveWinSchedule);
DragWindows(MoveReg, MoveWinReg);
DragWindows(MoveAwards, MoveWinAwards);
DragWindows(MoveSponsor, MoveWinSponsor);
DragWindows(MoveSocial, MoveWinSocial);
DragWindows(MoveGames, MoveWinGames);

function DragWindows(header, windows) {
	// Добавляем обработчик только для заголовка
	header.addEventListener('mousedown', function (e) {
		// Проверяем, не кликаем ли мы на интерактивные элементы (например, на поле ввода)
		if (e.target.closest('input, textarea, button')) {
			return // Не начинаем перетаскивание, если клик был на поле ввода
		}

		// Предотвратить любое поведение по умолчанию для этого элемента
		e.preventDefault()

		// Запускаем перетаскивание
		DragWinElem(header, windows, e)
	})
}

function DragWinElem(header, elem, e) {
	let coords = getCoords(elem)
	let shiftX = e.clientX - coords.left
	let shiftY = e.clientY - coords.top

	// Убираем прокрутку страницы, чтобы она не двигалась во время перетаскивания
	document.body.style.overflow = 'hidden'

	// Функция для перемещения окна по экрану
	function moveAt(pageX, pageY) {
		elem.style.left = pageX - shiftX + 'px'
		elem.style.top = pageY - shiftY + 'px'
	}

	// Начинаем движение при наведении мыши
	moveAt(e.pageX, e.pageY)

	// Обработчик для перемещения окна
	function onMouseMove(e) {
		moveAt(e.pageX, e.pageY)
	}

	// Добавляем слушатель для движения мыши
	document.addEventListener('mousemove', onMouseMove)

	// Когда отпускаем кнопку мыши — завершаем перетаскивание
	elem.onmouseup = function () {
		document.removeEventListener('mousemove', onMouseMove)
		elem.onmouseup = null
	}

	// Если мышь покидает область окна — завершить перетаскивание
	elem.onmouseleave = function () {
		document.removeEventListener('mousemove', onMouseMove)
		elem.onmouseup = null
	}

	// Функция для получения координат окна
	function getCoords(elem) {
		var box = elem.getBoundingClientRect()
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
		}
	}
}




let MoveAboutSh = document.getElementById('about_sh');
let MoveFAQSh = document.getElementById('faq_sh');
let MoveRulesSh = document.getElementById('rules_sh');
let MoveScheduleSh = document.getElementById('schedule_sh');
let MoveRegSh = document.getElementById('reg_sh');
let MoveAwardsSh = document.getElementById('awards_sh');
let MoveSponsorsSh = document.getElementById('sponsor_sh');
let MoveSocialSh = document.getElementById('social_sh');
let MoveGamesSh = document.getElementById('games_sh');
DragShortcutElem(MoveAboutSh);
DragShortcutElem(MoveFAQSh);
DragShortcutElem(MoveRulesSh);
DragShortcutElem(MoveScheduleSh);
DragShortcutElem(MoveRegSh);
DragShortcutElem(MoveAwardsSh);
DragShortcutElem(MoveSponsorsSh);
DragShortcutElem(MoveSocialSh);
DragShortcutElem(MoveGamesSh);

function DragShortcutElem(elem){
    elem.ondragstart = () => false;
    let rect = elem.getBoundingClientRect();
    let css = getComputedStyle(elem);
    document.body.style.overflow = 'hidden';
    elem.onmousedown = e => {
        elem.style.position = 'absolute';
        let saveX = e.offsetX;
        let saveY = e.offsetY;

        document.onmousemove = e => {
            elem.style.position = 'absolute';
            elem.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
            elem.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
        };
    };

    elem.onmouseup = e => {
        document.onmousemove = () => false;
    };
};

