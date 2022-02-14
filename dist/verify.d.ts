/**
 * Compares a hash and password, returns true if they match.
 * @throws {@link Error} if hash is not in \<salt\>:\<key\> format, or {@link crypto.scrypt()} throws.
 */
export declare function verify(plainText: string, hash: string): Promise<boolean>;
