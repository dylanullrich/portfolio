import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export default function Header() {
  return (
    <>
      <Head>
        <title>Get Ullrich or Die Trying</title>
        <script
          defer
          data-domain='dylanullrich.com'
          src='https://plausible.io/js/plausible.js'
        ></script>
      </Head>
      <header className='bg-slate-800'>
        <nav
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
          aria-label='Top'
        >
          <div className='flex w-full items-center justify-between border-b border-teal-500 py-6 lg:border-none'>
            <div className='flex items-center'>
              <Link href='/' passHref>
                <a>
                  <Image
                    src='/images/gudt-logo.svg'
                    width={100}
                    height={34}
                    alt='Get Ullrich or Die Trying Logo'
                    priority
                  />
                </a>
              </Link>
            </div>
            <div className='ml-10 space-x-4'>
              <div className='ml-10 hidden space-x-8 lg:block'>
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href} passHref>
                    <a className='text-base font-medium text-gray-400 hover:text-gray-100'>
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Link href='#contact' passHref>
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
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className='text-base font-medium text-gray-400 hover:text-gray-100'>
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href='#contact' passHref>
              <a
                className='rounded-md border-2 border-teal-400 bg-slate-800 px-2 py-1 text-base font-medium text-teal-400 shadow-sm
            shadow-teal-400
            transition ease-in-out
            hover:bg-teal-400
          hover:text-slate-800 hover:shadow-slate-200'
              >
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
