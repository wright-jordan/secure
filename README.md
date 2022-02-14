# secure

Utility functions that utilize the node crypto module.

## Examples

### hash()

```
const result: string = await hash("password");
console.log(result); // Output: <salt>:<derivedKey>
```

### verify()

```
const isMatch: boolean = await verify("password", "<salt>:<derivedKey>");
```

## API Reference

`function hash(plainText: string): Promise<string>;`

`function verify(plainText: string, hash: string): Promise<boolean>;`
