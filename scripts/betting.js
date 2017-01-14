function addBettingInput(money) {
    var placeBetContainer = new PIXI.Container();
    var betInput = new PIXI.Graphics();
    betInput.lineStyle(1, 0xffffff, 1);
    betInput.drawRoundedRect(60, 464, 76, 41, 5);
    var usd;
    if (money <= localStorage.getItem('balance')) {
        usd = new PIXI.Text(money + "$", { font: "27px Unicode", fill: "white" });
    }
    usd.position.set(69, 470);
    var upnormal = new Sprite(loader.resources.upNormal.texture);
    upnormal.position.set(145, 463);
    upnormal.interactive = true;
    upnormal.buttonMode = true;
    upnormal.click = function (ev) {
        clearBetInput();
        if (money + 50 <= localStorage.getItem('balance'))
            addBettingInput(money + 50);
        else addBettingInput(localStorage.getItem('balance'));
        renderer.render(stage);
    }

    var upclick = new Sprite(loader.resources.upClick.texture);
    upclick.position.set(140, 465);

    var downnormal = new Sprite(loader.resources.downNormal.texture);
    downnormal.position.set(145, 485);
    downnormal.interactive = true;
    downnormal.buttonMode = true;
    downnormal.click = function (ev){ 
        clearBetInput();
        if (money - 50 > 0)
            addBettingInput(money - 50);
        else {
            swal({ title: "ait!", text: "you can't bet less than 50.", type: "error", confirmButtonText: "OK" });
            addBettingInput(50);
        }
        renderer.render(stage);
    }

    placeBetContainer.addChild(usd);
    placeBetContainer.addChild(betInput);
    placeBetContainer.addChild(upnormal);
    placeBetContainer.addChild(downnormal);

    stage.addChild(placeBetContainer);
}



function clearBetInput() {
    var clearRect = new PIXI.Graphics();
    clearRect.beginFill(0x2F4F4F);
    clearRect.drawRoundedRect(61, 466, 73, 37, 8)
    clearRect.endFill();
    stage.addChild(clearRect);
}
