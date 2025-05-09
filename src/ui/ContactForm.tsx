// // "use client";
// // import React, { useState } from "react";

// // const ContactForm = ({ setSuccessMessage }: any) => {
// //   let [username, setUsername] = useState("");
// //   let [email, setEmail] = useState("");
// //   let [message, setMessage] = useState("");
// //   let [errMessage, setErrMessage] = useState("");

// //   const emailValidation = (email: string) => {
// //     return String(email)
// //       .toLowerCase()
// //       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
// //   };

// //   // ============== Error message end here ================
// //   const handleSendDetails = (e: any) => {
// //     e.preventDefault();
// //     if (username === "") {
// //       setErrMessage("Your name is required!");
// //     } else if (email === "") {
// //       setErrMessage("Please give your Email");
// //     } else if (!emailValidation(email)) {
// //       setErrMessage("Give a Valid Email");
// //     } else if (message === "") {
// //       setErrMessage("Enter your Messages");
// //     } else {
// //       setUsername("");
// //       setEmail("");
// //       setMessage("");
// //       setSuccessMessage(
// //         `Hello dear ${username}. We received your message successfully. Additional details will send to you by your email at ${email} and our responsible personnel will contact you shortly. Thank you for your time.`
// //       );
// //     }
// //   };
// //   return (
// //     <>
// //       <div className="flex justify-between gap-1">
// //         <h4 className="text-secondaryColor text-lg mdl:text-xl mb-2">
// //           Contact Form
// //         </h4>
// //       </div>
// //       <div className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
// //         <input
// //           onChange={(e) => setUsername(e.target.value)}
// //           value={username}
// //           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
// //           type="text"
// //           placeholder="Your Full Name"
// //         />

// //         <input
// //           onChange={(e) => setEmail(e.target.value)}
// //           value={email}
// //           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
// //           type="email"
// //           placeholder="Your Email"
// //         />

// //         <textarea
// //           onChange={(e) => setMessage(e.target.value)}
// //           value={message}
// //           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 resize-none placeholder:uppercase"
// //           id=""
// //           cols={30}
// //           rows={5}
// //           placeholder="YOUR MESSAGE"
// //         />
// //       </div>
// //       {errMessage && (
// //         <h4 className="text-red-500 text-base text-center mt-10 py-1 rounded-sm bg-white px-4 font-semibold">
// //           {errMessage} !
// //         </h4>
// //       )}
// //       <button
// //         onClick={handleSendDetails}
// //         className="relative w-full text-lg font-semibold uppercase font-titleFont active:bg-secondaryColor tracking-[4px] border p-2 border-gray-800 mt-8 overflow-hidden group"
// //       >
// //         Send
// //         <span className="absolute w-full h-[1px] bg-secondaryColor left-0 top-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
// //         <span className="absolute w-full h-[1px] bg-secondaryColor left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
// //         <span className="absolute w-[1px] h-full bg-secondaryColor left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
// //         <span className="absolute w-[1px] h-full bg-secondaryColor right-0 bottom-0 -translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
// //       </button>
// //     </>
// //   );
// // };

// // export default ContactForm;


// "use client";
// import React, { useState } from "react";

// const ContactForm = ({ setSuccessMessage }: any) => {
//   let [username, setUsername] = useState("");
//   let [email, setEmail] = useState("");
//   let [message, setMessage] = useState("");
//   let [errMessage, setErrMessage] = useState("");
//   let [loading, setLoading] = useState(false);

//   const emailValidation = (email: string) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[\w.-]+@[\w.-]+\.\w{2,3}$/);
//   };

//   const handleSendDetails = async (e: any) => {
//     e.preventDefault();
//     setErrMessage("");
    
//     if (!username) {
//       setErrMessage("Your name is required!");
//       return;
//     }
//     if (!email) {
//       setErrMessage("Please provide your Email");
//       return;
//     }
//     if (!emailValidation(email)) {
//       setErrMessage("Provide a valid Email");
//       return;
//     }
//     if (!message) {
//       setErrMessage("Enter your message");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, email, message }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setSuccessMessage(`Hello ${username}, your message has been sent successfully!`);
//         setUsername("");
//         setEmail("");
//         setMessage("");
//       } else {
//         setErrMessage(result.error || "Failed to send the message. Try again later.");
//       }
//     } catch (error) {
//       setErrMessage("An unexpected error occurred. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="flex justify-between gap-1">
//         <h4 className="text-secondaryColor text-lg mdl:text-xl mb-2">Contact Form</h4>
//       </div>
//       <div className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
//         <input
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:uppercase"
//           type="text"
//           placeholder="Your Full Name"
//         />

//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:uppercase"
//           type="email"
//           placeholder="Your Email"
//         />

//         <textarea
//           onChange={(e) => setMessage(e.target.value)}
//           value={message}
//           className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor resize-none placeholder:uppercase"
//           cols={30}
//           rows={5}
//           placeholder="YOUR MESSAGE"
//         />
//       </div>
//       {errMessage && (
//         <h4 className="text-red-500 text-base text-center mt-4 py-1 bg-white px-4 font-semibold rounded-sm">
//           {errMessage} !
//         </h4>
//       )}
//       <button
//         onClick={handleSendDetails}
//         disabled={loading}
//         className="relative w-full text-lg font-semibold uppercase font-titleFont tracking-[4px] border p-2 border-gray-800 mt-8 overflow-hidden group disabled:opacity-50"
//       >
//         {loading ? "Sending..." : "Send"}
//       </button>
//     </>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from "react";

const ContactForm = ({ setSuccessMessage }: any) => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [errMessage, setErrMessage] = useState("");
  let [loading, setLoading] = useState(false);

  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSendDetails = async (e: any) => {
    e.preventDefault();

    if (!username) return setErrMessage("Your name is required!");
    if (!email) return setErrMessage("Please provide your Email");
    if (!emailValidation(email)) return setErrMessage("Provide a valid Email");
    if (!message) return setErrMessage("Enter your Message");

    setErrMessage("");
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "b06c81bc-1b96-4902-b0ee-9c3552a5c4f6"); // Replace with your Web3Forms access key
    formData.append("name", username);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setUsername("");
        setEmail("");
        setMessage("");
        setSuccessMessage(
          `Hello ${username}, we received your message. We'll contact you at ${email} soon.`
        );
      } else {
        setErrMessage("Error submitting the form. Please try again.");
      }
    } catch (error) {
      setErrMessage("Network error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-between gap-1">
        <h4 className="text-secondaryColor text-lg mdl:text-xl mb-2">
          Contact Form
        </h4>
      </div>
      <form onSubmit={handleSendDetails} className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor"
          type="text"
          placeholder="Your Full Name"
          required
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor"
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor resize-none"
          cols={30}
          rows={5}
          placeholder="Your Message"
          required
        />

        {errMessage && (
          <h4 className="text-red-500 text-base text-center mt-2 py-1 bg-white px-4 font-semibold">
            {errMessage} !
          </h4>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`relative w-full text-lg font-semibold uppercase font-titleFont tracking-[4px] border p-2 border-gray-800 mt-4 ${loading ? "bg-gray-500" : "hover:bg-secondaryColor"
            }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;