import { Hexo } from "./worklet";

try {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore-next-line
	registerPaint("hexo", Hexo);
} catch (error) {
	console.log(error);
}
