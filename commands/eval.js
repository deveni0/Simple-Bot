import { createRequire } from 'module';
import { format } from 'util';

export default {
  command: [">", "=>"],
  prefixe: false,
  owner: true,
  async execute(m, { conn, cli }) {
    const body = m.text || '';
    const codeText = body.replace(/^(>|=>)\s*/, '').trim();

    if (!codeText) return m.reply('ex: => m');

    try {
      const require = createRequire(import.meta.url);
      const { subs } = require("../system/sub.js");
      const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor;

      const vars = {
        conn,
        cli,
        subs,
        m,
        reply: m.reply.bind(m),
        print: (...args) => m.reply(format(...args)),
        require,
        process,
        Array: CustomArray
      };

      let processedCode = body.startsWith('=>') ? `return (${codeText})` : codeText;

      const executeCode = new AsyncFunction(...Object.keys(vars), processedCode);
      let result = await executeCode(...Object.values(vars));

      if (result !== undefined) {
        await m.reply(format(result));
      }
    } catch (err) {
      await m.reply(`${err.message || err.stack || err}`);
    }
  }
};

class CustomArray extends Array {
  constructor(...args) {
    if (args.length === 1 && typeof args[0] === 'number') {
      super(Math.min(args[0], 10000));
    } else {
      super(...args);
    }
  }
}