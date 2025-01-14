import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]: value})
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
                {
                    from_name: form.name,
                    to_name: 'Francisco',
                    from_email: form.email,
                    to_email: 'fxsegura.dev@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setLoading(false);
            showAlert({
                show: true,
                text: 'Thank you for your message 😃',
                type: 'success',
              });
            setTimeout(() => {
                hideAlert(false);
                setForm({
                  name: '',
                  email: '',
                  message: '',
                });
              }, [3000]);
        } catch(error){
            setLoading(false);
            console.error(error);
            showAlert({
                show: true,
                text: 'Something went wrong, please try again later! 😞',
                type: 'danger',
            });
        }
    };

    return (
        <section id="contact" className="c-space my-20">
            {alert.show && <Alert {...alert} />}
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* {!isMobile && 
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>} */}
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to hire, collaborate on a project, or just want to say hi, I'd love to hear from you.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7" >
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John Doe" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="johndoe@email.com" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi, I want to give you a job!" />
                        </label>
                        
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;