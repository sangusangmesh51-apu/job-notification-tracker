import { PrimaryButton } from "./Button";

type ErrorStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export const ErrorState = ({
  title,
  description,
  actionLabel
}: ErrorStateProps) => {
  return (
    <section className="ds-state ds-state--error">
      <div className="stack-8 text-block">
        <h4 className="ds-state__title">{title}</h4>
        <p className="ds-state__description">{description}</p>
      </div>
      {actionLabel ? (
        <div className="ds-state__actions">
          <PrimaryButton type="button">{actionLabel}</PrimaryButton>
        </div>
      ) : null}
    </section>
  );
};

