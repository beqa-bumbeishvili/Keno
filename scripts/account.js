        function balanceBox() {
            var background = new PIXI.Graphics();
            background.beginFill(0x2F4F4F);
            background.drawRoundedRect(580, 0, 175, 60, 8)
            background.endFill();
            stage.addChild(background);


            var balance = new PIXI.Text("balance:", { font: "27px Unicode", fill: "white" });
            balance.position.set(585, 15);
            stage.addChild(balance);


            var limit = new PIXI.Text( localMoney() + "$", { font: "27px Unicode", fill: "white" });
            limit.position.set(675, 15);
            stage.addChild(limit);
        }

        function localMoney() {
                localStorage.setItem('balance', 200);

            return localStorage.getItem('balance');
        }