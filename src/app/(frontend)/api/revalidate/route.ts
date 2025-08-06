import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  try {
    revalidatePath(`/insights`);
    revalidatePath(`/insights/page/[pageNumber]`, "page");
    revalidatePath("/insights/[slug]", "page");
    return NextResponse.json({ message: "Revalidated" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error revalidating", error },
      { status: 500 }
    );
  }
}
