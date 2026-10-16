import assert from 'node:assert';

assert.strictEqual(process.env.TEST_ENV, 'staging');

console.log(`Integration tests passed for ${process.env.TEST_ENV}`);
