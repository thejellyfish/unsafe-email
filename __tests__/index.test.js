const isRiskyEmail = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('risky-email', () => {
  it('expect error for disposable email', () => {
    isRiskyEmail('sample@yopmail.fr').catch(e => expect(e).toMatch('error'));
    isRiskyEmail('sample@anonmails.de').catch(e => expect(e).toMatch('error'));
    isRiskyEmail('sample@jetable.net').catch(e => expect(e).toMatch('error'));
  });

  it('expect error for domain with no MX records', () => {
    isRiskyEmail('sample@sure-itsnot-exists.com').catch(e => expect(e).toMatch('error'));
    isRiskyEmail('sample@h-ell-o.com').catch(e => expect(e).toMatch('error'));
    isRiskyEmail('sample@facebook123.google.com').catch(e => expect(e).toMatch('error'));
  });

  it('expect valid email', () => {
    isRiskyEmail('the@jellyfish-commuting.com').then(addresses => expect(addresses).toBe(Array));
    isRiskyEmail('contact@google.com').then(addresses => expect(addresses).toBe(Array));
    isRiskyEmail('support@facebook.com').then(addresses => expect(addresses).toBe(Array));
  });
});
