interface PageProps {
  children?: React.ReactNode;
  selectedPage?: number;
}

export default function Page({ children, selectedPage }: PageProps) {
  return (
    <div
      className={`font-recursive text-2xl px-5 py-4 border-t-2
      ${children == selectedPage ? "text-[#FF7575] font-bold" : "text-[#909090] border-transparent"}`}
    >
      {children}
    </div>
  );
}
