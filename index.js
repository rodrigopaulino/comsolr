#!/usr/bin/env node

const vorpal = require("vorpal")();

vorpal
	.command("in")
	.description("Insert it into your bundle.")
	.action(
		(args, callback) => {

		}
	);

vorpal.parse(process.argv);
