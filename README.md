# LOGLUV-ENCODING

Convert between xyY (where each channel is a floating poing value) and the LogLuv 32bit pixel format.

`LogLuv` is a pixel format consisting of a 1 bit sign, 15 bits of log2 encoded luminance, and two 8 bit chromanance channels (u* and v* from `CIE L*u*v*`.) This encoding was first used in the TIFF file format for the storage of high dynamic range image data in a compact form.

The name LogLuv is something of a misnomer since the `L` doesn't refer to the L* in `CIEL*u*v*` but rather is the scene-referred illuminance (the Y in `CIE XYZ`) that is logarithmically encoded. For clarity, the name should probably be `LogYuv` though I am sure Greg Ward had good reasons for chosing to name it as he did.

## Contents

* [Installation](#install)

* [Basic Usage](#basic-usage)

* [Versions](#versions)

* [License](#license---mit)

## Install

````bash
npm install logluv-encoding
````

..then `require` logluv-encoding:

````javascript
var logLuvEncoding = require('logluv-encoding');
````

## Basic Usage

```javascript
var logLuvEncoding = require('logluv-encoding');

var xyYColor = [0.3, 0.5, 10.9];

var logLuvColor = logLuvEncoding.fromFloats(xyYColor);

logLuvColor; //=> [ 58, 219, 67, 114 ]

logLuvEncoding.toFloats(logLuvColor); //=> [ 0.299.., 0.499.., 10.907.. ]

//- Notice that the decoded values are very close but NOT exactly the original values
//- This is a natural limitation of trying to store 24 bytes of data in just 4 bytes
```

## Versions

* [v0.5.0](https://github.com/imbcmdth/logluv-encoding/archive/v0.5.0.zip) Initial public release

## License - MIT

> Copyright (C) 2013 Jon-Carlos Rivera
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
