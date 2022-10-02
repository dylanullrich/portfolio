import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <div className='flex  h-[calc(100vh-72px)] flex-col items-center justify-center'>
      <h2 className='text-lg font-semibold text-gray-500'>Hello, my name is</h2>

      <p className='mt-1 text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl lg:text-6xl'>
        Dylan Ullrich.
      </p>
      <p className=' mt-5 max-w-xl text-xl text-gray-500'>
        I am a Full Stack Developer.
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
