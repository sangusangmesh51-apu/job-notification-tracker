type ProgressIndicatorProps = {
  current: number;
  total: number;
};

export const ProgressIndicator = ({ current, total }: ProgressIndicatorProps) => {
  return (
    <span className="progress-indicator">
      Step {current} / {total}
    </span>
  );
};

