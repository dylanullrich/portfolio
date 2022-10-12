import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <div className='flex  h-[calc(100vh-72px)] flex-col items-center justify-center'>
      <p className='text-lg font-semibold text-gray-400'>Hi 👋, my name is</p>

      <h1 className='mt-1 text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl lg:text-6xl'>
        Dylan Ullrich.
      </h1>
      <p className='mt-1 flex max-w-xl items-center text-3xl font-bold text-sky-700 sm:text-4xl lg:text-5xl'>
        Full Stack Developer
      </p>

      <p className='mt-1 flex max-w-xl text-xl text-gray-400'>
        with an eye for the big picture.
      </p>
      <div className='flex gap-4'>
        <div className='py-3 hover:scale-110'>
          <Link href='https://github.com/dylanullrich/' passHref>
            <a className='cursor-pointer'>
              <Image
                src='/images/GitHub-Mark-Light-120px-plus.png'
                alt='link to github'
                width={32}
                height={32}
              />
            </a>
          </Link>
        </div>
        <div className='py-3 hover:scale-110'>
          <Link href='mailto:me@dylanullrich.com' passHref>
            <a className='cursor-pointer'>
              <Image
                src='/images/protonmail.svg'
                alt='link to linkedin'
                width={32}
                height={32}
              />
            </a>
          </Link>
        </div>
        <div className='py-3 hover:scale-110'>
          <Link href='https://www.linkedin.com/in/dsullrich/' passHref>
            <a className='cursor-pointer'>
              <Image
                src='/images/linkedin.svg'
                alt='link to linkedin'
                width={32}
                height={32}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
