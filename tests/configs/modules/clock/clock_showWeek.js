/* Magic Mirror Test config for default clock module
 *
 * By Johan Hammar
 * MIT Licensed.
 */
const configFactory = require("../../default.js");

const config = configFacory({
	timeFormat: 12,

	modules: [
		{
			module: "clock",
			position: "middle_center",
			config: {
				showWeek: true
			}
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
