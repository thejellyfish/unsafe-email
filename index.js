const dns = require('dns');
const blacklist = require('./blacklist');

// Check disposable providers and DNS MX records
module.exports = function (email) {
  return new Promise((resolve, reject) => {
    // Extract domain
    const domain = email.split('@').pop();

    // Is disposable ?
    if (blacklist.indexOf(domain) !== -1) {
      reject(new Error('Disposable email address'));

    // Check DNS MX record
    } else {
      dns.resolveMx(domain, (error, addresses) => (
        error
          ? reject(error)
          : resolve(addresses)
      ));
    }
  });
};
