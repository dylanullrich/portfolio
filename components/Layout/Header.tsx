import Image from 'next/image';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export default function Header() {
  return (
    <header className='bg-slate-800'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-teal-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <a href='#'>
              <span className='sr-only'>Get Ullrich or Die Trying</span>
              <h1 className='text-teal-500'>GUDT</h1>
              {/* <Image src='' alt='Get Ullrich or Die Trying Logo' /> */}
            </a>
          </div>
          <div className='ml-10 space-x-4'>
            <div className='ml-10 hidden space-x-8 lg:block'>
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-base font-medium text-gray-400 hover:text-gray-100'
                >
                  {link.name}
                </a>
              ))}
              <a
                href='#contact'
                className='rounded-md border-2 border-teal-400 bg-slate-800 px-2 py-1 text-base font-medium text-teal-400 shadow-sm
                shadow-teal-400
                transition ease-in-out
                hover:bg-teal-400
              hover:text-slate-800 hover:shadow-slate-200'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-base font-medium text-white hover:text-indigo-50'
            >
              {link.name}
            </a>
          ))}
          <a
            href='#contact'
            className='rounded-md border-2 border-teal-400 bg-slate-800 px-2 py-1 text-base font-medium text-teal-400 shadow-sm hover:bg-teal-400 hover:text-slate-800 focus:outline-none focus:ring-offset-2'
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
