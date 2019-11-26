/* eslint import/no-extraneous-dependencies: 0 */
import fs from "fs";
import babel from "rollup-plugin-babel";
import babelPresetEnv from "@babel/preset-env";
import pkg from "./package.json";
import builtins from "rollup-plugin-node-builtins";
export default {
	input: "src/index.js",
	plugins: [
		babel({
			presets: [[babelPresetEnv, { modules: false }]],
			babelrc: false
		}),
		builtins()
	],
	output: [
		{
			file: "algorithms.js",
			format: "umd",
			name: pkg.name,
			banner: `/*!\n${String(fs.readFileSync("./LICENSE"))
				.trim()
				.split("\n")
				.map(l => ` * ${l}`)
				.join("\n")}\n */`
		}
	]
};
