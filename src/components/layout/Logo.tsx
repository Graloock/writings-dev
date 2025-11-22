import LogoIcon from "@/icons/LogoIcon";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export default function Logo({ title, subtitle, ...rest }: LogoProps) {
  return (
    <div className="grid justify-items-center pt-[76px]" {...rest}>
      <LogoIcon width={194.45} height={204.08} />
      <h1
        className={
          "font-recursive text-[#FF7575] text-5xl sm:text-7xl text-center"
        }
      >
        {title}
      </h1>
      <h2 className={"text-2xl sm:text-3xl text-center mb-20"}>{subtitle}</h2>
    </div>
  );
}
