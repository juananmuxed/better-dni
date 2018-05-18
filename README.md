[![Build Status](https://travis-ci.org/singuerinc/better-dni.svg?branch=master)](https://travis-ci.org/singuerinc/better-dni)
[![Coverage Status](https://coveralls.io/repos/github/singuerinc/better-dni/badge.svg?branch=master)](https://coveralls.io/github/singuerinc/better-dni?branch=master)

![logo.svg](logo.svg)

Spanish DNI (NIE / NIF) validation

## Installation

```js
// npm
npm i better-dni

// yarn
yarn add better-dni
```

## Usage

```js
import { isValid, isNIE, isNIF } from 'better-dni';

isValid('Z7662566Y'); // => true
isNIE('x0000000a'); // => true
isNIF('00000000A'); // => true

// it also handle some common user input mistakes
isValid(' Z7662566Y    '); // => true
isValid('Z7662566-Y'); // => true
```
