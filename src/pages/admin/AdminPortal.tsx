import { FormEvent, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { type Session } from "@supabase/supabase-js";
import { getSupabaseClient, isSupabaseConfigured } from "../../lib/supabase";
import {
  createArticle,
  createInterview,
  createOpinion,
  createUpcomingEvent,
  deleteArticle,
  deleteInterview,
  deleteOpinion,
  deleteUpcomingEvent,
  listOwnArticles,
  listOwnInterviews,
  listOwnOpinions,
  listOwnUpcomingEvents,
  updateArticle,
  updateInterview,
  updateOpinion,
  updateUpcomingEvent,
} from "../../services/cms";
import { CmsArticle, CmsInterview, CmsLanguage, CmsOpinion, CmsUpcomingEvent } from "../../types/cms";

type TabKey = "eventos" | "entrevistas" | "artigos" | "opinioes";

const languageOptions: CmsLanguage[] = ["pt-BR", "en", "es"];

function textAreaToList(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function listToTextArea(value: string[]) {
  return value.join("\n");
}

export default function AdminPortal() {
  const navigate = useNavigate();
  const supabase = getSupabaseClient();

  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("eventos");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [articles, setArticles] = useState<CmsArticle[]>([]);
  const [opinions, setOpinions] = useState<CmsOpinion[]>([]);
  const [interviews, setInterviews] = useState<CmsInterview[]>([]);
  const [events, setEvents] = useState<CmsUpcomingEvent[]>([]);

  const [articleEditingId, setArticleEditingId] = useState<string | null>(null);
  const [articleLanguage, setArticleLanguage] = useState<CmsLanguage>("pt-BR");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleSubtitle, setArticleSubtitle] = useState("");
  const [articlePreview, setArticlePreview] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleAuthors, setArticleAuthors] = useState("");
  const [articleImageUrl, setArticleImageUrl] = useState("");
  const [articleSourceLabel, setArticleSourceLabel] = useState("");
  const [articleSourceUrl, setArticleSourceUrl] = useState("");
  const [articlePublished, setArticlePublished] = useState(true);

  const [opinionEditingId, setOpinionEditingId] = useState<string | null>(null);
  const [opinionLanguage, setOpinionLanguage] = useState<CmsLanguage>("pt-BR");
  const [opinionTitle, setOpinionTitle] = useState("");
  const [opinionBody, setOpinionBody] = useState("");
  const [opinionImageUrl, setOpinionImageUrl] = useState("");
  const [opinionPublished, setOpinionPublished] = useState(true);

  const [interviewEditingId, setInterviewEditingId] = useState<string | null>(null);
  const [interviewLanguage, setInterviewLanguage] = useState<CmsLanguage>("pt-BR");
  const [interviewTitle, setInterviewTitle] = useState("");
  const [interviewImageUrl, setInterviewImageUrl] = useState("");
  const [interviewHref, setInterviewHref] = useState("");
  const [interviewPublished, setInterviewPublished] = useState(true);

  const [eventEditingId, setEventEditingId] = useState<string | null>(null);
  const [eventLanguage, setEventLanguage] = useState<CmsLanguage>("pt-BR");
  const [eventDateLabel, setEventDateLabel] = useState("");
  const [eventSortDate, setEventSortDate] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImageUrl, setEventImageUrl] = useState("");
  const [eventHref, setEventHref] = useState("");
  const [eventPublished, setEventPublished] = useState(true);

  const userId = useMemo(() => session?.user?.id ?? "", [session]);

  useEffect(() => {
    if (!supabase) return;

    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setReady(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setReady(true);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (!session?.user?.id) return;
    refreshAll(session.user.id);
  }, [session?.user?.id]);

  async function refreshAll(authorId: string) {
    try {
      setLoading(true);
      const [articlesData, opinionsData, interviewsData, eventsData] = await Promise.all([
        listOwnArticles(authorId),
        listOwnOpinions(authorId),
        listOwnInterviews(authorId),
        listOwnUpcomingEvents(authorId),
      ]);
      setArticles(articlesData);
      setOpinions(opinionsData);
      setInterviews(interviewsData);
      setEvents(eventsData);
      setStatusMessage("");
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel carregar os dados do portal.");
    } finally {
      setLoading(false);
    }
  }

  function clearArticleForm() {
    setArticleEditingId(null);
    setArticleLanguage("pt-BR");
    setArticleTitle("");
    setArticleSubtitle("");
    setArticlePreview("");
    setArticleBody("");
    setArticleAuthors("");
    setArticleImageUrl("");
    setArticleSourceLabel("");
    setArticleSourceUrl("");
    setArticlePublished(true);
  }

  function clearOpinionForm() {
    setOpinionEditingId(null);
    setOpinionLanguage("pt-BR");
    setOpinionTitle("");
    setOpinionBody("");
    setOpinionImageUrl("");
    setOpinionPublished(true);
  }

  function clearInterviewForm() {
    setInterviewEditingId(null);
    setInterviewLanguage("pt-BR");
    setInterviewTitle("");
    setInterviewImageUrl("");
    setInterviewHref("");
    setInterviewPublished(true);
  }

  function clearEventForm() {
    setEventEditingId(null);
    setEventLanguage("pt-BR");
    setEventDateLabel("");
    setEventSortDate("");
    setEventTitle("");
    setEventLocation("");
    setEventImageUrl("");
    setEventHref("");
    setEventPublished(true);
  }

  async function handleLogout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    navigate("/portal-cliente/login", { replace: true });
  }

  async function submitArticle(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;

    try {
      setLoading(true);
      const payload = {
        author_id: userId,
        language: articleLanguage,
        title: articleTitle.trim(),
        subtitle: articleSubtitle.trim() || null,
        preview: articlePreview.trim(),
        body: textAreaToList(articleBody),
        authors: textAreaToList(articleAuthors),
        image_url: articleImageUrl.trim() || null,
        source_label: articleSourceLabel.trim() || null,
        source_url: articleSourceUrl.trim() || null,
        published: articlePublished,
      };

      if (articleEditingId) {
        await updateArticle(articleEditingId, userId, payload);
        setStatusMessage("Artigo atualizado com sucesso.");
      } else {
        await createArticle(payload);
        setStatusMessage("Artigo criado com sucesso.");
      }

      await refreshAll(userId);
      clearArticleForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel salvar o artigo.");
    } finally {
      setLoading(false);
    }
  }

  async function submitOpinion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;

    try {
      setLoading(true);
      const payload = {
        author_id: userId,
        language: opinionLanguage,
        title: opinionTitle.trim(),
        body: textAreaToList(opinionBody),
        image_url: opinionImageUrl.trim() || null,
        published: opinionPublished,
      };

      if (opinionEditingId) {
        await updateOpinion(opinionEditingId, userId, payload);
        setStatusMessage("Opiniao atualizada com sucesso.");
      } else {
        await createOpinion(payload);
        setStatusMessage("Opiniao criada com sucesso.");
      }

      await refreshAll(userId);
      clearOpinionForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel salvar a opiniao.");
    } finally {
      setLoading(false);
    }
  }

  async function submitInterview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;

    try {
      setLoading(true);
      const payload = {
        author_id: userId,
        language: interviewLanguage,
        title: interviewTitle.trim(),
        image_url: interviewImageUrl.trim(),
        href: interviewHref.trim() || null,
        published: interviewPublished,
      };

      if (interviewEditingId) {
        await updateInterview(interviewEditingId, userId, payload);
        setStatusMessage("Entrevista atualizada com sucesso.");
      } else {
        await createInterview(payload);
        setStatusMessage("Entrevista criada com sucesso.");
      }

      await refreshAll(userId);
      clearInterviewForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel salvar a entrevista.");
    } finally {
      setLoading(false);
    }
  }

  async function submitEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;

    try {
      setLoading(true);
      const payload = {
        author_id: userId,
        language: eventLanguage,
        date_label: eventDateLabel.trim(),
        sort_date: eventSortDate.trim() || null,
        title: eventTitle.trim(),
        location: eventLocation.trim(),
        image_url: eventImageUrl.trim() || null,
        href: eventHref.trim() || null,
        published: eventPublished,
      };

      if (eventEditingId) {
        await updateUpcomingEvent(eventEditingId, userId, payload);
        setStatusMessage("Evento atualizado com sucesso.");
      } else {
        await createUpcomingEvent(payload);
        setStatusMessage("Evento criado com sucesso.");
      }

      await refreshAll(userId);
      clearEventForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel salvar o evento.");
    } finally {
      setLoading(false);
    }
  }

  async function removeArticle(id: string) {
    if (!userId) return;
    if (!window.confirm("Excluir este artigo?")) return;

    try {
      setLoading(true);
      await deleteArticle(id, userId);
      setStatusMessage("Artigo excluido com sucesso.");
      await refreshAll(userId);
      if (articleEditingId === id) clearArticleForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel excluir o artigo.");
    } finally {
      setLoading(false);
    }
  }

  async function removeOpinion(id: string) {
    if (!userId) return;
    if (!window.confirm("Excluir esta opiniao?")) return;

    try {
      setLoading(true);
      await deleteOpinion(id, userId);
      setStatusMessage("Opiniao excluida com sucesso.");
      await refreshAll(userId);
      if (opinionEditingId === id) clearOpinionForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel excluir a opiniao.");
    } finally {
      setLoading(false);
    }
  }

  async function removeInterview(id: string) {
    if (!userId) return;
    if (!window.confirm("Excluir esta entrevista?")) return;

    try {
      setLoading(true);
      await deleteInterview(id, userId);
      setStatusMessage("Entrevista excluida com sucesso.");
      await refreshAll(userId);
      if (interviewEditingId === id) clearInterviewForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel excluir a entrevista.");
    } finally {
      setLoading(false);
    }
  }

  async function removeEvent(id: string) {
    if (!userId) return;
    if (!window.confirm("Excluir este evento?")) return;

    try {
      setLoading(true);
      await deleteUpcomingEvent(id, userId);
      setStatusMessage("Evento excluido com sucesso.");
      await refreshAll(userId);
      if (eventEditingId === id) clearEventForm();
    } catch (error) {
      console.error(error);
      setStatusMessage("Nao foi possivel excluir o evento.");
    } finally {
      setLoading(false);
    }
  }

  if (!isSupabaseConfigured()) {
    return (
      <section className="py-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-900">
            <h1 className="text-2xl font-bold mb-3">Portal da cliente indisponivel</h1>
            <p className="text-sm leading-relaxed">
              Defina as variaveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY para habilitar o painel.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (ready && !session) {
    return <Navigate to="/portal-cliente/login" replace />;
  }

  return (
    <section className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold">Portal da cliente</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Publicar, editar e excluir eventos, entrevistas, artigos e opinioes.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-semibold"
          >
            Sair
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("eventos")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              activeTab === "eventos" ? "bg-[#67127c] text-white" : "bg-gray-100 dark:bg-zinc-800"
            }`}
          >
            Proximos eventos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("entrevistas")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              activeTab === "entrevistas" ? "bg-[#67127c] text-white" : "bg-gray-100 dark:bg-zinc-800"
            }`}
          >
            Entrevistas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("artigos")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              activeTab === "artigos" ? "bg-[#67127c] text-white" : "bg-gray-100 dark:bg-zinc-800"
            }`}
          >
            Artigos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("opinioes")}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              activeTab === "opinioes" ? "bg-[#67127c] text-white" : "bg-gray-100 dark:bg-zinc-800"
            }`}
          >
            Opinioes
          </button>
        </div>

        {statusMessage ? (
          <p className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm">
            {statusMessage}
          </p>
        ) : null}

        {activeTab === "artigos" ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <form
              onSubmit={submitArticle}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 space-y-3"
            >
              <h2 className="text-xl font-semibold">{articleEditingId ? "Editar artigo" : "Novo artigo"}</h2>
              <select
                value={articleLanguage}
                onChange={(e) => setArticleLanguage(e.target.value as CmsLanguage)}
                aria-label="Idioma do artigo"
                title="Idioma do artigo"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2"
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang} className="text-black">
                    {lang}
                  </option>
                ))}
              </select>
              <input value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} placeholder="Titulo" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={articleSubtitle} onChange={(e) => setArticleSubtitle(e.target.value)} placeholder="Subtitulo (opcional)" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <textarea value={articlePreview} onChange={(e) => setArticlePreview(e.target.value)} placeholder="Preview" required rows={3} className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <textarea value={articleBody} onChange={(e) => setArticleBody(e.target.value)} placeholder="Corpo do artigo (1 paragrafo por linha)" required rows={7} className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <textarea value={articleAuthors} onChange={(e) => setArticleAuthors(e.target.value)} placeholder="Autores (1 por linha)" rows={3} className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={articleImageUrl} onChange={(e) => setArticleImageUrl(e.target.value)} placeholder="URL da imagem" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={articleSourceLabel} onChange={(e) => setArticleSourceLabel(e.target.value)} placeholder="Texto do link externo" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={articleSourceUrl} onChange={(e) => setArticleSourceUrl(e.target.value)} placeholder="URL da fonte" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={articlePublished} onChange={(e) => setArticlePublished(e.target.checked)} />
                Publicado
              </label>
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="rounded-lg bg-[#67127c] px-4 py-2 text-white font-semibold disabled:opacity-70">Salvar</button>
                <button type="button" onClick={clearArticleForm} className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2">Limpar</button>
              </div>
            </form>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold mb-3">Artigos publicados por voce</h3>
              <div className="space-y-3 max-h-[60vh] overflow-auto pr-1">
                {articles.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.language} | {item.published ? "Publicado" : "Rascunho"}</p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" onClick={() => {
                        setArticleEditingId(item.id);
                        setArticleLanguage(item.language);
                        setArticleTitle(item.title);
                        setArticleSubtitle(item.subtitle ?? "");
                        setArticlePreview(item.preview);
                        setArticleBody(listToTextArea(item.body));
                        setArticleAuthors(listToTextArea(item.authors));
                        setArticleImageUrl(item.image_url ?? "");
                        setArticleSourceLabel(item.source_label ?? "");
                        setArticleSourceUrl(item.source_url ?? "");
                        setArticlePublished(item.published);
                      }} className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm">Editar</button>
                      <button type="button" onClick={() => removeArticle(item.id)} className="rounded-lg border border-red-300 text-red-700 dark:text-red-300 px-3 py-1 text-sm">Excluir</button>
                    </div>
                  </div>
                ))}
                {!articles.length ? <p className="text-sm text-gray-500">Nenhum artigo cadastrado.</p> : null}
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "opinioes" ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <form onSubmit={submitOpinion} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 space-y-3">
              <h2 className="text-xl font-semibold">{opinionEditingId ? "Editar opiniao" : "Nova opiniao"}</h2>
              <select value={opinionLanguage} onChange={(e) => setOpinionLanguage(e.target.value as CmsLanguage)} aria-label="Idioma da opiniao" title="Idioma da opiniao" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2">
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang} className="text-black">{lang}</option>
                ))}
              </select>
              <input value={opinionTitle} onChange={(e) => setOpinionTitle(e.target.value)} placeholder="Titulo" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <textarea value={opinionBody} onChange={(e) => setOpinionBody(e.target.value)} placeholder="Texto (1 paragrafo por linha)" required rows={8} className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={opinionImageUrl} onChange={(e) => setOpinionImageUrl(e.target.value)} placeholder="URL da imagem" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={opinionPublished} onChange={(e) => setOpinionPublished(e.target.checked)} />Publicado</label>
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="rounded-lg bg-[#67127c] px-4 py-2 text-white font-semibold disabled:opacity-70">Salvar</button>
                <button type="button" onClick={clearOpinionForm} className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2">Limpar</button>
              </div>
            </form>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold mb-3">Opinioes publicadas por voce</h3>
              <div className="space-y-3 max-h-[60vh] overflow-auto pr-1">
                {opinions.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.language} | {item.published ? "Publicado" : "Rascunho"}</p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" onClick={() => {
                        setOpinionEditingId(item.id);
                        setOpinionLanguage(item.language);
                        setOpinionTitle(item.title);
                        setOpinionBody(listToTextArea(item.body));
                        setOpinionImageUrl(item.image_url ?? "");
                        setOpinionPublished(item.published);
                      }} className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm">Editar</button>
                      <button type="button" onClick={() => removeOpinion(item.id)} className="rounded-lg border border-red-300 text-red-700 dark:text-red-300 px-3 py-1 text-sm">Excluir</button>
                    </div>
                  </div>
                ))}
                {!opinions.length ? <p className="text-sm text-gray-500">Nenhuma opiniao cadastrada.</p> : null}
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "entrevistas" ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <form onSubmit={submitInterview} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 space-y-3">
              <h2 className="text-xl font-semibold">{interviewEditingId ? "Editar entrevista" : "Nova entrevista"}</h2>
              <select value={interviewLanguage} onChange={(e) => setInterviewLanguage(e.target.value as CmsLanguage)} aria-label="Idioma da entrevista" title="Idioma da entrevista" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2">
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang} className="text-black">{lang}</option>
                ))}
              </select>
              <input value={interviewTitle} onChange={(e) => setInterviewTitle(e.target.value)} placeholder="Titulo" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={interviewImageUrl} onChange={(e) => setInterviewImageUrl(e.target.value)} placeholder="URL da imagem" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={interviewHref} onChange={(e) => setInterviewHref(e.target.value)} placeholder="Link da entrevista" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={interviewPublished} onChange={(e) => setInterviewPublished(e.target.checked)} />Publicado</label>
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="rounded-lg bg-[#67127c] px-4 py-2 text-white font-semibold disabled:opacity-70">Salvar</button>
                <button type="button" onClick={clearInterviewForm} className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2">Limpar</button>
              </div>
            </form>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold mb-3">Entrevistas publicadas por voce</h3>
              <div className="space-y-3 max-h-[60vh] overflow-auto pr-1">
                {interviews.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.language} | {item.published ? "Publicado" : "Rascunho"}</p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" onClick={() => {
                        setInterviewEditingId(item.id);
                        setInterviewLanguage(item.language);
                        setInterviewTitle(item.title);
                        setInterviewImageUrl(item.image_url);
                        setInterviewHref(item.href ?? "");
                        setInterviewPublished(item.published);
                      }} className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm">Editar</button>
                      <button type="button" onClick={() => removeInterview(item.id)} className="rounded-lg border border-red-300 text-red-700 dark:text-red-300 px-3 py-1 text-sm">Excluir</button>
                    </div>
                  </div>
                ))}
                {!interviews.length ? <p className="text-sm text-gray-500">Nenhuma entrevista cadastrada.</p> : null}
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "eventos" ? (
          <div className="grid lg:grid-cols-2 gap-6">
            <form onSubmit={submitEvent} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 space-y-3">
              <h2 className="text-xl font-semibold">{eventEditingId ? "Editar evento" : "Novo evento"}</h2>
              <select value={eventLanguage} onChange={(e) => setEventLanguage(e.target.value as CmsLanguage)} aria-label="Idioma do evento" title="Idioma do evento" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2">
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang} className="text-black">{lang}</option>
                ))}
              </select>
              <input value={eventDateLabel} onChange={(e) => setEventDateLabel(e.target.value)} placeholder="Data exibida (ex: 12-14 maio 2026)" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={eventSortDate} onChange={(e) => setEventSortDate(e.target.value)} type="date" aria-label="Data de ordenacao" title="Data de ordenacao" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} placeholder="Titulo" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Local" required className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={eventImageUrl} onChange={(e) => setEventImageUrl(e.target.value)} placeholder="URL da imagem (opcional)" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <input value={eventHref} onChange={(e) => setEventHref(e.target.value)} placeholder="Link do evento" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={eventPublished} onChange={(e) => setEventPublished(e.target.checked)} />Publicado</label>
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="rounded-lg bg-[#67127c] px-4 py-2 text-white font-semibold disabled:opacity-70">Salvar</button>
                <button type="button" onClick={clearEventForm} className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2">Limpar</button>
              </div>
            </form>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5">
              <h3 className="text-lg font-semibold mb-3">Eventos publicados por voce</h3>
              <div className="space-y-3 max-h-[60vh] overflow-auto pr-1">
                {events.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.language} | {item.published ? "Publicado" : "Rascunho"}</p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" onClick={() => {
                        setEventEditingId(item.id);
                        setEventLanguage(item.language);
                        setEventDateLabel(item.date_label);
                        setEventSortDate(item.sort_date ?? "");
                        setEventTitle(item.title);
                        setEventLocation(item.location);
                        setEventImageUrl(item.image_url ?? "");
                        setEventHref(item.href ?? "");
                        setEventPublished(item.published);
                      }} className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm">Editar</button>
                      <button type="button" onClick={() => removeEvent(item.id)} className="rounded-lg border border-red-300 text-red-700 dark:text-red-300 px-3 py-1 text-sm">Excluir</button>
                    </div>
                  </div>
                ))}
                {!events.length ? <p className="text-sm text-gray-500">Nenhum evento cadastrado.</p> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
