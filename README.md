# age-calculator.js

small helper library that provides one an ability to get an age of a person

## Installation

```bash
  npm install age-calculator
```

## Usage

```javascript
  var ageCalculator = require('age-calculator');

  // Be careful: Javascript months start at 0 (so zero stands for january)
  var age = new Date(1987, 0, 8);
  console.log(ageCalculator.getAge(age));
  // output: 28
  console.log(ageCalculator.getAge('01-08-1987'));
  // output: 28
  console.log(ageCalculator.getAgeDate(age));
  // output: Sat Mar 05 2005 14:18:02 GMT-0500 (EST)
  console.log(ageCalculator.getAgeDate('01-08-1987'));
  // output: Sat Mar 05 2005 14:18:02 GMT-0500 (EST)

```

## Tests

```bash
  npm test
```

## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## Release History

* 0.0.1 Initial release
* 0.0.2 Changed structure of a module

## Legal

The MIT License (MIT)

Copyright (c) 2015 Roman Jurkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
