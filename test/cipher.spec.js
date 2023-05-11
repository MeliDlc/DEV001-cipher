
import cipher from '../src/cipher.js';

describe('cipher', () => {

  it('debería ser un objeto', () => {
    expect(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

});

    
