import crypto from "crypto";
/**
 * Hashes plain text password into a hex encoded string with salt appended.
 * @throws {@link Error} if {@link crypto.randomBytes()} or {@link crypto.scrypt()} throws.
 */
export async function hash(plainText) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err !== null) {
                reject(err);
                return;
            }
            const salt = buf.toString("hex");
            crypto.scrypt(plainText, salt, 64, (err, derivedKey) => {
                if (err !== null) {
                    reject(err);
                    return;
                }
                resolve(`${salt}:${derivedKey.toString("hex")}`);
            });
        });
    });
}