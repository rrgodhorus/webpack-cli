"use strict";

const { run, extractSummary } = require("../../../testUtils");

test("found-many", () => {
	const { code, stdout, stderr } = run(__dirname, [
		"--config",
		"./webpack.config.js",
		"--config-name",
		"bar",
		"--output-filename",
		"[name].js",
		"--output-chunk-filename",
		"[id].chunk.js",
		"--target",
		"async-node",
		"--mode",
		"production"
	]);

	const summary = extractSummary(stdout);

	expect(code).toBe(0);
	expect(summary).toEqual(expect.anything());
	expect(summary).toContain("./index2.js");
	expect(summary).toContain("./index3.js");
	expect(stderr).toHaveLength(0);
	expect(summary).toMatchSnapshot();
});
