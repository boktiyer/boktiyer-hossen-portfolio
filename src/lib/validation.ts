/**
 * Contact form validation.
 * Used in BOTH the browser (instant feedback for the visitor) and on
 * the server (security — never trust data coming from a browser).
 */

export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const LIMITS = {
  name: { min: 2, max: 80 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function checkLength(
  value: string,
  label: string,
  limits: { min: number; max: number },
): string | undefined {
  if (!value) return `Please enter ${label.toLowerCase()}.`;
  if (value.length < limits.min)
    return `${label} must be at least ${limits.min} characters.`;
  if (value.length > limits.max)
    return `${label} must be under ${limits.max} characters.`;
  return undefined;
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  const name = checkLength(input.name.trim(), "Your name", LIMITS.name);
  if (name) errors.name = name;

  const email = input.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 254 || !EMAIL_PATTERN.test(email))
    errors.email = "Please enter a valid email address.";

  const subject = checkLength(input.subject.trim(), "A subject", LIMITS.subject);
  if (subject) errors.subject = subject;

  const message = checkLength(input.message.trim(), "A message", LIMITS.message);
  if (message) errors.message = message;

  return errors;
}

export function hasErrors(errors: ContactErrors) {
  return Object.keys(errors).length > 0;
}
