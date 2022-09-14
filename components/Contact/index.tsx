interface FormData {
  name: { value: string };
  email: { value: string };
  message: { value: string };
}
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, email, message } = e.target as typeof e.target & FormData;
    setFormData({
      name: { value: name.value },
      email: { value: email.value },
      message: { value: message.value },
    });

    const res = await fetch('/api/formHandler', {
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res) {
      name.value = '';
      email.value = '';
      message.value = '';
    }

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  }

  return (
    <div className='overflow-hidden bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 lg:py-24'>
      <div className='relative mx-auto max-w-xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl'>
            Send me a message
          </h2>
          <p className='mt-4 text-lg leading-6 text-gray-500'>
            Please reach out and I will get back to you shortly!
          </p>
        </div>
        <div className='mt-12'>
          <form
            onSubmit={handleSubmit}
            className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-300'
              >
                Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  required
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  required
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-300'
              >
                Message
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  defaultValue={''}
                  required
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <button
                type='submit'
                className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
