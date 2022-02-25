/**
 * Compares a hash and password, returns true if they match.
 * @throws {@link Error}
 */
export declare function verify(plainText: string, hash: string): Promise<boolean>;
