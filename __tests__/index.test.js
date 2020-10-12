const isRiskyEmail = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('risky-email', () => {
  it('expect error for disposable email', () => Promise.all([
    isRiskyEmail('sample@yopmail.fr').catch(e => expect(e).not.toBeUndefined()),
    isRiskyEmail('sample@anonmails.de').catch(e => expect(e).not.toBeUndefined()),
    isRiskyEmail('sample@jetable.net').catch(e => expect(e).not.toBeUndefined()),
  ]));

  it('expect error for unknow domain', () => isRiskyEmail('sample@non-comp-any.fr').catch(e => expect(e).not.toBeUndefined()));

  it('expect valid email', () => Promise.all([
    isRiskyEmail('john.smith@gmail.com').then(email => expect(email).toBe('john.smith@gmail.com')),
    isRiskyEmail('john.smith@gmx.net').then(email => expect(email).toBe('john.smith@gmx.net')),
  ]));
});
