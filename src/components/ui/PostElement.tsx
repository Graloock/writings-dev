import Image from "next/image";
import { Post } from "@/Posts";

export default function PostElement({
  image,
  alt,
  title,
  description,
  date,
  category,
}: Post) {
  return (
    <div
      className={"font-poppins text-[#0F1217] bg-white rounded-[22px] p-[26px]"}
    >
      <Image
        className={"rounded-[22px]"}
        src={image ? image : "/images/placeholder.png"}
        alt={alt}
        height={160}
        width={337.08}
      />
      <p className={"font-bold"}>{title}</p>
      <p>{description}</p>
      <div className={"flex flex-nowrap"}>
        {date.toString()} • {category}
      </div>
    </div>
  );
}
