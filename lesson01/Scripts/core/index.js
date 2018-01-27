// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    function Init() {
        console.log("Game Loaded!");
        Start();
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update); // calls every frame
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Starting game...");
    }
    window.onload = Init;
})();
//# sourceMappingURL=index.js.map