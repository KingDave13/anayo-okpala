import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Modal = ({ message, onClose, showOkButton }) => {

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.top = '0';
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const disableScroll = () => {
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.top = '0';
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
    <div className='xl:mt-12 flex-col flex 
    gap-10 overflow-hidden'>

      {modalOpen && (
        <Modal
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        showOkButton={modalMessage !== 
          'Thanks for reaching out, we will be in touch.'}
      />
      )}

<motion.div variants={textVariant()} className='grid grid-cols-1 
md:grid-cols-2 md:mt-10 ss:mt-14 mt-20 bg-dimWhite rounded sm:px-8 
px-6 sm:py-8 py-6 md:gap-2 ss:gap-2 gap-0'>
  <div className="flex flex-col">
    <p className='text-primary font-bold md:text-[20px] ss:text-[20px] 
    text-[15px] md:leading-[23px] ss:leading-[23px] leading-[18px]'>
      <span className='text-secondary font-bold'>Email: </span> 
      <a href='mailto:Anasconigltd@yahoo.com' 
      className='hover:text-secondary'>Anasconigltd@yahoo.com, </a>
      <a href='mailto:contact@anayookpalaglobalconcept.com' 
      className='hover:text-secondary'>
        contact@anayookpalaglobalconcept.com
      </a>
    </p>
    <p className='text-primary font-bold md:text-[20px] ss:text-[20px] 
    text-[14px] md:leading-[23px] ss:leading-[23px] leading-[17px] 
    md:mt-3 ss:mt-3 mt-2'>
      <span className='text-secondary font-bold'>Phone: </span> 
      <a href='http://wa.me/2348037002296' className='hover:text-secondary'>
        08037002296,</a> 08035895253, 
      08134353345.
    </p>
  </div>

  <div className="flex flex-col">
    <p className='text-primary font-bold md:text-[20px] ss:text-[20px] 
    text-[14px] md:leading-[23px] ss:leading-[23px] leading-[17px]
    md:mt-0 ss:mt-1 mt-2'>
      <span className='text-secondary font-bold'>Head Office: </span> 
      No. 101 Ibrahim Taiwo Road by Sani Ungogo, Kano State.
    </p>
    <p className='text-primary font-bold md:text-[20px] ss:text-[20px] 
    text-[14px] md:leading-[23px] ss:leading-[23px] leading-[17px] 
    md:mt-3 ss:mt-3 mt-2'>
      <span className='text-secondary font-bold'>Branch Office: </span> 
      No 9 Festing Road, Sabon Gari, Kano State.
    </p>
  </div>
</motion.div>



      <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
        className='flex-1 bg-dimWhite bg-opacity-40 p-8 md:mt-0 ss:mt-5
        mt-0'>
        <form ref={formRef} onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
            md:text-[20px] ss:text-[18px] text-[14px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
              outline-none text-black rounded-lg placeholder:text-black-100 
              md:placeholder:text-[15px] ss:placeholder:text-[14px] 
              placeholder:text-[12px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
            md:text-[20px] ss:text-[18px] text-[14px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
              outline-none text-black rounded-lg placeholder:text-black-100 
              md:placeholder:text-[15px] ss:placeholder:text-[14px] 
              placeholder:text-[12px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
            md:text-[20px] ss:text-[18px] text-[14px]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone(WhatsApp) number"
              className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
              outline-none text-black rounded-lg placeholder:text-black-100 
              md:placeholder:text-[15px] ss:placeholder:text-[14px] 
              placeholder:text-[12px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
            md:text-[20px] ss:text-[18px] text-[14px]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter a subject"
              className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
              outline-none text-black rounded-lg placeholder:text-black-100 
              md:placeholder:text-[15px] ss:placeholder:text-[14px] 
              placeholder:text-[12px]"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
            md:text-[20px] ss:text-[18px] text-[14px]">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
              outline-none text-black rounded-lg placeholder:text-black-100 
              md:placeholder:text-[15px] ss:placeholder:text-[14px] 
              placeholder:text-[12px]"
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
