/* 
  as of writing, fetch response data structure is
  {
    "online": true,
    "host": "play.atlasminecraft.com",
    "port": 25565,
    "ip_address": "98.229.174.252",
    "eula_blocked": false,
    "retrieved_at": 1718960738988,
    "expires_at": 1718960798988,
    "srv_record": {
        "host": "play.atlasminecraft.com",
        "port": 28753
    },
    "version": {
        "name_raw": "Paper 1.20.1",
        "name_clean": "Paper 1.20.1",
        "name_html": "<span><span>Paper 1.20.1</span></span>",
        "protocol": 763
    },
    "players": {
        "online": 0,
        "max": 50,
        "list": []
    },
    "motd": {
        "raw": "§fHAVE FUN",
        "clean": "HAVE FUN",
        "html": "<span><span style=\"color: #ffffff;\">HAVE FUN</span></span>"
    },
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB2ElEQVR4Xu3WwU1DQRAE0R8BGRCNMyREcuCGMPd3sCjLGrTSlFS3Vu/0ba9rWZZlWZblSX4+b/f/1HvG8aBpvWccD5rWe8bxoGm9ZxwPmtZ7xvGgab1nHA+a1nvG8aBpvefl+GD1ent/qHk1r+bVPRkLqx6s5tW8mlf3ZCyserCaV/NqXt2TsbDqwWpezat5dU/GwqoHq3k1r+bVPRkLqx6s5tW8mlf3ZCyserCaV/NqXt2TsbDqwWpezat5dU/GwtN0T8bC03RPxsLTdE/GwtN0T8bC03RPxsLTdE/GwtN0T8bC03RPxkL1Y6Lmq/apeXVPxkL1IDVftU/Nq3syFqoHqfmqfWpe3ZOxUD1IzVftU/PqnoyF6kFqvmqfmlf3ZCxUD1LzVfvUvLonY6F6kJqv2qfm1T0ZC9WD1HzVPjWv7slYWPXgqn1V92QsrDqoal/VPRkLqw6q2ld1T8bCqoOq9lXdk7Gw6qCqfVX3ZCysOqhqX9U9GQurDqraV3VPxsKqg6r2Vd3zcnyw+v3x9VDz6j3jeFDVwWpevWccD6o6WM2r94zjQVUHq3n1nnE8qOpgNa/eM44HVR2s5tV7xvGgqoPVvHrPOB5UdbCaV+9ZlmVZlmX5K7+OsDVLY5DMogAAAABJRU5ErkJggg==",
    "mods": [],
    "software": null,
    "plugins": []
}
*/

const playerCount = document.getElementById("playerCount");
const onlineIndicator = document.getElementById("circleIcon");

playerCount.onload = updatePlayerCount();

async function updatePlayerCount() {
	try {
		const fetchPlayerCount = await fetch(
			"https://api.mcstatus.io/v2/status/java/play.atlasminecraft.com"
		).then((res) => res.json());

		// update online indicator circle class
		if (fetchPlayerCount.online) {
			onlineIndicator.className = "onlineColor";
		} else {
			onlineIndicator.className = "offlineColor";
		}

		const players = fetchPlayerCount.players;
        // pad online count with 1 preceding 0 if there is less than 2 digits
		const onlineCount = String(players.online).padStart(2, "0");

		// update player count
		playerCount.innerText = `${onlineCount}/${players.max}`;
	} catch (error) {
		console.error(error);
		console.info("failed to fetch player count api");
	}
}
