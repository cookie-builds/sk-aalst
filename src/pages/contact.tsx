import { useCallback, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Section from "../components/section";

const Contact = () => {
  const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = (import.meta as any).env;
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Test Jonathan',
    email: 'jonathan.couck@weglow.world',
    message: 'Dit is een testbericht.',
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
    } = { name: null, email: null, message: null };

    if (formData.name.length > 50) newErrors.name = 'Naam mag maximaal 50 karakters bevatten.';
    if (!formData.email.includes('@')) newErrors.email = 'E-mail is ongeldig.';
    if (formData.message.length < 10) newErrors.message = 'Bericht moet minimaal 10 karakters bevatten.';

    setErrors(newErrors);
    return newErrors.name === null && newErrors.email === null && newErrors.message === null;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: null, email: null, message: null });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      if (!validateForm()) return;

      if (!formRef.current) {
        console.error("formRef is null");
        return;
      }

      setIsSubmitting(true);
      try {
        // Optionally initialize
        const response = await emailjs.sendForm(
          VITE_EMAILJS_SERVICE_ID,
          VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          { publicKey: VITE_EMAILJS_PUBLIC_KEY }
        );
        console.log('SUCCESS!', response.status, response.text);

        alert('Bericht verzonden!');
        resetForm();
      } catch (error) {
        console.error('EmailJS sendForm error:', error);
        alert('Er is iets misgelopen bij het verzenden van het bericht. Probeer later opnieuw.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, validateForm, resetForm, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY]
  );

  return (
    <Section title="Contact" bgColor="bg-white" textColor="text-blue-950" alignItems="items-start">
      <div>
        {/* your intro text */}
        Lorem ipsum dolor sit amet...
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full !p-4 bg-yellow-50 shadow-lg flex flex-col md:grid md:grid-cols-2 !mt-8 !gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold">Naam (kan ook anoniem)</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="text-red-600">{errors.name}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">E-mail (kan ook anoniem)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="text-red-600">{errors.email}</span>}
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-bold">Bericht</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            className="!h-40 resize-y"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <span className="text-red-600">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold !py-2 !px-4 w-fit col-span-2 !ml-auto"
        >
          Versturen
        </button>
      </form>
    </Section>
  );
};

export default Contact;
