        function checkFortune() {
            var colour = document.getElementById('food-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "肉っしょ" && == "たまご" ) {
                result = "中吉";
            } else if (colour === "肉っしょ" && =="大根") {
                result = "中吉";
            } else if (colour === "肉っしょ" && == "ねぎ") {
                result = "凶";
            } else if (colour === "魚かな" && == "たまご" ) {
                result = "中吉";
            } else if (colour === "魚かな" && == "大根" ) {
                result = "中吉";
            } else if (colour === "魚かな" && == "ねぎ") {
                result = "大凶";
            } else if (colour === "麺だね" && == "たまご") {
                result = "カルボナーラ";
            } else if (colour === "麺だね" && == "大根") {
                result = "大吉";
            } else if (colour === "麺だね" && == "ねぎ") {
                result = "ネギたっぷりラーメン";
            }

            document.getElementById('result-output').innerText = "あなた今日の晩御飯は【" + result + "】です";
        }
