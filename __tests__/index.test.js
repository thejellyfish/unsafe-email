const isTricky = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('risky-email', () => {
  it('expect error for disposable email', () => Promise.all([
    isTricky('sample@yopmail.fr').catch(e => expect(e).not.toBeUndefined()),
    isTricky('sample@anonmails.de').catch(e => expect(e).not.toBeUndefined()),
    isTricky('sample@jetable.net').catch(e => expect(e).not.toBeUndefined()),
  ]));

  it('expect error for unknow domain', () => isTricky('sample@non-comp-any.fr').catch(e => expect(e).not.toBeUndefined()));

  it('expect valid email', () => Promise.all([
    isTricky('john.smith@gmail.com').then(email => expect(email).toBe('john.smith@gmail.com')),
    isTricky('john.smith@gmx.net').then(email => expect(email).toBe('john.smith@gmx.net')),
  ]));
});
