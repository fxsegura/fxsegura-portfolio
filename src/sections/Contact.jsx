import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
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
                'service_cjge1sp', 
                'template_oo5vh5q', 
                {
                    from_name: form.name,
                    to_name: 'Francisco',
                    from_email: form.email,
                    to_email: 'fxsegura.dev@gmail.com',
                    message: form.message,
                },
                'AeK4JadoBPUoi4vHO'
            )
            setLoading(false);
            alert("Your message has been sent!");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch(error){
            setLoading(false);
            console.log(error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <section id="contact" className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {!isMobile && 
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>}
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