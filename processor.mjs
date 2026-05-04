// Sample handler with a Node 20 → 22 incompatible import-assertion pattern.
// rupture-bot's lambda-lifeline codemod will rewrite `assert {...}` to `with {...}`.
import config from './config.json' assert { type: 'json' };

export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, version: config.version, event }),
  };
};
