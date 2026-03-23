import { getSupabaseClient } from "../lib/supabase";
import {
  CmsArticle,
  CmsInsertArticle,
  CmsInsertInterview,
  CmsInsertOpinion,
  CmsInsertUpcomingEvent,
  CmsInterview,
  CmsLanguage,
  CmsOpinion,
  CmsUpcomingEvent,
} from "../types/cms";

const TABLES = {
  articles: "cms_articles",
  opinions: "cms_opinions",
  interviews: "cms_interviews",
  upcomingEvents: "cms_upcoming_events",
} as const;

function requireClient() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error("Supabase nao configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.");
  }
  return client;
}

async function runSelect<T>(query: PromiseLike<{ data: T[] | null; error: any }>) {
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function listPublicArticles(language: CmsLanguage) {
  const client = requireClient();
  return runSelect<CmsArticle>(
    client
      .from(TABLES.articles)
      .select("*")
      .eq("published", true)
      .eq("language", language)
      .order("created_at", { ascending: false }),
  );
}

export async function getPublicArticleById(id: string) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.articles)
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();

  if (error) throw error;
  return data as CmsArticle;
}

export async function listPublicOpinions(language: CmsLanguage) {
  const client = requireClient();
  return runSelect<CmsOpinion>(
    client
      .from(TABLES.opinions)
      .select("*")
      .eq("published", true)
      .eq("language", language)
      .order("created_at", { ascending: false }),
  );
}

export async function getPublicOpinionById(id: string) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.opinions)
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();

  if (error) throw error;
  return data as CmsOpinion;
}

export async function listPublicInterviews(language: CmsLanguage) {
  const client = requireClient();
  return runSelect<CmsInterview>(
    client
      .from(TABLES.interviews)
      .select("*")
      .eq("published", true)
      .eq("language", language)
      .order("created_at", { ascending: false }),
  );
}

export async function listPublicUpcomingEvents(language: CmsLanguage) {
  const client = requireClient();
  return runSelect<CmsUpcomingEvent>(
    client
      .from(TABLES.upcomingEvents)
      .select("*")
      .eq("published", true)
      .eq("language", language)
      .order("sort_date", { ascending: true, nullsFirst: false })
      .order("created_at", { ascending: false }),
  );
}

export async function listOwnArticles(authorId: string) {
  const client = requireClient();
  return runSelect<CmsArticle>(
    client
      .from(TABLES.articles)
      .select("*")
      .eq("author_id", authorId)
      .order("updated_at", { ascending: false }),
  );
}

export async function listOwnOpinions(authorId: string) {
  const client = requireClient();
  return runSelect<CmsOpinion>(
    client
      .from(TABLES.opinions)
      .select("*")
      .eq("author_id", authorId)
      .order("updated_at", { ascending: false }),
  );
}

export async function listOwnInterviews(authorId: string) {
  const client = requireClient();
  return runSelect<CmsInterview>(
    client
      .from(TABLES.interviews)
      .select("*")
      .eq("author_id", authorId)
      .order("updated_at", { ascending: false }),
  );
}

export async function listOwnUpcomingEvents(authorId: string) {
  const client = requireClient();
  return runSelect<CmsUpcomingEvent>(
    client
      .from(TABLES.upcomingEvents)
      .select("*")
      .eq("author_id", authorId)
      .order("updated_at", { ascending: false }),
  );
}

export async function createArticle(input: CmsInsertArticle) {
  const client = requireClient();
  const { data, error } = await client.from(TABLES.articles).insert(input).select("*").single();
  if (error) throw error;
  return data as CmsArticle;
}

export async function updateArticle(
  id: string,
  authorId: string,
  input: Partial<CmsInsertArticle>,
) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.articles)
    .update(input)
    .eq("id", id)
    .eq("author_id", authorId)
    .select("*")
    .single();

  if (error) throw error;
  return data as CmsArticle;
}

export async function deleteArticle(id: string, authorId: string) {
  const client = requireClient();
  const { error } = await client
    .from(TABLES.articles)
    .delete()
    .eq("id", id)
    .eq("author_id", authorId);
  if (error) throw error;
}

export async function createOpinion(input: CmsInsertOpinion) {
  const client = requireClient();
  const { data, error } = await client.from(TABLES.opinions).insert(input).select("*").single();
  if (error) throw error;
  return data as CmsOpinion;
}

export async function updateOpinion(
  id: string,
  authorId: string,
  input: Partial<CmsInsertOpinion>,
) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.opinions)
    .update(input)
    .eq("id", id)
    .eq("author_id", authorId)
    .select("*")
    .single();

  if (error) throw error;
  return data as CmsOpinion;
}

export async function deleteOpinion(id: string, authorId: string) {
  const client = requireClient();
  const { error } = await client
    .from(TABLES.opinions)
    .delete()
    .eq("id", id)
    .eq("author_id", authorId);
  if (error) throw error;
}

export async function createInterview(input: CmsInsertInterview) {
  const client = requireClient();
  const { data, error } = await client.from(TABLES.interviews).insert(input).select("*").single();
  if (error) throw error;
  return data as CmsInterview;
}

export async function updateInterview(
  id: string,
  authorId: string,
  input: Partial<CmsInsertInterview>,
) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.interviews)
    .update(input)
    .eq("id", id)
    .eq("author_id", authorId)
    .select("*")
    .single();

  if (error) throw error;
  return data as CmsInterview;
}

export async function deleteInterview(id: string, authorId: string) {
  const client = requireClient();
  const { error } = await client
    .from(TABLES.interviews)
    .delete()
    .eq("id", id)
    .eq("author_id", authorId);
  if (error) throw error;
}

export async function createUpcomingEvent(input: CmsInsertUpcomingEvent) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.upcomingEvents)
    .insert(input)
    .select("*")
    .single();
  if (error) throw error;
  return data as CmsUpcomingEvent;
}

export async function updateUpcomingEvent(
  id: string,
  authorId: string,
  input: Partial<CmsInsertUpcomingEvent>,
) {
  const client = requireClient();
  const { data, error } = await client
    .from(TABLES.upcomingEvents)
    .update(input)
    .eq("id", id)
    .eq("author_id", authorId)
    .select("*")
    .single();

  if (error) throw error;
  return data as CmsUpcomingEvent;
}

export async function deleteUpcomingEvent(id: string, authorId: string) {
  const client = requireClient();
  const { error } = await client
    .from(TABLES.upcomingEvents)
    .delete()
    .eq("id", id)
    .eq("author_id", authorId);

  if (error) throw error;
}

/**
 * Valida se um email está autorizado para criar uma conta
 * @param email Email a ser validado
 * @returns true se o email está autorizado, false caso contrário
 */
export async function isEmailAuthorized(email: string): Promise<boolean> {
  try {
    const client = requireClient();
    const { data, error } = await client
      .from("authorized_users")
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    // Se não encontrou o email na lista autorizada
    if (error) {
      if (error.code === "PGRST116") {
        // PGRST116 = não encontrado (esperado para emails não autorizados)
        return false;
      }
      // Outros erros (ex: tabela não existe, permissão negada)
      throw error;
    }

    // Se encontrou o email, retorna true
    return !!data;
  } catch (error) {
    console.error("Erro crítico ao validar email autorizado:", error);
    // Em caso de erro, nega o acesso por segurança
    return false;
  }
}
