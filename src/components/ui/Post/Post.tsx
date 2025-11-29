import Image from "next/image";
import { PostProps } from "@/Posts";

export default function Post({
  image,
  alt,
  title,
  description,
  date,
  category,
}: PostProps) {
  return (
    <div
      className={
        "text-[#0F1217] flex flex-col text-[19px] bg-white rounded-[22px] p-[26px]"
      }
    >
      <div className={"relative aspect-[19/9] mb-8 w-full"}>
        <Image
          className={"rounded-[22px] object-cover object-center"}
          src={`/writings-dev/${image ? image : "/images/placeholder.png"}`}
          alt={alt}
          fill
          sizes={"(max-width: 640px) 100vw, (max-width: 768px) 66vw, 33vw"}
        />
      </div>
      <p className={"font-bold pb-3"}>{title}</p>
      <p className={"pb-6"}>{description}</p>
      <div className={"flex mt-auto text-[16px] flex-nowrap space-x-5"}>
        <p>{date}</p>
        <p>•</p>
        <p>{category}</p>
      </div>
    </div>
  );
}
