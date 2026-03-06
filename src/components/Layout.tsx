import { ReactNode } from "react";

type LayoutShellProps = {
  children: ReactNode;
};

export const LayoutShell = ({ children }: LayoutShellProps) => {
  return <div className="app-shell">{children}</div>;
};

type TopBarProps = {
  appName: string;
  progress: ReactNode;
  status: ReactNode;
};

export const TopBar = ({ appName, progress, status }: TopBarProps) => {
  return (
    <header className="top-bar">
      <div className="top-bar__left">
        <span className="top-bar__app-name">{appName}</span>
      </div>
      <div className="top-bar__center">{progress}</div>
      <div className="top-bar__right">{status}</div>
    </header>
  );
};

type ContextHeaderProps = {
  title: string;
  subtitle: string;
};

export const ContextHeader = ({ title, subtitle }: ContextHeaderProps) => {
  return (
    <section className="context-header">
      <div className="text-block stack-16">
        <h1 className="context-header__title">{title}</h1>
        <p className="context-header__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

type RegionProps = {
  children: ReactNode;
};

export const PrimaryWorkspace = ({ children }: RegionProps) => {
  return <main className="primary-workspace">{children}</main>;
};

export const SecondaryPanel = ({ children }: RegionProps) => {
  return <aside className="secondary-panel">{children}</aside>;
};

export const ProofFooter = () => {
  return (
    <footer className="proof-footer">
      <div className="proof-footer__content">
        <span className="proof-footer__label">Proof checklist</span>
        <ul className="proof-footer__list">
          <li>
            <span className="proof-footer__box" aria-hidden="true">
              □
            </span>
            <span>UI Built</span>
          </li>
          <li>
            <span className="proof-footer__box" aria-hidden="true">
              □
            </span>
            <span>Logic Working</span>
          </li>
          <li>
            <span className="proof-footer__box" aria-hidden="true">
              □
            </span>
            <span>Test Passed</span>
          </li>
          <li>
            <span className="proof-footer__box" aria-hidden="true">
              □
            </span>
            <span>Deployed</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

