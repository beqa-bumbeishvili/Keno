        var co_x = 50, co_y = 82;
        var text_x = 64, text_y = 80;
        var clickCounter = 0;
        var bet = "-";
        var rightBarx = 600, rightBary = 365;
        var betValueAlign = 120;
        var progressBar = new PIXI.Graphics();
        var progress = new PIXI.Graphics();
        var interval;
        var randomNumbers = [];   // 20 random numbers array
        var randomTextMessage = new PIXI.Text("Generating winning numbers...", { font: "25px Unicode", fill: "white" });
        var colorBallX = 100, colorBallY = 580;
        var ballStop = 680;
        var completeBalls = [];
        var cycle = 0;
        var BoxesContainer = new PIXI.Container;
        var matchCounter = 0;
        var userBetOptions = { placedBet: 100, balance: 0};
        