import { useState } from "preact/hooks";

interface FormData {
  name: { value: string };
  email: { value: string };
  message: { value: string };
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>();
  const [submitted, setSubmitted] = useState<Boolean>(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);

    const { name, email, message } = e.target as typeof e.target & FormData;
    setFormData({
      name: { value: name.value },
      email: { value: email.value },
      message: { value: message.value },
    });

    const res = await fetch("/api/formHandler", {
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res) {
      name.value = "";
      email.value = "";
      message.value = "";
    }

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  }

  return (
    <section className="overflow-hidden px-4 pb-20 sm:px-12">
      <div className="relative mx-auto max-w-xl rounded-lg bg-slate-600 p-12 shadow-lg shadow-black">
        {!submitted ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Send a message
              </h2>
              <p className="mt-4 text-lg leading-6 text-teal-100">
                Reach out, and I will get back to you shortly.
              </p>
            </div>
            <div className="mt-12">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-teal-400 "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-center text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Thanks!
            </h3>
            <br />
            <p className="text-center text-xl tracking-tight text-gray-300">
              You will be receiving an email from me@dylanullrich.com.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
