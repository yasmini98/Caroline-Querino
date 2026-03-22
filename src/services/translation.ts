import { CmsLanguage } from "../types/cms";

const languageMap: Record<CmsLanguage, string> = {
  "pt-BR": "pt",
  en: "en",
  es: "es",
};

function parseGoogleTranslateResponse(payload: unknown) {
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) {
    throw new Error("Resposta de traducao invalida.");
  }

  return payload[0]
    .map((part) => (Array.isArray(part) && typeof part[0] === "string" ? part[0] : ""))
    .join("")
    .trim();
}

export async function translateLiteralText(
  text: string,
  fromLanguage: CmsLanguage,
  toLanguage: CmsLanguage,
) {
  const value = text.trim();
  if (!value || fromLanguage === toLanguage) {
    return value;
  }

  const source = languageMap[fromLanguage];
  const target = languageMap[toLanguage];

  const endpoint =
    "https://translate.googleapis.com/translate_a/single" +
    `?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(value)}`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Falha ao traduzir (${response.status}).`);
  }

  const payload = (await response.json()) as unknown;
  const translated = parseGoogleTranslateResponse(payload);

  if (!translated) {
    throw new Error("Texto traduzido vazio.");
  }

  return translated;
}

export async function translateLiteralList(
  entries: string[],
  fromLanguage: CmsLanguage,
  toLanguage: CmsLanguage,
) {
  const translated = await Promise.all(
    entries.map(async (entry) => {
      const trimmed = entry.trim();
      if (!trimmed) {
        return "";
      }
      return translateLiteralText(trimmed, fromLanguage, toLanguage);
    }),
  );

  return translated.filter(Boolean);
}
