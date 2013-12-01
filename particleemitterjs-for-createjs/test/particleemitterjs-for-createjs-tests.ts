// Type definitions for ParticleEmitterJS ver0.5.0
// Project: http://purplemonkeystudios.org/?page_id=9
// Definitions by: gyoh_k <https://github.com/gyoh_k>
// Definitions: https://github.com/gyoh_k/TSDef_ParticleEmitterJS

/*
    Copyright (c) 2013 gyoh_k
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// Particle class for CreateJS.
// Library documentation : http://purplemonkeystudios.org/?page_id=9

/// <reference path="../../lib/easeljs/easeljs.d.ts" />
/// <reference path="../src/particleemitterjs-for-createjs.d.ts" />

var canvas:HTMLCanvasElement;                 // the canvas element
var context: CanvasRenderingContext2D;        // the 2d context of the canvas
var stage: createjs.Stage;                    // the createjs stage
var emitter: createjs.ParticleEmitter;        // the emitter
var fpsLabel: createjs.Text;                  // label to show the current frames per second
var particleImage: HTMLImageElement;          // the image to use for each particle

function test_smoke() {
    loadAssets();
}

function loadAssets() {
    particleImage = new Image();
    particleImage.addEventListener("load", this.initCanvas);
    particleImage.src = "images/particle_base.png";

}

function initCanvas() {
    canvas = <HTMLCanvasElement>document.getElementById('particleEmitterCanvas');
    context = canvas.getContext("2d");
    stage = new createjs.Stage(canvas);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", update);

    addFPS();
    addParticleEmitter(canvas.width / 2, canvas.height / 2);
}

function addFPS() {
    fpsLabel = new createjs.Text("-- fps", "bold 14px Arial", "#BBBBBB");
    stage.addChild(fpsLabel);
}

function addParticleEmitter(x: number, y: number) {
    emitter = new createjs.ParticleEmitter(particleImage);
    emitter.emitterType = createjs.ParticleEmitterType.Emit;
    emitter.emissionRate = 30;
    emitter.maxParticles = 200;
    emitter.life = 3000;
    emitter.lifeVar = 1000;
    emitter.speed = 10;
    emitter.speedVar = 0;
    emitter.positionVarX = x;
    emitter.positionVarY = y;
    emitter.accelerationX = 0;
    emitter.accelerationY = 0;
    emitter.radialAcceleration = 0;
    emitter.radialAccelerationVar = 0;
    emitter.tangentalAcceleration = 0;
    emitter.tangentalAccelerationVar = 10;
    emitter.angle = 0;
    emitter.angleVar = 180;
    emitter.startSpin = 0;
    emitter.startSpinVar = 0;
    emitter.endSpin = null;
    emitter.endSpinVar = null;
    emitter.startColor = [150, 150, 150];
    emitter.startColorVar = [0, 0, 0];
    emitter.startOpacity = 1;
    emitter.endColor = null;
    emitter.endColorVar = null;
    emitter.endOpacity = 0;
    emitter.startSize = 20;
    emitter.startSizeVar = 0;
    emitter.endSize = 40;
    emitter.endSizeVar = null;

    stage.addChild(emitter);
}

function update() {
    fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
    stage.update();
}