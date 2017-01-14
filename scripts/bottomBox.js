
        function luckyBox() {
            var luckyBox = new PIXI.Graphics();
            luckyBox.lineStyle(1, 0x242424, 1);
            luckyBox.beginFill(0x2F4F4F);
            luckyBox.drawRoundedRect(70, 550, renderer.view.width / 2 + 260, 98, 8)
            luckyBox.endFill();
            stage.addChild(luckyBox);
        }


        function placeBetsMessage() {
            var message = new PIXI.Text("Place your bets ", { font: "27px Unicode", fill: "white" });
            message.position.set(315, 570);
            stage.addChild(message);
        }