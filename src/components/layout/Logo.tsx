import Image from "next/image";

export default function Logo({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="grid justify-items-center pt-[76px]">
      <Image
        className={"mb-10"}
        src="/logo.svg"
        alt={"Logo"}
        width={194.45}
        height={204.08}
      ></Image>
      <h1 className={"font-recursive text-[#FF7575] text-[71px] text-center"}>
        {title}
      </h1>
      <h2 className={"text-[29px] text-center mb-20"}>{subtitle}</h2>
    </div>
  );
}
