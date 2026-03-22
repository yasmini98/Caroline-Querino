import { FormEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getSupabaseClient, isSupabaseConfigured } from "../../lib/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (!supabase) return;

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;
      setIsAuthenticated(Boolean(data.session));
      setReady(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session));
    });

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;

    const normalizedEmail = email.trim().toLowerCase();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
      });

      setLoading(false);

      if (error) {
        if (error.message.toLowerCase().includes("already registered")) {
          setErrorMessage("Este e-mail ja possui conta. Troque para Entrar e use a mesma senha.");
        } else {
          setErrorMessage(`Nao foi possivel criar o acesso: ${error.message}`);
        }
        return;
      }

      setSuccessMessage(
        "Acesso criado. Se o Supabase pedir confirmacao por e-mail, confirme e depois volte para entrar.",
      );
      setMode("login");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("email not confirmed")) {
        setErrorMessage("Conta criada, mas o e-mail ainda nao foi confirmado no Supabase.");
      } else {
        setErrorMessage(`Nao foi possivel entrar: ${error.message}`);
      }
      return;
    }

    navigate("/portal-cliente", { replace: true });
  }

  if (!isSupabaseConfigured()) {
    return (
      <section className="py-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6 text-amber-900">
            <h1 className="text-2xl font-bold mb-3">Portal da cliente indisponivel</h1>
            <p className="text-sm leading-relaxed">
              Configure as variaveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY para habilitar o login.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (ready && isAuthenticated) {
    return <Navigate to="/portal-cliente" replace />;
  }

  return (
    <section className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-8 shadow-sm">
          <h1 className="text-3xl font-bold mb-2">Acesso da cliente</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Use e-mail e senha para entrar no portal. Voces podem compartilhar a mesma conta.
          </p>

          <div className="mb-6 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setErrorMessage("");
                setSuccessMessage("");
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                mode === "login"
                  ? "bg-[#67127c] text-white"
                  : "bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-gray-200"
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("signup");
                setErrorMessage("");
                setSuccessMessage("");
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                mode === "signup"
                  ? "bg-[#67127c] text-white"
                  : "bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-gray-200"
              }`}
            >
              Criar acesso
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium mb-1">
                E-mail
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-950 px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium mb-1">
                Senha
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-950 px-3 py-2"
              />
            </div>

            {errorMessage ? (
              <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
            ) : null}

            {successMessage ? (
              <p className="text-sm text-green-700 dark:text-green-300">{successMessage}</p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#67127c] px-4 py-2.5 font-semibold text-white disabled:opacity-70"
            >
              {loading
                ? mode === "signup"
                  ? "Criando acesso..."
                  : "Entrando..."
                : mode === "signup"
                  ? "Criar acesso"
                  : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
