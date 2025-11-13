export default function Separator({ className }: { className?: string }) {
  return (
    <div
      className={`min-w-screen border-t border-[#4D4D4D] margin-negative ${className}`}
    />
  );
}
