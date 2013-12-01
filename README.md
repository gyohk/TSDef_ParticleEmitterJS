TSDef_ParticleEmitterJS
=======================
[![Build Status](https://travis-ci.org/gyohk/TSDef_ParticleEmitterJS.png?branch=master)](https://travis-ci.org/gyohk/TSDef_ParticleEmitterJS)

TypeScript Definition of ParticleEmitterJS for CreateJS.

CreateJS用のParticleEmitterクラスをTypeScriptで使用するための定義ファイルです。

http://purplemonkeystudios.org/?page_id=9


使用方法
---------
[particleemitterjs-for-createjs.d.ts](particleemitterjs-for-createjs/src/particleemitterjs-for-createjs.d.ts)が定義ファイル本体です。

TypeScriptのプログラムから読み込んで使用してください。

なお、このファイル単独では動作せず、DefinitelyTypedのcreatejs.d.ts, easeljs.d.ts, tweenjs.d.ts, preloadjs.d.ts が必要です。
libディレクトリに同梱していますが、最新ではない可能性があります。以下のURLからダウンロードを行ってください。

[DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped)
