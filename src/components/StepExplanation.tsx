type StepExplanationProps = {
  stepLabel: string;
  title: string;
  description: string;
};

export const StepExplanation = ({
  stepLabel,
  title,
  description
}: StepExplanationProps) => {
  return (
    <section className="step-explanation stack-16">
      <span className="step-explanation__label">{stepLabel}</span>
      <h2 className="step-explanation__title">{title}</h2>
      <p className="step-explanation__description text-block">{description}</p>
    </section>
  );
};

