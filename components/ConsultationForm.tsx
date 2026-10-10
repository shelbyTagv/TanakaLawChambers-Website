'use client';

import { useMemo, useState } from 'react';
import { settings } from '@/content/settings';
import { getServices, getStrings } from '@/lib/content';

export function ConsultationForm() {
  const [values, setValues] = useState({ fullName: '', phone: '', areaOfLaw: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const strings = getStrings();
  const services = getServices();

  const mailtoBody = useMemo(() => {
    const lines = [
      `Full name: ${values.fullName}`,
      `Phone or WhatsApp: ${values.phone}`,
      `Area of law: ${values.areaOfLaw || 'Not specified'}`,
      '',
      'Message:',
      values.message,
    ];
    return encodeURIComponent(lines.join('\n'));
  }, [values]);

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!values.fullName.trim()) nextErrors.fullName = strings.errors.required;
    if (!values.phone.trim()) nextErrors.phone = strings.errors.required;
    if (!values.areaOfLaw) nextErrors.areaOfLaw = strings.errors.required;
    if (!values.message.trim()) nextErrors.message = strings.errors.required;
    else if (values.message.trim().length < 12) nextErrors.message = strings.errors.shortMessage;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Consultation enquiry from ${values.fullName}`);
    const mailtoUrl = `mailto:${settings.email}?subject=${subject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    if (!validate()) return;
    const text = [
      `Full name: ${values.fullName}`,
      `Phone or WhatsApp: ${values.phone}`,
      `Area of law: ${values.areaOfLaw}`,
      '',
      'Message:',
      values.message,
    ].join('\n');
    await navigator.clipboard.writeText(text);
  };

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`${settings.whatsappPrefill}\n\nName: ${values.fullName}\nPhone: ${values.phone}\nArea of law: ${values.areaOfLaw}\nMessage: ${values.message}`)}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="form-grid glass-panel">
      <div>
        <label htmlFor="fullName">{strings.formLabels.fullName}</label>
        <input id="fullName" name="fullName" value={values.fullName} onChange={(event) => handleChange('fullName', event.target.value)} />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>

      <div>
        <label htmlFor="phone">{strings.formLabels.phone}</label>
        <input id="phone" name="phone" value={values.phone} onChange={(event) => handleChange('phone', event.target.value)} />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div>
        <label htmlFor="areaOfLaw">{strings.formLabels.areaOfLaw}</label>
        <select id="areaOfLaw" name="areaOfLaw" value={values.areaOfLaw} onChange={(event) => handleChange('areaOfLaw', event.target.value)}>
          <option value="">Select an area</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>{service.name}</option>
          ))}
        </select>
        {errors.areaOfLaw && <span className="error-message">{errors.areaOfLaw}</span>}
      </div>

      <div>
        <label htmlFor="message">{strings.formLabels.message}</label>
        <textarea id="message" name="message" value={values.message} onChange={(event) => handleChange('message', event.target.value)} />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <p>Please do not send confidential information in your first message.</p>

      <div className="form-actions">
        <button type="submit" className="button-primary">{strings.formLabels.send}</button>
        <button type="button" className="button-secondary" onClick={handleCopy}>{strings.formLabels.copyEnquiry}</button>
        <a href={whatsappUrl} className="button-secondary" target="_blank" rel="noreferrer">{strings.chatWhatsApp}</a>
      </div>

      <div>
        <strong>Email:</strong> <a href={`mailto:${settings.email}`}>{settings.email}</a>
      </div>
    </form>
  );
}
