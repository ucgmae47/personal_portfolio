import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = { name: "", email: "", subject: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setStatus("submitting");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="mx-auto text-emerald-500" size={48} />
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Thanks for reaching out!
        </h3>
        <p className="mt-2 text-slate-600">
          Your message has been sent. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Name" error={errors.name}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`${fieldClass} ${
            errors.name ? "border-red-400" : "border-slate-200"
          }`}
          placeholder="Jane Doe"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`${fieldClass} ${
            errors.email ? "border-red-400" : "border-slate-200"
          }`}
          placeholder="jane@example.com"
        />
      </Field>

      <Field label="Subject" optional>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${fieldClass} border-slate-200`}
          placeholder="What's this about?"
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none ${
            errors.message ? "border-red-400" : "border-slate-200"
          }`}
          placeholder="Tell me a little about what you have in mind…"
        />
      </Field>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

function Field({ label, error, optional, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
        {label}
        {optional && (
          <span className="text-xs font-normal text-slate-400">(optional)</span>
        )}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-500">{error}</span>}
    </label>
  );
}

export default ContactForm;
