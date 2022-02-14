import crypto from "crypto";

/**
 * Compares a hash and password, returns true if they match.
 * @throws `Error`
 */
export async function verify(
  plainText: string,
  hash: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    if (typeof salt === "undefined" || typeof key === "undefined") {
      reject(new Error("hash must be formatted as 'salt:key'."));
      return;
    }
    crypto.scrypt(plainText, salt, 64, (err, derivedKey) => {
      if (err !== null) {
        reject(err);
        return;
      }
      resolve(
        crypto.timingSafeEqual(
          Buffer.from(key),
          Buffer.from(derivedKey.toString("hex"))
        )
      );
    });
  });
}
