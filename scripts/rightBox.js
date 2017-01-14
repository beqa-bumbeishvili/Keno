
        function rightBarItems() {
            var rightBox = new PIXI.Graphics();
            rightBox.lineStyle(1, 0xFFFFFF, 1);
            rightBox.drawRoundedRect(0, 0, 180, 360, 8)
            rightBox.endFill();
            rightBox.x = 580;
            rightBox.y = 80;

            stage.addChild(rightBox);


            var match = new PIXI.Text("match", { font: "25px sans-serif", fill: "white" });
            match.position.set(593, 85);
            stage.addChild(match);


            var close = new PIXI.Text("x", { font: "25px sans-serif", fill: "white" });
            close.position.set(720, 85);
            stage.addChild(close);

        }


        function firstPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 1", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, -20);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, - 20);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, -20);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, -20);
            else setPositions(line, stats, betValue, 56, - 20);
        }

        function secondPosition(value) { 
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 2", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 10);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 10 );
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 10);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 10);
            else setPositions(line, stats, betValue, 56, 10);
        }

        function thirdPosition(value) { 
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 3", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 40);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 40);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 40);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 40);
            else setPositions(line, stats, betValue, 56, 40);
        }

        function fourthPosition(value) {
            var line = new PIXI.Graphics();

            setLineValues(line);
            var stats = new PIXI.Text(" 4", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 70);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 70);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 70);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 70);
            else setPositions(line, stats, betValue, 56, 70);
        }

        function fifthPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 5", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 100);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 100);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 100);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42,  100);
            else setPositions(line, stats, betValue, 56, 100);
        }

        function sixthPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 6", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 130);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 130);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 130);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 130);
            else setPositions(line, stats, betValue, 56, 130);
        }

        function seventhPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 7", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 160);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 160);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 160);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 160);
            else setPositions(line, stats, betValue, 56, 160);
        }

        function eightPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 8", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 190);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 190);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 190);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 190);
            else setPositions(line, stats, betValue, 56, 190);

        }

        function ninethPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text(" 9", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(value, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 220);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 220);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 220);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 220);
            else setPositions(line, stats, betValue, 56, 220);
        }

        function tenthPosition(value) {
            var line = new PIXI.Graphics();
            setLineValues(line);
            var stats = new PIXI.Text("10", { font: "25px sans-serif", fill: "white" });
            var betValue = new PIXI.Text(17389, { font: "25px sans-serif", fill: "white" });
            if (value == "-" || value < 10)
                setPositions(line, stats, betValue, 0, 250);
            else if (value >= 10 && value < 100)
                setPositions(line, stats, betValue, 14, 250);
            else if (value >= 100 && value < 1000)
                setPositions(line, stats, betValue, 28, 250);
            else if (value >= 1000 && value < 10000)
                setPositions(line, stats, betValue, 42, 250);
            else setPositions(line, stats, betValue, 56, 250);
        }


        function setLineValues(line/*stats,betValue*/) {
            line.lineStyle(1, 0xFFFFFF, 1);
            line.moveTo(0, 0);
            line.lineTo(133, 0);
        }

        function setPositions(line, stats, betValue, distanceLeft, distanceTop) {
            line.position.set(rightBarx, rightBary - (distanceTop - 30));
            stats.position.set(rightBarx, rightBary - distanceTop);
            betValue.position.set(rightBarx + betValueAlign - distanceLeft, rightBary - distanceTop);
            stage.addChild(line);
            stage.addChild(stats);
            stage.addChild(betValue);
        }

        function clearArea() {
            var layer = new PIXI.Graphics();
            layer.beginFill(0x328A6B);
            layer.drawRoundedRect(590, 110, 156, 320, 8);
            layer.endFill();
            stage.addChild(layer);
        }