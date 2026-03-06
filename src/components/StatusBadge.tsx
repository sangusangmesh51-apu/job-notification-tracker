type Status = "Not Started" | "In Progress" | "Shipped";

type StatusBadgeProps = {
  status: Status;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <span className={`status-badge status-badge--${status.replace(" ", "-").toLowerCase()}`}>{status}</span>;
};

