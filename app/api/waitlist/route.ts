import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

type WaitlistPayload = {
  name?: string;
  email?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | WaitlistPayload
    | null;

  const name = body?.name?.trim();
  const email = body?.email?.trim().toLowerCase();

  if (!name || !email) {
    return NextResponse.json(
      { message: 'Name and email are required.' },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { message: 'Supabase is not configured on the server.' },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { error } = await supabase
    .from('waitlist_submissions')
    .insert([{ name, email }]);

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        { message: 'This email is already on the waitlist.' },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { message: 'Could not save your waitlist submission.' },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: 'Successfully joined the waitlist.' },
    { status: 201 },
  );
}
