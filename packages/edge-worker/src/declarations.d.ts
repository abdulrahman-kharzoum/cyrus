declare module "zod-to-json-schema" {
	import { ZodSchema } from "zod";
	export function zodToJsonSchema(schema: ZodSchema<any>, options?: any): any;
	export default function zodToJsonSchema(schema: ZodSchema<any>, options?: any): any;
}