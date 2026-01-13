import { Contour } from "./worklet.ts";

try {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore-next-line
	registerPaint("contour", Contour);
} catch (error) {
	console.log(error);
}
