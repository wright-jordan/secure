import { scrypt, timingSafeEqual } from "crypto";

/**
 * Compares a hash and password, returns true if they match.
 * @throws {@link Error}
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
    scrypt(plainText, salt, 64, (err, derivedKey) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(
        timingSafeEqual(
          Buffer.from(key),
          Buffer.from(derivedKey.toString("hex"))
        )
      );
    });
  });
}
