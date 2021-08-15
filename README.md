[![Version](https://img.shields.io/npm/v/@jollie/unsafe-email)](https://www.npmjs.com/package/@jollie/unsafe-email)
[![Licence](https://img.shields.io/npm/l/@jollie/unsafe-email)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/thejellyfish/unsafe-email)](https://travis-ci.org/github/thejellyfish/unsafe-email)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/unsafe-email)](https://codecov.io/gh/thejellyfish/unsafe-email)
[![Downloads](https://img.shields.io/npm/dt/@jollie/unsafe-email)](https://www.npmjs.com/package/@jollie/unsafe-email)

__*for internal use only - Draft idea to check trustworthiness of email account*__

# unsafe-email
Check if email is from disposable provider or has no DNS MX record

### Install

```bash
yarn add @jollie/unsafe-email
```
or
```bash
npm install @jollie/unsafe-email
```
### Usage

```javascript
const isUnsafeEmail = require('@jollie/unsafe-email');

// Diposable email 
// Output "Unsafe email : Disposable email address"
isUnsafeEmail('contact@yopmail.com')
  .then(() => console.log('Looks good'))
  .catch(error => console.log(`Unsafe email : ${error.message}`);
  
// Non-existent domain 
// Output "Unsafe email : queryMx ENOTFOUND he-llo-w-orld.com"
isUnsafeEmail('contact@he-llo-w-orld.com')
  .then(() => console.log('Looks good'))
  .catch(error => console.log(`Unsafe email : ${error.message}`);
    
// Valid email -> Output "Looks good"
isUnsafeEmail('contact@google.com')
  .then(() => console.log('Looks good'))
  .catch(error => console.log(`Unsafe email : ${error.message}`);
```

### Return value

Promise resolved with the email or rejected if unsafe email
