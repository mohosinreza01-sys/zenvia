
"use client";

import { FormEvent } from "react";
import { ArrowUpRight, Mail, Phone, Send, User } from "lucide-react";

type InquiryFormProps = {
    propertyTitle: string;
    propertyId: string;
    agentName: string;
    agentPhone: string;
    agentEmail: string;
};

export default function InquiryForm({
    propertyTitle,
    propertyId,
    agentName,
    agentPhone,
    agentEmail,
}: InquiryFormProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const phone = String(formData.get("phone") || "");
        const message = String(formData.get("message") || "");

        const whatsappNumber = agentPhone.replace(/\D/g, "");

        if (!whatsappNumber) {
            alert("Agent WhatsApp number is not available.");
            return;
        }

        const inquiryMessage = `
Hello ${agentName},

I am interested in this property.

Property: ${propertyTitle}
Property ID: ${propertyId}

My Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

Please contact me with more information.
    `.trim();

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            inquiryMessage
        )}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
        event.currentTarget.reset();
    }

    const inputClass =
        "w-full rounded-xl border border-[#e9e3dc] bg-[#fffaf4] px-4 py-3 text-sm text-[#202127] outline-none transition placeholder:text-[#aaa] focus:border-[#f36b35] focus:ring-2 focus:ring-[#f36b35]/10";

    return (
        <div className="rounded-2xl border border-[#eee8df] bg-white p-6 shadow-[0_10px_40px_rgba(32,33,39,0.04)]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f36b35]">
                Interested in this property?
            </p>

            <h3 className="mb-6 text-2xl font-semibold text-[#202127]">
                Send an Inquiry
            </h3>

            <div className="mb-6 border-b border-[#eee8df] pb-5">
                <p className="font-semibold text-[#202127]">{agentName}</p>
                <p className="mt-1 text-xs text-[#85858a]">
                    Property Consultant
                </p>

                <a
                    href={`tel:${agentPhone.replace(/\s/g, "")}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#f36b35] hover:text-[#e45b27]"
                >
                    <Phone size={15} />
                    {agentPhone}
                </a>

                <a
                    href={`mailto:${agentEmail}`}
                    className="mt-2 flex items-center gap-2 text-sm text-[#77777d] hover:text-[#f36b35]"
                >
                    <Mail size={15} />
                    {agentEmail}
                </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="inquiry-name"
                        className="mb-2 block text-sm font-medium text-[#303037]"
                    >
                        Your Name
                    </label>
                    <div className="relative">
                        <User
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]"
                        />
                        <input
                            id="inquiry-name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="name"
                            required
                            className={`${inputClass} pl-11`}
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="inquiry-email"
                        className="mb-2 block text-sm font-medium text-[#303037]"
                    >
                        Email Address
                    </label>
                    <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className={inputClass}
                    />
                </div>

                <div>
                    <label
                        htmlFor="inquiry-phone"
                        className="mb-2 block text-sm font-medium text-[#303037]"
                    >
                        Phone Number
                    </label>
                    <input
                        id="inquiry-phone"
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXXXXXXXX"
                        autoComplete="tel"
                        required
                        className={inputClass}
                    />
                </div>

                <div>
                    <label
                        htmlFor="inquiry-message"
                        className="mb-2 block text-sm font-medium text-[#303037]"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="inquiry-message"
                        name="message"
                        rows={4}
                        required
                        defaultValue={`Hello, I am interested in ${propertyTitle}. Please share more details.`}
                        className={`${inputClass} resize-none`}
                    />
                </div>

                <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f36b35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e45b27]"
                >
                    <Send size={17} />
                    Send Inquiry on WhatsApp
                    <ArrowUpRight size={17} />
                </button>
            </form>

            <p className="mt-4 text-center text-xs leading-5 text-[#999]">
                Your inquiry will open in WhatsApp for you to review and send.
            </p>
        </div>
    );
}
