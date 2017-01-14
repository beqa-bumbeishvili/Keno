
        function ProgressBar() {
            progressBar.lineStyle(1, 0xffffff, 1);
            progressBar.drawRoundedRect(170, 610, 460, 15, 8);
            progressBar.endFill();

            progress.beginFill(0xFAA224);
            progress.drawRoundedRect(170, 611, 461, 14, 8);
            progress.endFill();

            stage.addChild(progress);
            stage.addChild(progressBar);
            interval = setInterval(animateProgressBar, 20);
        }


        function animateProgressBar() {
            var finished = false;
            if (progress.width > 0) {
                progress.width--;
            }
            else { finished = true; }
            progress.endFill;
            stage.removeChild(progress);
            stage.addChild(progress);
            renderer.render(stage);
            if (finished != true)
                progress.x = progress.x + 0.372;
            else {
                stage.removeChild(progressBar);
                stage.removeChild(progress);
                clearInterval(interval);
                fillBallsArray();
                addColorBalls();
            }
        }
        


        function progressBarMessage() {
            randomTextMessage.position.set(renderer.view.width / 2 - 150, 570);
            stage.addChild(randomTextMessage);
        }

