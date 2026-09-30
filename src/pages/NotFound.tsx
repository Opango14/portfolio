import { ButtonLink } from "../components/ButtonLink";
import { PageHeader } from "../components/PageHeader";

export function NotFound() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        label="404 // Not Found"
        pill="Signal Lost · Page Not Found"
        title={
          <>
            <span>This page</span>
            <br />
            <span className="text-[var(--color-accent)]">
              doesn&apos;t exist.
            </span>
          </>
        }
        description="The page you&apos;re looking for may have moved or never existed. Head back home, or jump straight to the work."
      />

      <section className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3">
          <ButtonLink to="/">
            <span>Back to Home</span>
            <span>→</span>
          </ButtonLink>
          <ButtonLink to="/work" variant="paper">
            <span>Explore Work</span>
            <span>↗</span>
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
