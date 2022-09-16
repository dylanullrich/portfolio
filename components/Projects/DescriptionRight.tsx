import Image from 'next/image';
import Link from 'next/link';

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
    <div className='relative mt-12 sm:mt-16 lg:mt-24'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:items-center lg:gap-4'>
        <div className='relative mx-auto mt-10 w-full  text-center lg:mt-0'>
          <Image
            className='relative rounded-md'
            width={250}
            height={300}
            src={imageUrl}
            alt={`${projectName} snapshot`}
          />
        </div>
        <div className='h-full rounded-lg bg-slate-700 p-6 lg:col-span-2'>
          <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
            {projectName}
          </h3>
          <p className='mt-3 max-w-xl text-lg text-gray-400'>{description}</p>
          <div className='py-3'>
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
      </div>
    </div>
  );
}
