// lib/utils.js or lib/utils.ts
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
