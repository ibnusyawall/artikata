## Bahasadaring.com scrapper

> mencari arti kata dari kamus bahasadaring.com, kamus gaul yang bisa mencari arti kata terkini


```sh
npm i artikata
```

CJS
```js
const Artikata = require('artikata');

const kata = 'gweh';
Artikata(kata)
  .then(result => {
      console.log(result)
  })
  .catch(e => {
      console.log(e)
  })
```

ES6
```js
import Artikata from 'artikata';

const kata = 'gweh';

try {
    var result = await Artikata(kata);
    console.log(result)
} catch(e) {
    console.log(e)
}
```

