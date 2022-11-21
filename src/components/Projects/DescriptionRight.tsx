interface Project {
  projectName: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function DescriptionRight({
  projectName,
  description,
  imageUrl,
  url,
}: Project) {
  return (
    <div className='mt-12 flex items-center space-x-4'>
      <img
        className='max-w-lg rounded-md'
        src={imageUrl}
        alt={`${projectName} snapshot`}
      />
      {/* CARD */}
      <div className='rounded-lg bg-slate-700 p-6'>
        <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
          {projectName}
        </h3>
        <p className='mt-3 max-w-xl text-lg text-gray-300'>{description}</p>
        <div className='h-12 w-12 py-2 hover:scale-110'>
          <a
            href={url}
            className='max-w-fit hover:scale-110'
          >
            <img
              src='/images/GitHub-Mark-Light-120px-plus.png'
              alt='Github logo that links to project'
              width='32'
              height='32'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
