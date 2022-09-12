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
    <>
      <div className='relative mt-12 sm:mt-16 lg:mt-24'>
        <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
          <div className='lg:col-start-2'>
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

          <div className='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
            <Image
              className='relative mx-auto rounded-md'
              width={490}
              height={550}
              src={imageUrl}
              alt={`${projectName} snapshot`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className='relative mt-12 sm:mt-16 lg:mt-24'>
  <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
    <div className='lg:col-start-2'>
      <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
        Captain Caption
      </h3>
      <p className='mt-3 text-lg text-gray-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
        obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
        quod quibusdam expedita nemo.
      </p>
    </div>

    <div className='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
      <Image
        className='relative mx-auto'
        width={490}
        height={550}
        src='https://tailwindui.com/img/features/feature-example-2.png'
        alt='logo'
      />
    </div>
  </div>
</div> */
}
