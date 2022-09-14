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
    </div>
  );
}
