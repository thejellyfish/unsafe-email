[![Version](https://img.shields.io/npm/v/@jollie/risky-email)](https://www.npmjs.com/package/@jollie/risky-email)
[![Licence](https://img.shields.io/npm/l/@jollie/risky-email)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/thejellyfish/risky-email)](https://travis-ci.org/github/thejellyfish/risky-email)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/risky-email)](https://codecov.io/gh/thejellyfish/risky-email)
[![Downloads](https://img.shields.io/npm/dt/@jollie/risky-email)](https://www.npmjs.com/package/@jollie/risky-email)

__*for internal use only - Draft idea to check trustworthiness of email account*__

# risky-email
Check if email is from disposable provider or has no DNS MX record

### Install

```bash
yarn add @jollie/risky-email
```
or
```bash
npm install @jollie/risky-email
```
### Usage

```javascript
const isRiskyEmail = require('@jollie/risky-email');

// Diposable email 
// Output "Risky email : Disposable email address"
isRiskyEmail('contact@yopmail.com')
  .then(() => console.log('Not risky'))
  .catch(error => console.log(`Risky email : ${error.message}`);
  
// Non-existent domain 
// Output "Risky email : queryMx ENOTFOUND he-llo-w-orld.com"
isRiskyEmail('contact@he-llo-w-orld.com')
  .then(() => console.log('Not risky'))
  .catch(error => console.log(`Risky email : ${error.message}`);
    
// Valid email -> Output "Not risky"
isRiskyEmail('contact@google.com')
  .then(() => console.log('Not risky'))
  .catch(error => console.log(`Risky email : ${error.message}`);
```

### Return value

Promise resolved with the email or rejected if risky email
