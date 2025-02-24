import CryptoJS from 'crypto-js';

const ALGORITHM = 'AES';
const KEY_SIZE = 256 / 8;
const AES_PADDING = CryptoJS.pad.Pkcs7;
const IV_SIZE = 16;

export const generateKey = () => {
    return CryptoJS.lib.WordArray.random(KEY_SIZE);
};

export const encryptAes = (plaintext, key) => {
    const iv = CryptoJS.lib.WordArray.random(IV_SIZE);
    const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        iv: iv,
        padding: AES_PADDING,
        mode: CryptoJS.mode.CBC,
    });

    const ivHex = iv.toString(CryptoJS.enc.Hex);
    const encryptedHex = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    return ivHex + encryptedHex;
};


export const decryptAes = (encryptedText, key) => {
    try {
        const ivHex = encryptedText.substring(0, IV_SIZE * 2);
        const ciphertextHex = encryptedText.substring(IV_SIZE * 2);

        const iv = CryptoJS.enc.Hex.parse(ivHex);
        const ciphertext = CryptoJS.enc.Hex.parse(ciphertextHex);

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
            iv: iv,
            padding: AES_PADDING,
            mode: CryptoJS.mode.CBC,
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.log('error : ' + error)
    }

};
