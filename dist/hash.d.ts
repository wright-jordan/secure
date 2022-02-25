/**
 * Hashes plain text password into a hex encoded string with salt appended.
 * @throws {@link Error}
 */
export declare function hash(plainText: string): Promise<string>;
