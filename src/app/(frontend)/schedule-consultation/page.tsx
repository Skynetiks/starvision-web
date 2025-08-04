import ScheduleForm from "@/components/schedule-form";

export default function ScheduleConsultation() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 animate-gradient bg-gradient-to-r from-logo-primary  to-logo-secondary ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Schedule a Consultation
            </h2>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Book a free consultation with our international business
              registration experts.
            </p>
          </div>
        </div>
        <div className="py-5 md:px-1">
          {process.env.NEXT_PUBLIC_CAL_LINK ? (
            <ScheduleForm />
          ) : (
            <div className="text-white">
              <p>No calendar link found in env</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
