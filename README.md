[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/fetchjson)](https://www.npmjs.com/package/@jellyfish-commuting/fetchjson)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/fetchjson)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/fetchjson)](https://travis-ci.org/github/jellyfish-commuting/fetchjson)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/fetchjson)](https://codecov.io/gh/jellyfish-commuting/fetchjson)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/fetchjson)](https://www.npmjs.com/package/@jellyfish-commuting/fetchjson)

__*for internal use only - Just draft idea to easily fetch API in our apps*__

# isRiskyEmail
Check if email is from disposable provider or has no DNS MX record

### Install

```bash
yarn add @jellyfish-commuting/risky-email
```
or
```bash
npm install @jellyfish-commuting/risky-email
```
### Usage

```javascript
import isRiskyEmail from '@jellyfish-commuting/risky-email';

isRiskyEmail('contact@yopmail.com')
  .then(() => console.log('Not risky'))
  .catch(error => console.log(`Risky email : ${error.message}`);
  
isRiskyEmail('contact@no-mx-records-domain.com')
  .then(() => console.log('Not risky'))
  .catch(error => console.log(`Risky email : ${error.message}`);
```

### Return value

Promise resolve with dns records or reject if risky email
