interface Job {
  companyName: string;
  jobTitle: string;
  timeActive: string;
  imgUrl: string;
}
export default function TextRight({
  companyName,
  jobTitle,
  timeActive,
  imgUrl,
}: Job) {
  return (
    <div className="relative flex h-16 w-full">
      <div className="absolute left-1/2 mx-auto h-16 w-16 flex-auto -translate-x-1/2 items-center justify-center">
        <img src={imgUrl} alt={`${companyName} logo`} width="64" height="64" />
      </div>
      <span className="px-1"></span>

      <div className="relative mx-auto place-self-center pl-64 text-center text-gray-300 sm:pl-96 md:pl-96 lg:pl-96">
        <p className="text-sm">{companyName}</p>
        <p className="text-md font-bold">{jobTitle}</p>
        <p className="text-xs font-light">{timeActive}</p>
      </div>
    </div>
  );
}
