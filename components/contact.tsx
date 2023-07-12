import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_syfr02v',
          'template_1kyiqob',
          form.current,
          '3PyRiKcbWvw6C0JbO'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log('Message Sent');
         },
          (error) => {
            console.log(error.text);
          }
               
        );
        form.current.reset();
    }
    
  };

  return (
    <div id="Contact">
      <section className="w-full bg-gradient-to-r from-blue-400 to-emerald-400 min-h-screen flex flex-col sm:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="text-3xl w-full sm:w-1/2 px-10">
          <Image src={require('../public/assests/call.png')} alt="Contact Me" />
        </div>
        {/* Right Side */}
        <div className="shadow-lg bg-[hsla(0,0%,100%,0.55)] border border-1 border-blue-600 flex flex-col p-5 rounded-xl w-full sm:w-1/3 sm:mx-auto mt-5">
          <form id='myform' ref={form} onSubmit={sendEmail}>
            <h1 className="font-poppin font-extrabold text-2xl pb-4">Send Message</h1>
            <label className="uppercase font-inter font-bold text-sm">Name</label>
            <input
              className="my-2 border border-1 border-blue-300 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              required
            />
            <label className="uppercase font-inter font-bold text-sm">Email</label>
            <input
              className="my-2 border border-1 border-blue-300 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"
              type="email"
              name="from_email"
              placeholder="Please enter your email"
              required
            />

            <label className="uppercase font-inter font-bold text-sm">Message</label>
            <textarea
              className="resize-none my-2 border border-1 border-blue-300 p-3 rounded-md focus:outline-1 outline-blue-600 w-full"
              name="message"
              cols={40}
              rows={4}
              placeholder="Enter your message"
              defaultValue={''}
              required
            />

            <div className="flex flex-wrap">
              <button
                className="flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-medium px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                type="submit"
              >
                <span className="mr-2">Send</span>
  
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
