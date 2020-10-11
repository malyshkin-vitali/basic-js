const CustomError = require("../extensions/custom-error");
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect === undefined || isDirect;
  }

  encrypt(txt, key) {
    if (!txt || !key) throw new Error();

    if(key.length < txt.length) {
      for (var i = 0; ; i++) {
        if (txt.length == i)
          i = 0;
        if (key.length == txt.length)
          break;
        key+=key[i];
      }
    }

    var cipher_txt="";

    txt = txt.toLowerCase();
    key = key.toLowerCase();

    var key_i = 0;
    for (var i = 0; i < txt.length; i++) {
      if (ALPHABET.includes(txt[i])) {
        var x = (ALPHABET.indexOf(txt[i]) + ALPHABET.indexOf(key[key_i]))%26
        cipher_txt+=ALPHABET[x];
        key_i++;
      } else {
        cipher_txt+=txt[i];
      }
    }
    return this.isDirect ? cipher_txt.toUpperCase() : cipher_txt.split('').reverse().join('').toUpperCase();
  }
  decrypt(txt, key) {
    if (!txt || !key) throw new Error();

    if(key.length < txt.length) {
      for (var i = 0; ; i++) {
        if (txt.length == i)
          i = 0;
        if (key.length == txt.length)
          break;
        key+=key[i];
      }
    }
    var original_txt="";

    txt = txt.toLowerCase();
    key = key.toLowerCase();

    var key_i = 0;
    for (var i = 0; i < txt.length && i < key.length; i++) {
      if (ALPHABET.includes(txt[i])) {
        var x = (ALPHABET.indexOf(txt[i]) - ALPHABET.indexOf(key[key_i]) + 26)%26
        original_txt+=ALPHABET[x];
        key_i++;
      } else {
        original_txt+=txt[i];
      }
    }
    return this.isDirect ? original_txt.toUpperCase() : original_txt.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
