type CopyPromptBoxProps = {
  title: string;
  body: string[];
};

export const CopyPromptBox = ({ title, body }: CopyPromptBoxProps) => {
  return (
    <section className="copy-prompt stack-16">
      <div className="stack-8">
        <h3 className="copy-prompt__title">{title}</h3>
        <p className="copy-prompt__hint">
          Use this text as a reference when extending the Job Notification App.
        </p>
      </div>
      <div className="copy-prompt__body">
        <ul className="copy-prompt__list">
          {body.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="ds-button ds-button--secondary copy-prompt__button"
        onClick={() => {
          const text = body.join(" ");
          void navigator.clipboard.writeText(text);
        }}
      >
        Copy brief
      </button>
    </section>
  );
};

