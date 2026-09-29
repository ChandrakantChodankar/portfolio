/*
# Create contact_messages table

1. New Tables
- `contact_messages`
- `id` (uuid, primary key)
- `name` (text, not null) — sender's name
- `email` (text, not null) — sender's email
- `company` (text, nullable) — optional company field
- `enquiry_type` (text, not null) — type of enquiry (job, internship, freelance, hello)
- `message` (text, not null) — the message body
- `status` (text, not null, default 'new') — new / read / replied / archived
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- INSERT: allow anon + authenticated (anyone can submit the contact form).
- SELECT / UPDATE / DELETE: authenticated only (admin must sign in to view/manage messages).

3. Notes
- This is a portfolio contact form. Anonymous visitors need to submit messages,
  but only the authenticated site owner should read or manage them.
- The admin page at /admin uses Supabase email/password auth to gate access.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  enquiry_type text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact messages
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users (admin) can read messages
DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users (admin) can update message status
DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated users (admin) can delete messages
DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);

-- Index for sorting by created_at
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
ON contact_messages (created_at DESC);
