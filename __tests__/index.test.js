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
    isRiskyEmail('john.smith@gmail.com').then(addresses => expect(Array.isArray(addresses)).toBe(true)),
    isRiskyEmail('john.smith@gmx.net').then(addresses => expect(Array.isArray(addresses)).toBe(true)),
  ]));
});
