/**
 * Hashes plain text password into a hex encoded string with salt appended.
 * @throws {@link Error} if {@link crypto.randomBytes()} or {@link crypto.scrypt()} throws.
 */
export declare function hash(plainText: string): Promise<string>;
