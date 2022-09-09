import { Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='relative bg-slate-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-500 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>Get Ullrich or Die Trying</span>
              <h1 className='text-teal-400'>GUDT</h1>
              {/* <Image
                className='h-8 w-auto sm:h-10'
                src=''
                alt='Get Ullrich or Die Trying Logo'
              /> */}
            </a>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                    )}
                  ></Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'></div>
                        <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'></div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#about'
              className='px-1 py-1 text-base font-medium text-gray-500 hover:text-gray-900'
            >
              About
            </a>

            <a
              href='#experience'
              className='px-1 py-1 text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Experience
            </a>

            <a
              href='#work'
              className='px-1 py-1 text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Work
            </a>

            <a
              href='#contact'
              className='border-color-indigo-600 rounded-md border-2 border-teal-400 bg-slate-800 px-2 py-1 text-base font-medium text-teal-400 shadow-sm hover:bg-teal-400 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Contact
            </a>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                    )}
                  ></Popover.Button>

                  {/* <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  > */}
                  {/* <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'></div>
                        <div className='bg-gray-50 px-5 py-5 sm:px-8 sm:py-8'>
                          <div>
                            <h3 className='text-base font-medium text-gray-500'>
                              Recent Posts
                            </h3>
                            <ul role='list' className='mt-4 space-y-4'></ul>
                          </div>
                          <div className='mt-5 text-sm'>
                            <a
                              href='#'
                              className='font-medium text-indigo-600 hover:text-indigo-500'
                            >
                              View all posts
                              <span aria-hidden='true'> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel> */}
                  {/* </Transition> */}
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h1>GUDT</h1>
                  <Image
                    className='h-8 w-auto'
                    src=''
                    alt='Get Ullrich or Die Trying'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#about'
                  className='px-1 py-1 text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  About
                </a>

                <a
                  href='#projects'
                  className='px-1 py-1 text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Projects
                </a>

                <a
                  href='#experience'
                  className='px-1 py-1 text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Experience
                </a>

                <a
                  href='#contact'
                  className='border-color-indigo-600 rounded-md border-2 border-indigo-600 bg-white px-1 py-1 text-base font-medium text-indigo-600 shadow-sm hover:border-teal-400 hover:bg-indigo-600 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
