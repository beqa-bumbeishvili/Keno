 function setup() {
            playButton("Play");
            addBettingInput(100);
            headingText();
            renderer.render(stage);
            for (var i = 1; i <= 80; i++) {
                var roundBox = new PIXI.Graphics();
                roundBox.interactive = true;
                roundBox.buttonMode = true;
                roundBox.mouseout = function (ev) {
                    if (this.alpha != 0.95) {
                        this.beginFill(0x328A6B);
                        this.lineStyle(4, 0xDCDCDC, 1);
                        this.drawRoundedRect(0, 0, 46, 31, 8);
                        renderer.render(stage);
                    }
                }
                roundBox.mouseover = function (ev) {
                    if (this.alpha != 0.95) {
                        ev.target.beginFill(0x2F4F4F);
                        this.lineStyle(4, 0x2F4F4F, 1);
                        ev.target.drawRoundedRect(0, 0, 46, 31, 8);
                        renderer.render(stage);
                    }
                }
                roundBox.click = function (ev) {

                    clickCounter++;

                    if (clickCounter <= 11) {
                        if (ev.target.alpha == 1) {
                            if (clickCounter < 11) {
                                clearArea();
                                ev.target.alpha = 0.95; 
                                this.beginFill(0x2F4F4F);
                                this.lineStyle(4, 0xDCDCDC, 1);
                                this.drawRoundedRect(0, 0, 46, 31, 8);
                            }
                            //following part of code is being simplified
                            switch (clickCounter) { 
                                case 1: { firstPosition("-"); break; }
                                case 2: { firstPosition(1); secondPosition(9); break; }
                                case 3: { firstPosition("-"); secondPosition(2); thirdPosition(47); break; }
                                case 4: { firstPosition("-"); secondPosition(2); thirdPosition(5); fourthPosition(91); break; }
                                case 5: { firstPosition("-"); secondPosition("-"); thirdPosition(3); fourthPosition(12); fifthPosition(820); break; }
                                case 6: { firstPosition("-"); secondPosition("-"); thirdPosition(3); fourthPosition(4); fifthPosition(70); sixthPosition(1600); break; }
                                case 7: { firstPosition("-"); secondPosition("-"); thirdPosition(1); fourthPosition(2); fifthPosition(21); sixthPosition(400); seventhPosition(7000); break; }
                                case 8: { firstPosition("-"); secondPosition("-"); thirdPosition("-"); fourthPosition(2); fifthPosition(12); sixthPosition(100); seventhPosition(1650); eightPosition(10000); break; }
                                case 9: { firstPosition("-"); secondPosition("-"); thirdPosition("-"); fourthPosition(1); fifthPosition(6); sixthPosition(44); seventhPosition(335); eightPosition(4700); ninethPosition(10000); break; }
                                case 10: { firstPosition("-"); secondPosition("-"); thirdPosition("-"); fourthPosition("-"); fifthPosition(5); sixthPosition(24); seventhPosition(142); eightPosition(1000); ninethPosition(4500); tenthPosition(15000); break; }
                                case 11: { swal({ title: "that's enough!", text: "you can choose up to 10 numbers, click play and let's see how lucky you are", type: "error", confirmButtonText: "OK" }); clickCounter--; break; }
                            }
                        }
                        else {
                            clearArea();
                            ev.target.alpha = 1;
                            clickCounter -= 2;
                            switch (clickCounter) {
                                case 1: { firstPosition("-"); break; }
                                case 2: { firstPosition(1); secondPosition(9); break; }
                                case 3: { firstPosition("-"); secondPosition(2); thirdPosition(47); break; }
                                case 4: { firstPosition("-"); secondPosition(2); thirdPosition(5); fourthPosition(91); break; }
                                case 5: { firstPosition("-"); secondPosition("-"); thirdPosition(3); fourthPosition(12); fifthPosition(820); break; }
                                case 6: { firstPosition("-"); secondPosition("-"); thirdPosition(3); fourthPosition(4); fifthPosition(70); sixthPosition(1600); break; }
                                case 7: { firstPosition("-"); secondPosition("-"); thirdPosition(1); fourthPosition(2); fifthPosition(21); sixthPosition(400); seventhPosition(7000); break; }
                                case 8: { firstPosition("-"); secondPosition("-"); thirdPosition("-"); fourthPosition(2); fifthPosition(12); sixthPosition(100); seventhPosition(1650); eightPosition(10000); break; }
                                case 9: { firstPosition("-"); secondPosition("-"); thirdPosition("-"); fourthPosition(1); fifthPosition(6); sixthPosition(44); seventhPosition(335); eightPosition(4700); ninethPosition(10000); break; }
                            }

                        }
                    }
                    else swal({ title: "that's enough!", text: "you can choose up to 10 numbers, click play and let's see how lucky you are", type: "error", confirmButtonText: "OK" });
                    renderer.render(stage);
                }

                var number = new PIXI.Text(i, {
                    fontFamily: 'Arial',
                    fontSize: '26px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fill: '#D7DBDD',
                    stroke: '#4a1850',
                });

                number.position.set(7, 1);
                if (i < 10)
                    number.position.set(13, 1);
                if (text_y < 440)
                    stage.addChild(number);


                roundBox.lineStyle(4, 0xDCDCDC, 1);
                roundBox.drawRoundedRect(0, 0, 46, 31, 8);
                roundBox.endFill();
                roundBox.x = co_x;
                co_x += 48;
                text_x += 48;
                roundBox.y = co_y;
                if (roundBox.x > 480) {
                    co_x = 50;
                    text_x = 55;
                    co_y += 40;
                    text_y += 40;
                    if (i === 40) {
                        co_y += 40;
                        text_y += 40;
                    }
                }
                if (roundBox.y < 440) {
                    roundBox.addChild(number);
                    BoxesContainer.addChild(roundBox);
                }

            }

            stage.addChild(BoxesContainer);
        }

