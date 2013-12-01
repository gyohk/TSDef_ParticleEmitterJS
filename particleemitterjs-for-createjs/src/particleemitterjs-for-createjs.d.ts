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

declare module createjs {
    export enum ParticleEmitterState {
        Created  = 0,
        Running  = 1,
        Finished = 2
    }

    export enum ParticleEmitterType {
        Emit,
        OneShot
    }

    export class ParticleEmitter extends createjs.DisplayObject {
        constructor(image?: HTMLImageElement);
        
        // properties
        accelerationX: number;
        accelerationY: number;
        angle: number;
        angleVar: number;
        autoRemoveOnFinished: boolean;
        debugMode: boolean;
        duration: number;
        emissionRate: number;
        emitterType: ParticleEmitterType;
        endColor: number[];
        endColorVar: number[];
        endOpacity: number;
        endSize: number;
        endSizeVar: number;
        endSpin: number;
        endSpinVar: number;
        image: HTMLImageElement;
        life: number;
        lifeVar: number;
        maxParticles: number;
        positionVarX: number;
        positionVarY: number;
        radialAcceleration: number;
        radialAccelerationVar: number;
        speed: number;
        speedVar: number;
        startColor: number[];
        startColorVar: number[];
        startOpacity: number;
        startSize: number;
        startSizeVar: number;
        startSpin: number;
        startSpinVar: number;
        state: ParticleEmitterState;
        tangentalAcceleration: number;
        tangentalAccelerationVar: number;

        // methods
        reset(): void;

    }
}
