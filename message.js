'use strict';

const electNow = require('./election').electNow;

class Message {

	static get bad() {
		return ['Читавших 50 оттенков серого'
			, 'забияк'
			, 'тех кто не любит парарирурам'
			, 'тех, кому это на самом деле и не надо'
			, 'тех, кто ну совсем не подходит'
			, 'тех, у кого нет шансов'
			, 'невезунчиков'
			, 'слабовольных и неуравновешенных'
			, 'тех, кто не читал Винни-Пуха'
			, 'SMM-щиков'
			, 'впавших в депрессию и опустивших руки'
			, 'безрассудных эпикурейцев'
			, 'впавших в прокрастинацию'
			, 'девственников, распутников и горлопанов'
			, 'Всяких плохих дядек и тётек'
			, 'Всяких панков'
			, 'писателей фанфиков'
		];
	}

	static get bad2() {
		return ['тех, кто сегодня не заслужил'
			, 'тех, кто сегодня провинился'
			, 'тех, кто попросил сегодня его не выбирать'
			, 'тех, кому сегодня не повезло'
			, 'тех, кто сегодня плохо старался'
			, 'тех, кто сегодня встал не с той ноги'
			, 'тех, кому сегодня не дали'
			, 'того, кто сегодня обидел котёнка'
			, 'того, кто сегодня чот приуныл'
			, 'того, кто сегодня лучше бы и не вылезал из постели'
			, 'того, кто сегодня ничему не научился'
			, 'того, кто сегодня вляпался в собачью мину'
			, 'того, кто сегодня проехал зайцем в общественном транспорте'
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
		return `${username} теперь не сможет стать умником`;
	}

	ban(username, kickerName) {
		return `${username} теперь, конечно, не сможет стать умником. Но и ${kickerName} тоже не факт, что ходит в магистратуру`;
	}

	didNotPlay() {
		return 'А ты и не участвовал';
	}

	emptyCutie() {
		return 'Умник ещё не выбран, сейчас начнем...';
	}

	startElection() {
		return ' Начинаю алгоритм выбора умника...';
	}

	filterBad(step) {
		return `Исключаю ${electNow((step == 1) ? Message.bad : Message.bad2)}...`;
	}

	filterGood(arr) {
		const str = (arr && arr.length) ? arr.map(n => `@${n}`).join(', ') : 'прошедших отбор';
		return `Выбираю из ${str}...`;
	}

	newCutieWithoutPing(username) {
		return `Вуаля Умник дня *${username}*!`;
	}

	cutie(username) {
		return `Умник дня *${username}*`;
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
