/** Merge class names (simple implementation, no clsx dependency needed) */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Format price for display */
export function formatPrice(price: number | 'free'): string {
  if (price === 'free') return 'Free';
  return `$${price.toFixed(2)}`;
}
