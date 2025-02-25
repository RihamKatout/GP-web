import { z } from "zod";

const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const choiceSchema = z.object({
  name: z.string().min(1, "Choice name cannot be empty"),
  priceImpact: z.number().min(0, "Price impact must be non-negative"),
});

export const attributeSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Attribute name cannot be empty"),
  type: z.enum(["COLOR", "SIZE", "OTHER"]),
  choices: z.array(choiceSchema).min(1, "At least one choice is required"),
}).refine((data) => {
  if (data.type === "COLOR") {
    return data.choices.every(choice => hexColorRegex.test(choice.name));
  }
  return true;
}, {
  message: "All color choices must be valid hex colors",
  path: ["choices"]
});

export const configurationSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Configuration name cannot be empty"),
  allowsMultipleUnits: z.boolean(),
  unitPriceImpact: z.number().min(0, "Unit price impact must be non-negative"),
  configurationAttributes: z.array(attributeSchema)
}).refine((data) => {
  return data.id === 0 || data.configurationAttributes.length > 0;
}, {
  message: "Non-default configurations must have at least one attribute",
  path: ["configurationAttributes"]
});

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(40, "Product name must be 40 characters or less"),
  description: z.string().min(1, "Description is required"),
  basePrice: z.number().min(0, "Base price must be non-negative"),
  isAvailable: z.boolean(),
  onDemand: z.boolean(),
  stock: z.number().min(0, "Stock must be non-negative"),
  stockEdge: z.number().min(0, "Minimum stock must be non-negative"),
  categoryId: z.number().nullable(),
  modelUrl: z.string().regex(urlRegex, "Invalid URL format").or(z.literal("")),
  is3dCustomizable: z.boolean(),
  configurations: z.array(configurationSchema)
});

export type ProductValidationSchema = z.infer<typeof productSchema>;
