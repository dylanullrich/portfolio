import Image from 'next/image';

export default function FavoriteTech() {
  return (
    <div className='mx-auto max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8'>
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
  );
}
