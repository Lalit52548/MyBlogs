import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function isValidObjectId(value) {
  const regex = /^[0-9a-f]{24}$/; // Regular expression for a 12-byte hex string
  return regex.test(value);
}