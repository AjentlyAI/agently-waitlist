import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function WaitlistAjently() {
  return (
    <section id="waitlist" className="bg-[#f5f7fa] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[#dbe4f1] bg-white p-8 text-center shadow-sm md:p-10">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d304f] md:text-4xl">
            Get early access to Ajently
          </h2>
          <p className="text-base text-slate-600">
            Join the future of AI-powered work.
          </p>
        </div>
        <form className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="h-11 rounded-full border-[#c9d5e8] bg-white px-4 text-[#1d304f] placeholder:text-slate-400"
          />
          <Button
            type="submit"
            className="h-11 rounded-full bg-[#1d304f] px-6 text-white hover:bg-[#263d63]"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
}
