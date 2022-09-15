import Image from 'next/image';

interface TechImage {
  src: string;
  techName: string;
  docsUrl?: string;
}

const techList: TechImage[] = [
  { src: '/images/javascript.svg', techName: 'JavaScript' },
  { src: '/images/react.svg', techName: 'React' },
  { src: '/images/typescript.svg', techName: 'TypeScript' },
  { src: '/images/svelte.svg', techName: 'Svelte' },
  { src: '/images/nextdotjs.svg', techName: 'Next.js' },
  { src: '/images/tailwindcss.svg', techName: 'Tailwind CSS' },
  { src: '/images/express.svg', techName: 'Express' },
  { src: '/images/sequelize.svg', techName: 'Sequelize' },
  { src: '/images/mongodb.svg', techName: 'MongoDB' },
  { src: '/images/vercel.svg', techName: 'Vercel' },
  { src: '/images/heroku.svg', techName: 'Heroku' },
  { src: '/images/amazonaws.svg', techName: 'Amazon AWS' },
];

const favoriteList = techList.map((item) => {
  return (
    <div className='rounded-lg bg-gray-100 shadow' key={item.techName}>
      <div className='px-4 py-2 text-center'>
        <Image
          src={item.src}
          alt={`${item.techName} logo`}
          width={50}
          height={50}
        />
        <p>{item.techName}</p>
      </div>
    </div>
  );
});

export default function FavoriteTech() {
  return (
    <div className='mx-auto w-1/2 max-w-7xl py-8 px-4 sm:py-8 sm:px-6 lg:px-8 '>
      <div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-slate-700 shadow'>
        <div className='border-b border-gray-200 px-4 py-5'>
          <h3 className='text-center text-lg font-medium leading-6 text-white'>
            Some of my favorite tech:
          </h3>
        </div>
        <div className='flex flex-col gap-2 p-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:p-6'>
          {favoriteList}
        </div>
      </div>
    </div>
  );
}
