export default function Spinner({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4" role="status">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm text-base-content/50">{label}</p>
    </div>
  );
}
