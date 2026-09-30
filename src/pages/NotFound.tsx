import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <p className="font-mono text-sm text-accent dark:text-accent-dark">404</p>
      <h1 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl dark:text-ink-dark">
        This page doesn't exist.
      </h1>
      <p className="mt-4 text-muted dark:text-muted-dark">
        The page you're looking for may have moved or never existed.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block font-mono text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent dark:text-ink-dark dark:hover:decoration-accent-dark"
      >
        Back to home
      </Link>
    </section>
  );
}
