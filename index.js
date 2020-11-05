const dns = require('dns');
const blacklist = require('./blacklist');

// Check disposable providers and DNS MX records
module.exports = function revokeIfRiskyEmail(email) {
  return new Promise((resolve, reject) => {
    // Extract domain
    const domain = email.split('@').pop();

    // Is disposable ?
    if (blacklist.includes(domain)) {
      const error = Error('Disposable email address');
      error.code = 'DISPOSABLE_EMAIL';
      reject(error);

    // Check DNS MX record
    } else {
      // Timeout
      const timer = setTimeout(() => {
        const error = Error('Timeout while checking MX records');
        error.code = 'RESOLVEMX_TIMEOUT';
        reject(error);
      }, 5000);

      // Try to resolve mx records
      dns.resolveMx(domain, err => {
        clearTimeout(timer);

        // Reject ?
        if (err) {
          const error = Error(err.message);
          error.code = 'NOMX_RECORD';

          reject(error);

        // ... resolve
        } else {
          resolve(email);
        }
      });
    }
  });
};
