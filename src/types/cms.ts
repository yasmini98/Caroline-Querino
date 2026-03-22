export type CmsLanguage = "pt-BR" | "en" | "es";

export type CmsArticle = {
  id: string;
  language: CmsLanguage;
  title: string;
  subtitle: string | null;
  preview: string;
  body: string[];
  authors: string[];
  image_url: string | null;
  source_label: string | null;
  source_url: string | null;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export type CmsOpinion = {
  id: string;
  language: CmsLanguage;
  title: string;
  body: string[];
  image_url: string | null;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export type CmsInterview = {
  id: string;
  language: CmsLanguage;
  title: string;
  image_url: string;
  href: string | null;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export type CmsUpcomingEvent = {
  id: string;
  language: CmsLanguage;
  date_label: string;
  sort_date: string | null;
  title: string;
  location: string;
  image_url: string | null;
  href: string | null;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export type CmsInsertArticle = Omit<CmsArticle, "id" | "created_at" | "updated_at">;
export type CmsInsertOpinion = Omit<CmsOpinion, "id" | "created_at" | "updated_at">;
export type CmsInsertInterview = Omit<CmsInterview, "id" | "created_at" | "updated_at">;
export type CmsInsertUpcomingEvent = Omit<CmsUpcomingEvent, "id" | "created_at" | "updated_at">;
