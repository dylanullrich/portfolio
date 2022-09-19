import Image from 'next/image';
import Link from 'next/link';

interface TechImage {
  src: string;
  techName: string;
  docsUrl: string;
}

const techList: TechImage[] = [
  {
    src: '/images/javascript.svg',
    techName: 'JavaScript',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    src: '/images/react.svg',
    techName: 'React',
    docsUrl: 'https://beta.reactjs.org/',
  },
  {
    src: '/images/typescript.svg',
    techName: 'TypeScript',
    docsUrl: 'https://www.typescriptlang.org/docs/',
  },
  {
    src: '/images/svelte.svg',
    techName: 'Svelte',
    docsUrl: 'https://svelte.dev/docs/',
  },
  {
    src: '/images/nextdotjs.svg',
    techName: 'Next.js',
    docsUrl: 'https://nextjs.org/docs/',
  },
  {
    src: '/images/tailwindcss.svg',
    techName: 'Tailwind',
    docsUrl: 'https://tailwindcss.com/docs/installation/',
  },
  {
    src: '/images/express.svg',
    techName: 'Express',
    docsUrl: 'https://expressjs.com/',
  },
  {
    src: '/images/sequelize.svg',
    techName: 'Sequelize',
    docsUrl: 'https://sequelize.org/docs/v6/',
  },
  {
    src: '/images/mongodb.svg',
    techName: 'MongoDB',
    docsUrl: 'https://www.mongodb.com/docs/',
  },
  {
    src: '/images/vercel.svg',
    techName: 'Vercel',
    docsUrl: 'https://vercel.com/docs/',
  },
  {
    src: '/images/heroku.svg',
    techName: 'Heroku',
    docsUrl: 'https://www.heroku.com/',
  },
  {
    src: '/images/amazonaws.svg',
    techName: 'AWS',
    docsUrl: 'https://docs.aws.amazon.com/',
  },
];

const favoriteList = techList.map((item) => {
  return (
    <div
      className='rounded-lg bg-gray-100 shadow hover:scale-110'
      key={item.techName}
    >
      <Link href={item.docsUrl} passHref>
        <a className='cursor-pointer'>
          <div className='p-2 text-center'>
            <Image
              src={item.src}
              alt={`${item.techName} logo`}
              width={50}
              height={50}
            />
            <p>{item.techName}</p>
          </div>
        </a>
      </Link>
    </div>
  );
});

export default function FavoriteTech() {
  return (
    <div className='mx-auto max-w-7xl py-8 sm:w-1/2 sm:py-4 sm:px-6'>
      <div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-slate-700 shadow'>
        <div className='border-b border-gray-200 px-4 py-5'>
          <h3 className='text-center text-lg font-medium leading-6 text-white'>
            Some of my favorite tech
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-2 p-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:p-6'>
          {favoriteList}
        </div>
      </div>
    </div>
  );
}
