import { Truchet } from "./worklet.ts";

try {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore-next-line
	registerPaint("truchet", Truchet);
} catch (error) {
	console.log(error);
}
