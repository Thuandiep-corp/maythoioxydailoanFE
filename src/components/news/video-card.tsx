interface Props {
  data:Record<string,any>
}
export function VideoCard({ data }: Props) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe width="580" height="327" loading="lazy" src={ data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
        </div>
      <h3 className="font-bold text-base mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
        {data.title}
      </h3>
      <p className="text-slate-400 text-xs font-medium tracking-tight uppercase">{data.excerpt}</p>
    </div>
  );
}