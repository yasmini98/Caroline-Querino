# Setup: Limitar Signup apenas para Usuários Autorizados

## 1. Executar o SQL atualizado

Execute o arquivo `schema.sql` no SQL Editor do Supabase para criar:

- Tabela `authorized_users`
- Função `is_email_authorized()`
- Função `validate_new_user_signup()`

## 2. Inserir os dois emails autorizados

No SQL Editor do Supabase, execute:

```sql
insert into public.authorized_users (email) values
  ('email1@example.com'),
  ('email2@example.com');
```

Substitua pelos reais e-mails das duas contas.

## 3. Configuração de Validação

### Opção A: Validação no Cliente (Recomendada para começar rápido)

No seu código TypeScript/React ao fazer signup:

```typescript
import { isEmailAuthorized } from '@/services/cms';

// Antes de chamar signUp do supabase
const isAuthorized = await isEmailAuthorized(email);
if (!isAuthorized) {
  throw new Error('Email não está autorizado para criar conta.');
}

// Continuar com o signup
```

Adicione esta função em `src/services/cms.ts`:

```typescript
export async function isEmailAuthorized(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('authorized_users')
    .select('email')
    .eq('email', email.toLowerCase())
    .single();
  
  return !error && !!data;
}
```

### Opção B: Webhook HTTP (Segurança máxima)

1. Vá para **Auth > Hooks** no Dashboard do Supabase
2. Crie um novo hook com event `auth.user_signup`
3. Configure o endpoint HTTP que valida:

```http
POST seu-servidor/api/validate-signup
{
  "user_id": "uuid",
  "email": "user@example.com"
}
```

O servidor retorna 200 OK se autorizado, ou 400 se não.

## 4. Adicionar novos emails autorizados

Sempre que precisar autorizar um novo email:

```sql
insert into public.authorized_users (email) values ('novo@example.com');
```

## 5. Verificar emails autorizados

```sql
select email, created_at from public.authorized_users order by created_at desc;
```
