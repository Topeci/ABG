-- Migration : Salons VIP (billet multi-scan) + formulaire Partenaire
-- À exécuter dans Supabase → SQL Editor.

-- 1. Billets : support des billets scannables plusieurs fois (Salons VIP).
alter table tickets add column if not exists max_checkins integer not null default 1;
alter table tickets add column if not exists checkin_count integer not null default 0;

-- Reprend les billets déjà scannés avant cette migration (checked_in = true)
-- pour qu'ils comptent bien comme "1 entrée utilisée sur 1".
update tickets
set checkin_count = 1
where checked_in = true and checkin_count = 0;

-- 2. Demandes partenaires / contenu (formulaire section "Partenaire").
create table if not exists partner_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null
);

alter table partner_requests enable row level security;

-- Aucune policy publique : seule la clé service_role (utilisée côté
-- serveur dans /api/partners) peut lire/écrire cette table.
