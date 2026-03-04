'use client';

import type React from 'react';
import { useState } from 'react';
import { IconCircleCheck, IconSparkles } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function WaitlistPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Unable to join waitlist right now.');
      }

      setSuccess('You are on the waitlist. We will reach out soon.');
      setName('');
      setEmail('');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Try again.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="bg-[#f5f7fa] px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-[#cfe0fb] bg-[linear-gradient(180deg,#e9f1ff_0%,#bcd4ff_45%,#4284ff_100%)] p-8 shadow-[0_10px_30px_rgba(18,41,90,0.18)] md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#bfd3f9] bg-white/60 px-3 py-1 text-xs font-medium text-[#1d304f]">
            <IconSparkles className="h-3 w-3" />
            Early Access
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#10254a] md:text-5xl">
            Get early access to Ajently
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#1d355f]">
            Join the future of AI-powered work. Be first to discover, run, and
            monetize AI agents in one marketplace.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 grid w-full max-w-3xl gap-3 md:grid-cols-2"
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
            required
            className="h-11 rounded-xl border-[#b7cdf5] bg-white text-[#636669]"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            required
            className="h-11 rounded-xl border-[#b7cdf5] bg-white text-[#636669]"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 rounded-xl bg-[#10254a] text-white hover:bg-[#1a3564] md:col-span-2"
          >
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </Button>
        </form>

        {success && (
          <p className="mx-auto mt-4 flex max-w-3xl items-center justify-center gap-2 rounded-xl border border-[#84aaf3] bg-white/70 px-4 py-3 text-sm text-[#163268]">
            <IconCircleCheck className="h-4 w-4" />
            {success}
          </p>
        )}

        {error && (
          <p className="mx-auto mt-4 max-w-3xl rounded-xl border border-[#9fbaf0] bg-white/70 px-4 py-3 text-sm text-[#163268]">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
