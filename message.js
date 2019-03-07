'use strict';

const electNow = require('./election').electNow;

class Message {

	static get bad() {
		return ['Читавших 50 оттенков серого'
			, 'Истинных резистов'
			, 'Тех, кто сегодня не шпионил'
			
		];
	}

	static get bad2() {
		return ['тех, кто сегодня не заслужил'
			, 'тех, кто сегодня провинился'
			, 'тех, кто попросил сегодня его не выбирать'
			
		];
	}

	error(code) {
		return `Я что-то нажал, и все исчезло, пинганите @${process.env.ADMIN_USERNAME} и скажите, что ${code}`;
	}

	errorEmptyUserName() {
		return 'Ты вообще, кто такой?';
	}

	errorNoChat() {
		return 'Бот работает только в чате';
	}

	errorBot() {
		return 'а, что?';
	}

	join(username) {
		return `@${username}, Молодец, теперь ты участвуешь!`;
	}

	alreadyJoined() {
		return 'ага, ты уже участвуешь';
	}

	leave(username) {
		return `@${username}, ну и бог с тобой!`;
	}

	out(username) {
		return `${username} теперь не сможет стать шпионом`;
	}

	ban(username, kickerName) {
		return `${username} теперь, конечно, не сможет стать шпионом. `;
	}

	didNotPlay() {
		return 'А ты и не участвовал';
	}

	emptyCutie() {
		return 'шпион ещё не выбран, сейчас начнем...';
	}

	startElection() {
		return ' Начинаю алгоритм выбора шпиона...';
	}

	filterBad(step) {
		return `Исключаю ${electNow((step == 1) ? Message.bad : Message.bad2)}...`;
	}

	filterGood(arr) {
		const str = (arr && arr.length) ? arr.map(n => `${n}`).join(', ') : 'прошедших отбор';
		return `Выбираю из ${str}...`;
	}

	newCutieWithoutPing(username) {
		return `ВОТ КТО ШПИОН -  *@${username}*!`;
	}

	cutie(username) {
		return `Шпион дня *@${username}*`;
	}

	process() {
		return 'Подожди немного, я пока занят';
	}

	migrate() {
		return 'Список участников успешно импортирован';
	}

	clean(usernames) {
		let str;
		if (usernames.length === 0) str = 'Все отлично';
		else if (usernames.length === 1) str = `${usernames[0]} больше не сможет стать Умником`;
		else str = `Больше не смогут стать умниками: ${usernames.join(', ')}`;
		return str;
	}

	emptyPlayers() {
		return 'Никого нет Т_Т';
	}
}

module.exports = new Message();
