import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// kalau bikin file baru daftarin disini dulu bro
export * from './font'
export * from './mockApi'
export * from './generalTypes'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
