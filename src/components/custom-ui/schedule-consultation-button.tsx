import Link from "next/link";
import AnimatedGradientButton from "../ui/gradient-button";
import GradientText from "../ui/gradient-text";
import { ChevronRight } from "lucide-react";

function ScheduleConsultationButton() {
  return (
    <Link href="/schedule-consultation">
      <AnimatedGradientButton>
        <GradientText>Get Free Consultation</GradientText>
        <ChevronRight className="!text-logo-blend size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientButton>
    </Link>
  );
}

export default ScheduleConsultationButton;
