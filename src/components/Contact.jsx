import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Modal = ({ message, onClose, showOkButton }) => {

  const enableScroll = () => {
    document.body.classList.remove('no-scroll');
  };

  const handleOkClick = () => {
    onClose();
    enableScroll();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center
     bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-xl flex flex-col
      items-center justify-center md:w-[400px] ss:w-[400px] w-[330px]
      md:h-[150px] ss:h-[150px] h-[100px]">
        <p className="text-center mb-4 font-medium text-primary">
          {message}
        </p>
        {showOkButton && (
          <button
            onClick={handleOkClick}
            className="bg-primary text-white w-[50%] py-2 rounded-md"
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [Loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const disableScroll = () => {
    document.body.classList.add('no-scroll');
  };

  const enableScroll = () => {
    document.body.classList.remove('no-scroll');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.phone 
      || !form.subject ) {
      setModalMessage('Please fill out all the required fields.');
      setModalOpen(true);
      disableScroll();
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_skvhseu',
      'template_bu4q17u',
      {
        from_name: form.name,
        to_name: 'Anayo Okpala Global Concept',
        from_email: form.email,
        to_email: 'contact@anayookpalaglobalconcept.com',
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      },
      'u4mJjP_i8Ayoq1SU-'
    )
    .then(
      () => {
        setLoading(false);
        setModalMessage('Thanks for reaching out, we will be in touch.');
        setModalOpen(true);
        disableScroll();

        setTimeout(() => {
          setModalOpen(false);
          enableScroll();
        }, 2000);

        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      },
      
      (error) => {
        setLoading(false);
        console.log(error);
        setModalMessage('Something went wrong');
        setModalOpen(true);
      }
    );
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex 
    gap-10 overflow-hidden'>

      {modalOpen && (
        <Modal
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        showOkButton={modalMessage !== 
          'Thanks for reaching out, we will be in touch.'}
      />
      )}

      <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
        className='flex-1 bg-dimWhite bg-opacity-40 p-8 md:mt-0 ss:mt-14
        mt-14'>
        <form ref={formRef} onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="text-primary font-bold mb-4">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="py-4 px-6 border-[1px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[14px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold mb-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="py-4 px-6 border-[1px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[14px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold mb-4">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone(WhatsApp) number"
              className="py-4 px-6 border-[1px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[13px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold mb-4">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter a subject"
              className="py-4 px-6 border-[1px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[14px]"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-primary font-bold mb-4">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="py-4 px-6 border-[1px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[14px]"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-primary grow2 mr-5 w-fit shadow-md 
              md:text-[16px] ss:text-[16px] text-[13px] py-2 px-12 
              text-white rounded-lg font-medium border-none hover:text-white"
            >
              {Loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
};

export default SectionWrapper(Contact, 'contact');
