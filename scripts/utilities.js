
        function headingText() {
            var text = new PIXI.Text("choose your lucky numbers:", { font: "27px Unicode", fill: "white" });
            text.position.set(52, 30);
            stage.addChild(text);
        }

        function getNumbersFromRect(rectX, rectY) {
            var firstLetter = 0, secondLetter = 0, selectedNum;
            secondLetter = Math.ceil(rectX / 50);
            if (rectY == 82)
                selectedNum = secondLetter;
            else firstLetter = Math.ceil((rectY - 82) / 50);
            if (rectY == 82)
                firstLetter = "";
            selectedNum = firstLetter + "" + secondLetter;
            if (selectedNum / 10 > 10)
                selectedNum = Math.floor((selectedNum / 100) + ((selectedNum / 10) % 10)) + "" + 0;

            return selectedNum;
        }


        function get20RandomNumbers() {
            while (randomNumbers.length < 20) {
                var randomnumber = Math.ceil(Math.random() * 80)
                var found = false;
                for (var i = 0; i < randomNumbers.length; i++) {
                    if (randomNumbers[i] == randomnumber) { found = true; break }
                }
                if (!found) randomNumbers[randomNumbers.length] = randomnumber;
            }
            return randomNumbers;
        }

