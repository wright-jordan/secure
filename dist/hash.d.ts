/**
 * Hashes plain text password into a hex encoded string with salt appended.
 * @throws `Error`
 */
export declare function hash(plainText: string): Promise<string>;
