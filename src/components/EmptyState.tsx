type EmptyStateProps = {
  title: string;
  description: string;
};

export const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <section className="ds-state ds-state--empty">
      <div className="stack-8 text-block">
        <h4 className="ds-state__title">{title}</h4>
        <p className="ds-state__description">{description}</p>
      </div>
    </section>
  );
};

