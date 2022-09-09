import Image from 'next/image';

export default function About() {
  return (
    <div className='mx-auto max-w-7xl bg-slate-800 px-4 sm:px-6'>
      <div className='relative'>
        <div
          className='absolute inset-0 flex items-center px-8'
          aria-hidden='true'
        >
          <div className='w-full border-t border-gray-500' />
        </div>
        <div className='relative py-6 px-2 sm:py-8 sm:px-6 lg:px-8'>
          <span
            id='about'
            className='bg-slate-800 pr-3 pl-3 text-lg font-medium text-gray-500'
          >
            About
          </span>
        </div>
      </div>

      <div className='sm: mx-auto max-w-7xl  justify-between px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='divide-y divide-gray-400 overflow-hidden rounded-lg bg-slate-800 shadow'>
            <div className='border-b border-white bg-slate-800 px-4 py-5 sm:px-6'>
              <h3 className='text-center text-lg font-medium leading-6 text-white'>
                A little about me...
              </h3>
            </div>
            <div className='px-4 py-5 text-gray-400 sm:p-6'>
              <p>
                Yes, there is so much stuff about me to put here. You will
                really love to work with me. You cannot wait! Yes, there is so
                much stuff about me to put here. You will really love to work
                with me. You cannot wait! Yes, there is so much stuff about me
                to put here. You will really love to work with me. You cannot
                wait!
              </p>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-slate-800 shadow'>
            <div className='border-b border-gray-200 bg-slate-800 px-4 py-5 sm:px-6'>
              <h3 className='text-center text-lg font-medium leading-6 text-white'>
                Tech I Love to Use
              </h3>
            </div>
            <div className='justify-center px-4 py-5 text-center sm:p-6'>
              <Image
                src='/images/React-icon.svg'
                alt='react-logo'
                width={50}
                height={50}
              />
              <Image
                src='/images/React-icon.svg'
                alt='react-logo'
                width={50}
                height={50}
              />
              <Image
                src='/images/React-icon.svg'
                alt='react-logo'
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
