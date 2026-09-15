"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";

type FormStatus = "idle" | "submitting" | "success" | "error";

const NAME_MAX = 50;
const EMAIL_MAX = 254;
const MSG_MIN = 10;
const MSG_MAX = 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const nameValid = trimmedName.length >= 2 && trimmedName.length <= NAME_MAX;
  const emailValid = EMAIL_PATTERN.test(trimmedEmail) && trimmedEmail.length <= EMAIL_MAX;
  const messageValid = trimmedMessage.length >= MSG_MIN && trimmedMessage.length <= MSG_MAX;
  const isFormValid = nameValid && emailValid && messageValid;

  const nameTouched = trimmedName.length > 0;
  const emailTouched = trimmedEmail.length > 0;
  const messageTouched = trimmedMessage.length > 0;

  const nameShownInvalid = (nameTouched || submitAttempted) && !nameValid;
  const emailShownInvalid = (emailTouched || submitAttempted) && !emailValid;
  const messageShownInvalid = (messageTouched || submitAttempted) && !messageValid;
  const invalidSummary =
    [...(nameShownInvalid ? ["name"] : []), ...(emailShownInvalid ? ["email"] : []), ...(messageShownInvalid ? ["the message"] : [])] as const;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setSubmitAttempted(true);

    if (!isFormValid) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website,
        }),
      });

      const data = (await response.json().catch(() => null)) as { success?: boolean } | null;

      if (!response.ok || !data?.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setSubmitAttempted(false);
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setSubmitAttempted(false);
    setName("");
    setEmail("");
    setMessage("");
    setWebsite("");
  };

  return (
    <main className="contact-page">
      <SiteHeader />

      <div className="contact-page-hero">
        <div className="contact-page-scenery" aria-hidden="true" />

        <div className="page-shell contact-page-grid">
          <Reveal className="contact-page-left">
            <h1 className="contact-page-heading display-heading">
              <span>Let&apos;s make something</span>
              <span>cool together.</span>
            </h1>
          </Reveal>

          <Reveal className="contact-page-right" delayMs={120}>
            <div className="contact-form-card">
              {status === "success" && (
                <div className="contact-success" role="status">
                  <span className="contact-success-mark" aria-hidden="true">✓</span>
                  <h2 className="contact-success-title display-heading">Message sent!</h2>
                  <p className="contact-success-text">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                  <button type="button" className="button button-dark contact-success-back" onClick={handleReset}>
                    Send another <Arrow />
                  </button>
                </div>
              )}
              {status !== "success" && (
                <>
                  <div className="contact-form-head">
                <h2 className="contact-form-title display-heading">Send me a message</h2>
                <span className="contact-form-note" aria-hidden="true">tell me everything :D</span>
              </div>
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">your name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={name}
                      maxLength={NAME_MAX}
                      aria-invalid={nameShownInvalid}
                      aria-describedby="contact-name-meta"
                      onChange={(event) => setName(event.target.value)}
                      disabled={status === "submitting"}
                    />
                    <div className="contact-field-meta" id="contact-name-meta">
                      <span className="contact-field-status">
                        {nameShownInvalid && <span className="contact-field-error">at least 2 characters</span>}
                        {nameValid && <span className="contact-field-ok">looking good</span>}
                      </span>
                      <span className="contact-field-count">{name.length}/{NAME_MAX}</span>
                    </div>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">your email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={email}
                      maxLength={EMAIL_MAX}
                      aria-invalid={emailShownInvalid}
                      aria-describedby="contact-email-meta"
                      onChange={(event) => setEmail(event.target.value)}
                      disabled={status === "submitting"}
                    />
                    <div className="contact-field-meta" id="contact-email-meta">
                      <span className="contact-field-status">
                        {emailShownInvalid && <span className="contact-field-error">enter a valid email</span>}
                        {emailValid && <span className="contact-field-ok">looking good</span>}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-message">message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your idea…"
                    value={message}
                    maxLength={MSG_MAX}
                    aria-invalid={messageShownInvalid}
                    aria-describedby="contact-message-meta"
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={status === "submitting"}
                  />
                  <div className="contact-field-meta" id="contact-message-meta">
                    <span className="contact-field-status">
                      {messageShownInvalid && <span className="contact-field-error">at least 10 characters</span>}
                      {messageValid && <span className="contact-field-ok">looking good</span>}
                    </span>
                    <span className="contact-field-count">{message.length}/{MSG_MAX}</span>
                  </div>
                </div>

                <div className="contact-form-footer">
                  <button
                    className="button button-dark contact-submit"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"} <Arrow />
                  </button>
                  {status === "error" && (
                    <p className="contact-form-feedback contact-form-feedback--error" role="alert">
                      <span className="contact-form-feedback-mark" aria-hidden="true">✕</span>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  {submitAttempted && !isFormValid && status !== "submitting" && (
                    <p className="contact-form-feedback contact-form-feedback--error" role="alert">
                      <span className="contact-form-feedback-mark" aria-hidden="true">✕</span>
                      Please fix the {invalidSummary.length === 1 ? invalidSummary[0] : invalidSummary.join(" and ")}.
                    </p>
                  )}
                </div>
              </form>
              </>
            )}
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}