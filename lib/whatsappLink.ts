/**
 * Builds contextual wa.me links so every "WhatsApp Us" button says
 * something specific to the page it's on, instead of one generic message
 * everywhere. This is purely a link-building helper — it has nothing to
 * do with lib/whatsapp.ts, which sends server-side notifications TO the
 * Ajira Majuu team; this one builds the link a VISITOR clicks to message
 * Ajira Majuu FROM their own WhatsApp.
 */

const WHATSAPP_NUMBER = "254115614253";

function buildLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generalWhatsAppLink(): string {
  return buildLink("Hi Ajira Majuu, I would like information about overseas employment opportunities.");
}

export function destinationWhatsAppLink(countryName: string): string {
  return buildLink(`Hi Ajira Majuu, I would like to know about employment opportunities in ${countryName}.`);
}

export function jobWhatsAppLink(jobTitle: string, countryName: string): string {
  return buildLink(`Hi Ajira Majuu, I am interested in the ${jobTitle} opportunity in ${countryName}.`);
}
