const dns = require('dns');
const blacklist = require('./blacklist');

// Check disposable providers and DNS MX records
module.exports = function (email) {
  return new Promise((resolve, reject) => {
    // Extract domain
    const domain = email.split('@').pop();

    // Is disposable ?
    if (blacklist.includes(domain)) {
      reject(new TypeError('Disposable email address'));

    // Check DNS MX record
    } else {
      dns.resolveMx(domain, (error, addresses) => (
        error
          ? TypeError(error.message)
          : resolve(addresses)
      ));
    }
  });
};
