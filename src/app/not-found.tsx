import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-gradient text-8xl font-bold">404</p>
      <h1 className="font-display mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="text-muted mt-2 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-maroon hover:bg-burgundy mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to home
      </Link>
    </main>
  );
}
