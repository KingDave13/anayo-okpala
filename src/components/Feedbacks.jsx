import { useState, useRef } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { textVariant, slideIn } from '../utils/motion';

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

const Feedbacks = () => {

const formRef = useRef();
const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
};

  return (
    <section className='relative w-full md:min-h-[320px] ss:min-h-[280px] 
    min-h-[230px] mx-auto flex items-center justify-center'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative items-center justify-center flex-col'>
        <motion.div variants={textVariant()} className='flex flex-col 
        relative w-full items-center'>
            <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[35px] text-[24px] tracking-tight'>
                Feedbacks and Suggestions
            </h1>

            <div className='flex relative'>
            <div className='bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] md:h-[10px] ss:h-[10px] h-[6px]' />
            </div>

            <p className='font-medium md:text-[20px] ss:text-[18px] 
            text-[14px] tracking-tight text-primary md:mt-5 ss:mt-3 mt-3
            md:leading-[25px] ss:leading-[20px] leading-[15px] text-center'>
                We'd love to know your thoughts about us and our products.
            </p>
        </motion.div>

        {modalOpen && (
            <Modal
            message={modalMessage}
            onClose={() => setModalOpen(false)}
            showOkButton={modalMessage !== 
            'Thanks for reaching out, we will be in touch.'}
        />
        )}

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
            className='flex bg-white bg-opacity-80 p-8 md:mt-10 ss:mt-10
            mt-5 rounded-2xl w-full'>
                <form ref={formRef} onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4
                        ss:mb-2 mb-2 md:text-[20px] ss:text-[18px] 
                        text-[14px]">
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg
                        placeholder:text-black-100 md:placeholder:text-[15px] 
                        ss:placeholder:text-[14px] placeholder:text-[12px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4
                        ss:mb-2 mb-2 md:text-[20px] ss:text-[18px] 
                        text-[14px]">
                        Phone Number
                        </label>
                        <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone(WhatsApp) number"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg
                        placeholder:text-black-100 md:placeholder:text-[15px] 
                        ss:placeholder:text-[14px] placeholder:text-[12px]"
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-primary font-bold md:mb-4
                        ss:mb-2 mb-2 md:text-[20px] ss:text-[18px] 
                        text-[14px]">
                        Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg
                        placeholder:text-black-100 md:placeholder:text-[15px] 
                        ss:placeholder:text-[14px] placeholder:text-[12px]"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-primary font-bold md:mb-4
                        ss:mb-2 mb-2 md:text-[20px] ss:text-[18px] 
                        text-[14px]">
                        Your Thoughts
                        </label>
                        <textarea
                        rows="5"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please leave us your thoughts"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg
                        placeholder:text-black-100 md:placeholder:text-[15px] 
                        ss:placeholder:text-[14px] placeholder:text-[12px]"
                        />
                    </div>

                    <div className="col-span-2">
                        <button
                        type="submit"
                        className="bg-primary grow2 mr-5 w-fit shadow-md 
                        md:text-[16px] ss:text-[16px] text-[12px] py-2 px-12 
                        text-white rounded-lg font-medium border-none hover:text-white"
                        >
                        {Loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </motion.div>
      </div>
    </section>
  )
};

export default SectionWrapper(Feedbacks, '');
