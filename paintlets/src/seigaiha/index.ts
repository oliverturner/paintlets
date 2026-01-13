import { Seigaiha } from "./worklet.ts";


try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  registerPaint("seigaiha", Seigaiha);
} catch (error) {
	console.log(error);
}
