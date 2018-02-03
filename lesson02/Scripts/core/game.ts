/// <reference path = "_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel:objects.Label;
  let btnClickMe:objects.Button;

  function Init():void {
    console.log("Initialization Started...");

    Start();
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update():void {
    stage.update(); // redraws the stage
  }

  function Main():void {
    console.log("Game Started...");

    helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#000000", 320, 240, true);
    stage.addChild(helloLabel);

    btnClickMe = new objects.Button("../Assets/sprites/clickMeButton.png", 320, 480);
    stage.addChild();
  }

  window.onload = Init;

})();
