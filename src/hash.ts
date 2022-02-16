import crypto from "crypto";

/**
 * Hashes plain text password into a hex encoded string with salt appended.
 * @throws `Error`
 */
export async function hash(plainText: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        reject(err);
        return;
      }
      const salt = buf.toString("hex");
      crypto.scrypt(plainText, salt, 64, (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(`${salt}:${derivedKey.toString("hex")}`);
      });
    });
  });
}
