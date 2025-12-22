/**
 * Generates default password according to spec:
 * - First character of fullName (uppercase if applicable)
 * - + last 4 digits of nationalId
 *
 * Supports Persian/Arabic digits in nationalId.
 */
export function generateDefaultPassword(fullName: string, nationalId: string): string {
  const name = (fullName ?? '').trim();
  const firstChar = name.length > 0 ? name[0].toUpperCase() : 'X';

  const normalized = normalizeDigits(nationalId ?? '');
  const digitsOnly = normalized.replace(/[^0-9]/g, '');
  const last4 = digitsOnly.slice(-4).padStart(4, '0');

  return `${firstChar}${last4}`;
}

function normalizeDigits(input: string): string {
  const persian = '۰۱۲۳۴۵۶۷۸۹';
  const arabic = '٠١٢٣٤٥٦٧٨٩';

  return input
    .replace(/[۰-۹]/g, (d) => String(persian.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(arabic.indexOf(d)));
}
