#!/usr/bin/env node

const vorpal = require("vorpal")();

vorpal
	.command("in")
	.description("Put it into your bundle.")
	.action(
		(args, callback) => {

		}
	);

vorpal.parse(process.argv);
