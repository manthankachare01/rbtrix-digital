// Central place to update your WhatsApp business number and default message.
export const WHATSAPP_NUMBER = '919999999999'; // country code + number, no + or spaces

export function buildWhatsAppLink(message = "Hi RBTRIX Digital, I'd like to know more about your products.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
