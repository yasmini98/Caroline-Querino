-- Execute este arquivo no SQL Editor do Supabase

create extension if not exists pgcrypto;

create table if not exists public.cms_articles (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  language text not null check (language in ('pt-BR', 'en', 'es')),
  title text not null,
  subtitle text,
  preview text not null,
  body text[] not null default '{}',
  authors text[] not null default '{}',
  image_url text,
  source_label text,
  source_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_opinions (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  language text not null check (language in ('pt-BR', 'en', 'es')),
  title text not null,
  body text[] not null default '{}',
  image_url text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_interviews (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  language text not null check (language in ('pt-BR', 'en', 'es')),
  title text not null,
  image_url text not null,
  href text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_upcoming_events (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  language text not null check (language in ('pt-BR', 'en', 'es')),
  date_label text not null,
  sort_date date,
  title text not null,
  location text not null,
  image_url text,
  href text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists cms_articles_set_updated_at on public.cms_articles;
create trigger cms_articles_set_updated_at
before update on public.cms_articles
for each row
execute function public.set_updated_at();

drop trigger if exists cms_opinions_set_updated_at on public.cms_opinions;
create trigger cms_opinions_set_updated_at
before update on public.cms_opinions
for each row
execute function public.set_updated_at();

drop trigger if exists cms_interviews_set_updated_at on public.cms_interviews;
create trigger cms_interviews_set_updated_at
before update on public.cms_interviews
for each row
execute function public.set_updated_at();

drop trigger if exists cms_upcoming_events_set_updated_at on public.cms_upcoming_events;
create trigger cms_upcoming_events_set_updated_at
before update on public.cms_upcoming_events
for each row
execute function public.set_updated_at();

alter table public.cms_articles enable row level security;
alter table public.cms_opinions enable row level security;
alter table public.cms_interviews enable row level security;
alter table public.cms_upcoming_events enable row level security;

-- Leitura pública para renderizar o site
drop policy if exists "public_read_articles" on public.cms_articles;
create policy "public_read_articles" on public.cms_articles
for select using (published = true);

drop policy if exists "public_read_opinions" on public.cms_opinions;
create policy "public_read_opinions" on public.cms_opinions
for select using (published = true);

drop policy if exists "public_read_interviews" on public.cms_interviews;
create policy "public_read_interviews" on public.cms_interviews
for select using (published = true);

drop policy if exists "public_read_events" on public.cms_upcoming_events;
create policy "public_read_events" on public.cms_upcoming_events
for select using (published = true);

-- Escrita exclusiva da usuaria autenticada dona da linha
drop policy if exists "owner_insert_articles" on public.cms_articles;
create policy "owner_insert_articles" on public.cms_articles
for insert to authenticated
with check (auth.uid() = author_id);

drop policy if exists "owner_update_articles" on public.cms_articles;
create policy "owner_update_articles" on public.cms_articles
for update to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

drop policy if exists "owner_delete_articles" on public.cms_articles;
create policy "owner_delete_articles" on public.cms_articles
for delete to authenticated
using (auth.uid() = author_id);

drop policy if exists "owner_insert_opinions" on public.cms_opinions;
create policy "owner_insert_opinions" on public.cms_opinions
for insert to authenticated
with check (auth.uid() = author_id);

drop policy if exists "owner_update_opinions" on public.cms_opinions;
create policy "owner_update_opinions" on public.cms_opinions
for update to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

drop policy if exists "owner_delete_opinions" on public.cms_opinions;
create policy "owner_delete_opinions" on public.cms_opinions
for delete to authenticated
using (auth.uid() = author_id);

drop policy if exists "owner_insert_interviews" on public.cms_interviews;
create policy "owner_insert_interviews" on public.cms_interviews
for insert to authenticated
with check (auth.uid() = author_id);

drop policy if exists "owner_update_interviews" on public.cms_interviews;
create policy "owner_update_interviews" on public.cms_interviews
for update to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

drop policy if exists "owner_delete_interviews" on public.cms_interviews;
create policy "owner_delete_interviews" on public.cms_interviews
for delete to authenticated
using (auth.uid() = author_id);

drop policy if exists "owner_insert_events" on public.cms_upcoming_events;
create policy "owner_insert_events" on public.cms_upcoming_events
for insert to authenticated
with check (auth.uid() = author_id);

drop policy if exists "owner_update_events" on public.cms_upcoming_events;
create policy "owner_update_events" on public.cms_upcoming_events
for update to authenticated
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

drop policy if exists "owner_delete_events" on public.cms_upcoming_events;
create policy "owner_delete_events" on public.cms_upcoming_events
for delete to authenticated
using (auth.uid() = author_id);

-- Tabela de usuários autorizados para limitação de signup
create table if not exists public.authorized_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Sem RLS, apenas admin pode gerenciar
alter table public.authorized_users disable row level security;

-- Função para validar email autorizado no signup
create or replace function public.is_email_authorized(user_email text)
returns boolean
language plpgsql
security definer
as $$
begin
  return exists(
    select 1 from public.authorized_users where email = user_email
  );
end;
$$;

-- Função para validar no signup via trigger (usando auth hook)
create or replace function public.validate_new_user_signup()
returns jsonb
language plpgsql
as $$
declare
  v_is_authorized boolean;
begin
  -- Verifica se o email está na lista de autorizados
  v_is_authorized := (
    select exists(
      select 1 from public.authorized_users 
      where email = auth.jwt() ->> 'email'
    )
  );
  
  if not v_is_authorized then
    return jsonb_build_object(
      'error', 'unauthorized_signup',
      'error_description', 'Email não está autorizado para criar conta.'
    );
  end if;
  
  return null;
end;
$$;

-- Adicionar os dois emails autorizados
insert into public.authorized_users (email) values
  ('oliveira.yasmini@gmail.com'),
  ('carollinecquerino@gmail.com')
on conflict (email) do nothing;
