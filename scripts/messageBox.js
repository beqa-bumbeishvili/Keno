
        function messageBox() {
            var messageBox = new PIXI.Graphics();
            messageBox.lineStyle(1, 0x242424, 1);
            messageBox.beginFill(0x2F4F4F);
            messageBox.drawRoundedRect(0, 460, renderer.view.width, 50, 8)
            messageBox.endFill();
            stage.addChild(messageBox);
        }


        function addStopIcon() {
            var stopIcon = new Sprite(loader.resources.stop.texture);
            stopIcon.position.set(renderer.view.width / 2 - 134, 475);
            stage.addChild(stopIcon);
        }


        function messageBoxText() {
            var text = new PIXI.Text("wait for next round", { font: "25px Unicode", fill: "white" });
            text.position.set(renderer.view.width / 2 - 110, 470);
            stage.addChild(text);
        }
        

