import Image from 'next/image';
import Link from 'next/link';

interface Project {
  projectName: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function DescriptionLeft({
  projectName,
  description,
  imageUrl,
  url,
}: Project) {
  return (
    <div className='relative mt-24'>
      <div className='flex flex-col gap-4 lg:grid lg:grid-flow-row-dense lg:grid-cols-5 lg:items-center'>
        <div className='h-full rounded-lg bg-slate-700 p-6 lg:col-span-3'>
          <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
            {projectName}
          </h3>
          <p className='mt-3 max-w-xl text-lg text-gray-400'>{description}</p>
          <div className='max-w-fit py-3 hover:scale-110'>
            <Link href={url} passHref>
              <a className='cursor-pointer'>
                <Image
                  src='/images/GitHub-Mark-Light-120px-plus.png'
                  alt='Github logo that links to project'
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className='relative h-60 lg:col-span-2'>
          <Image
            className='rounded-md'
            layout='fill'
            src={imageUrl}
            alt={`${projectName} snapshot`}
          />
        </div>
      </div>
    </div>
  );
}
