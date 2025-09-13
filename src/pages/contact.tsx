import { useCallback, useState } from "react";
import emailjs from 'emailjs-com';
import Section from "../components/section"

const Contact = () => {
  const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID } = (import.meta as any).env;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{
    name: string | null;
    email: string | null;
    message: string | null;
  }>({
    name: null,
    email: null,
    message: null,
  });


  const validateForm = useCallback(() => {
    const newErrors: {
      name: string | null;
      email: string | null;
      message: string | null;
    } = {
      name: null,
      email: null,
      message: null,
    };

    if (formData.name.length > 50) newErrors.name = 'Naam mag maximaal 50 karakters bevatten.';
    if (!formData.email.includes('@')) newErrors.email = 'E-mail is ongeldig.';
    if (formData.message.length < 10) newErrors.message = 'Bericht moet minimaal 10 karakters bevatten.';

    setErrors(newErrors);
    return newErrors.name === null && newErrors.email === null && newErrors.message === null;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrors({
      name: null,
      email: null,
      message: null,
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;
    setIsSubmitting(true);

    await emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, formData);
    
    alert('Bericht verzonden!');
    resetForm();
    setIsSubmitting(false);
  }, [isSubmitting, validateForm, resetForm]);

  return (
    <Section title="Contact" bgColor="bg-white" textColor="text-blue-950" alignItems="items-start">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <form className="w-full !p-4 bg-yellow-50 shadow-lg flex flex-col md:grid md:grid-cols-2 !mt-8 !gap-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold">Naam (kan ook anoniem)</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <span v-if="errors.name" className="text-red-600">{ errors.name }</span>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">E-mail (kan ook anoniem)</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <span v-if="errors.email" className="text-red-600">{ errors.email }</span>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-bold">Bericht</label>
          <textarea
            id="message"
            value={formData.message}
            className="!h-40 resize-y"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <span v-if="errors.message" className="text-red-600">{ errors.message }</span>
        </div>

        <button type="submit" disabled={isSubmitting} onClick={handleSubmit} className="bg-blue-800 hover:bg-blue-900 text-white font-bold !py-2 !px-4 w-fit col-span-2 !ml-auto">Versturen</button>
      </form>
    </Section>
  )
};

export default Contact