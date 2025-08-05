"use client";
import CustomError from "@/components/custom-error";
import ErrorWrapper from "@/components/error-wrapper";

export default function Error() {
  return (
    <ErrorWrapper>
      <CustomError
        title="Something went wrong"
        message="We're experiencing technical difficulties. Please try again later."
      />
    </ErrorWrapper>
  );
}
