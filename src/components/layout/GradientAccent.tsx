interface GradientAccentProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: "left" | "right";
}

export default function GradientAccent({ direction }: GradientAccentProps) {
  return (
    <div
      className={`absolute top-0 pointer-events-none w-29 h-10 to-[#232830] ${
        direction === "left"
          ? "left-0 bg-gradient-to-l"
          : "right-0 bg-gradient-to-r"
      }`}
    />
  );
}
