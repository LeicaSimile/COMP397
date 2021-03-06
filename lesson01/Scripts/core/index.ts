// IIFE - Immediately Invoked Function Expression
(function(){

    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;

    function Init():void {
        console.log("Game Loaded!");
        Start();
    }

    function Start():void {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update); // calls every frame
        Main();
    }

    function Update():void {
        stage.update();
    }

    function Main():void {
        console.log("Starting game...");
    }

    window.onload = Init;

})();