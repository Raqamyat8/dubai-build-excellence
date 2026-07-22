import { CONTACT } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed z-40 bottom-5 end-5 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.28c-.29-.15-1.7-.84-1.97-.94-.26-.1-.46-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16 4C9.37 4 4 9.37 4 16c0 2.09.55 4.05 1.5 5.75L4 28l6.42-1.47A11.94 11.94 0 0016 28c6.63 0 12-5.37 12-12S22.63 4 16 4z" />
      </svg>
    </a>
  );
}
