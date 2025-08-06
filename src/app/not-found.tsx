"use client";
import CustomError from "@/components/custom-error";
import ErrorWrapper from "@/components/error-wrapper";

export default function NotFound() {
  return (
    <ErrorWrapper>
      <CustomError
        title="Page Not Found"
        message="The page you're looking for doesn't exist."
      />
    </ErrorWrapper>
  );
}
