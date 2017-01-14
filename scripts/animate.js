function fillBallsArray() {
    var randomNumbersArray = get20RandomNumbers();
    for (var i = 0; i < randomNumbersArray.length; i++) {
        if (i % 4 == 0)
            completeBalls.push(new Sprite(loader.resources.red.texture));
        else if (i % 3 == 0)
            completeBalls.push(new Sprite(loader.resources.green.texture));
        else if (i % 2 == 0)
            completeBalls.push(new Sprite(loader.resources.blue.texture));
        else completeBalls.push(new Sprite(loader.resources.yellow.texture));
        completeBalls[i].position.set(colorBallX, colorBallY);
        completeBalls[i].width = 45;
        completeBalls[i].height = 45;
        var number = new PIXI.Text(randomNumbersArray[i], { font: "35px Unicode bold", fill: "black" });
        if (randomNumbersArray[i] > 9)
            number.position.set(19, 20);
        else number.position.set(10, 20);
        completeBalls[i].addChild(number);
    }
}

function addColorBalls() {
    stage.removeChild(randomTextMessage);
    interval = setInterval(animateColorBalls, 30);
}


function animateColorBalls() {
    if (cycle < 20) {
        var finished = false;
        if (completeBalls[cycle].x > ballStop) {
            finished = true;
            completeBalls[cycle].rotation = 1;
        }
        stage.addChild(completeBalls[cycle]);
        completeBalls[cycle].x = completeBalls[cycle].x + 6;
        completeBalls[cycle].y = colorBallY;
        completeBalls[cycle].anchor.x = 0.5;
        completeBalls[cycle].anchor.y = 0.5;
        completeBalls[cycle].rotation = completeBalls[cycle].rotation + 0.6;
        completeBalls[cycle].getChildAt(0).anchor.x = 1;
        completeBalls[cycle].getChildAt(0).anchor.y = 1;
        if (finished) {
            ballStop -= 30;
            if (colorBallY == 580)
                colorBallY += 40;
            else colorBallY -= 40;
            completeBalls[cycle].rotation = 0;
            stage.addChild(completeBalls[cycle]);
            if (BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).alpha == 0.95) {
                BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).beginFill(0x93F98C);
                BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).getChildAt(0).setStyle({
                    fontFamily: 'Arial',
                    fontSize: '26px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fill: 'green',
                    stroke: '#4a1850',
                });
                matchCounter++;
            }

            else {
                BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).beginFill(0xD62E0A);
                BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).getChildAt(0).setStyle({
                    fontFamily: 'Arial',
                    fontSize: '26px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fill: 0xFEFA64,
                    stroke: '#4a1850',
                });
            }
            BoxesContainer.getChildAt(completeBalls[cycle].getChildAt(0).text - 1).drawRoundedRect(0, 0, 46, 31, 8);
            cycle++;
            if (cycle < 20)
                addColorBalls();
            else {
                playButton("Play Again");
            }
            clearInterval(interval);
        }
        renderer.render(stage);

    }
}
