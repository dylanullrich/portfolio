export default function AboutMe() {
  return (
    <div className='mx-auto max-w-7xl py-8 sm:w-1/2 sm:py-4 sm:px-6'>
      <div className='h-full divide-y divide-gray-400 overflow-hidden rounded-lg bg-slate-700 shadow'>
        <div className='border-b border-white  px-4 py-5 sm:px-6'>
          <h3 className='text-center text-lg font-medium leading-6 text-white'>
            A little about me
          </h3>
        </div>
        <div className='p-4 text-gray-300 sm:flex sm:items-center sm:p-6 md:h-3/4'>
          <ul className='list-disc pl-4'>
            <li>Army Veteran.</li>
            <br />
            <li>I love to build things.</li>
            <br />
            <li>Open Source Enthusiast.</li>
            <br />
            <li>Entrepreneurship on my mind.</li>
            <br />
            <li>Always learning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
