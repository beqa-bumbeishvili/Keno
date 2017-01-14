        function playButton(buttonText) {
            var mainButton = new Sprite(loader.resources.btnNormal.texture);
            stage.interactiveChildren = true;
            mainButton.interactive = true;
            mainButton.buttonMode = true;
            mainButton.click = function (ev) {
                stage.interactiveChildren = false;
                progressBarMessage();
                ProgressBar();
                addStopIcon();
                messageBoxText();
                if (buttonText == "Play Again") { location.reload(); };
            }

            mainButton.position.set(600, 457);

            var playIt = new PIXI.Text(buttonText, {
                fontFamily: 'Arial',
                fontSize: '26px',
                fontWeight: 'bold',
                fill: 0x2F4F4F,
                stroke: '#4a1850',
            });

            if (buttonText == "Play Again")
                playIt.position.set(2, 12);

            else playIt.position.set(40, 12);


            mainButton.addChild(playIt);
            stage.removeChild(mainButton);
            stage.addChild(mainButton);
        }

    
        //function playButtonClick() {
        //    stage.removeChild()
        //    var clickButton = new Sprite(loader.resources.btnClick.texture);
        //    clickButton.interactive = true;
        //    clickButton.buttonMode = true;
        //    clickButton.click = function (ev) {
        //        //  alert('beqa');
        //    }
        //    clickButton.position.set(570, 455);
        //    clickButton.height = clickButton.height * 1.2;
        //    clickButton.width = clickButton.width * 1.2;

        //    stage.addChild(clickButton);
        //}
