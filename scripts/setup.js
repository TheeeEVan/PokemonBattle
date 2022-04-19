const isREPL = process.execArgv.includes("-i") || process.argv.length === 1;

console.log(isREPL ? "You're in the REPL" : "You're running a script m8");