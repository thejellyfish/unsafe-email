const dns = require('dns');
const blacklist = require('./blacklist');

// Check disposable providers and DNS MX records
module.exports = function (email) {
  return new Promise((resolve, reject) => {
    // Extract domain
    const domain = email.split('@').pop();

    // Is disposable ?
    if (blacklist.includes(domain)) {
      reject(TypeError('Disposable email address'));

    // Check DNS MX record
    } else {
      // Timeout
      const timer = setTimeout(() => reject(TypeError('Timeout while checking MX records')), 5000);

      // Try to resolve mx records
      dns.resolveMx(domain, error => {
        clearTimeout(timer);
        return error ? reject(TypeError(error.message)) : resolve(email);
      });
    }
  });
};
