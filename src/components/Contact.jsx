import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen flex justify-center px-4"
      style={{
        backgroundImage: `linear-gradient( -70deg, rgba(109, 40, 217, 0.9) 0%, rgba(109, 40, 217, 0.9) 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      <form
        method="POST"
        action="https://getform.io/f/2e8bfb49-40b7-428e-8bb9-560c70eb858a"
        className="flex flex-col max-w-[600px] w-full text-neutral-800"
      >
        <div className="pb-8 text-gray-300">
          <h2
            className={`text-4xl   font-bold inline-block border-b-4 border-violet-700 w-max mx-auto`}
          >
            Contact
          </h2>
          <p className="py-4">
            {"//"} Submit the form below or shoot me an email - mubasherali0331@gmail.com
          </p>
        </div>
        <input className={`bg-[#ccd6f6] p-2`} type="text" placeholder="Name" name="name" required />
        <input
          className={`my-4 p-2 bg-[#ccd6f6]`}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className={`bg-[#ccd6f6] p-2`}
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          className={`text-white border-2 hover:bg-violet-900 hover:border-violet-900 px-4 py-3 my-8 mx-auto flex items-center`}
        >
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
