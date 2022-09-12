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
    <>
      <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
        <div className='relative'>
          <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
            {projectName}
          </h3>
          <p className='mt-3 text-lg text-gray-400'>{description}</p>
          <div className='py-6'>
            <a className='cursor-pointer'>
              <Link href={url}>
                <Image
                  src='/images/GitHub-Mark-Light-120px-plus.png'
                  alt='Github logo that links to project'
                  width={64}
                  height={64}
                />
              </Link>
            </a>
          </div>
        </div>

        <div className='relative -mx-4 mt-10 lg:mt-0' aria-hidden='true'>
          <Image
            className='relative mx-auto w-auto rounded-md'
            width={490}
            height={550}
            src={imageUrl}
            alt={`${projectName} app photo`}
          />
        </div>
      </div>
    </>
  );
}
