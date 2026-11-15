
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "8801963279566"; // Replace with your WhatsApp number
    const message = "Hello, I want to know more about your properties.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:bg-[#1ebe5d]"
        >
            <MessageCircle size={28} />
        </a>
    );
}
