import Link from "next/link";
import { Button } from "../ui/button";

function GetStartedButton() {
  return (
    <Link href="/contact">
      <Button size="lg" className="rounded-full">
        Get Started
      </Button>
    </Link>
  );
}

export default GetStartedButton;
