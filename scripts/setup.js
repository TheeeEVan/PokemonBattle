/*

setup.js
--------
Creates the vite config depending on which platform user is on

*/

// import modules
const fs = require('fs')

// check for repl flag
if (process.argv[2] == "repl") {
	fs.writeFileSync("./vite.config.js", `import reactRefresh from"@vitejs/plugin-react-refresh";export default{plugins:[reactRefresh()],server:{host:"0.0.0.0",hmr:{port:443}}};`)
	console.log("\x1b[47m\x1b[30m%s\x1b[0m", "Vite config written for repl.it!")
} else {
	fs.writeFileSync("./vite.config.js", `import reactRefresh from"@vitejs/plugin-react-refresh";export default{plugins:[reactRefresh()],server:{port:3e3,host:"localhost",protocal:"ws"}};`)
	console.log("\x1b[47m\x1b[30m%s\x1b[0m", "Vite config written for local machine!")
}