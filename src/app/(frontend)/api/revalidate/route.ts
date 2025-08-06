import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  revalidatePath(`/insights`);
  revalidatePath(`/insights/page/[pageNumber]`, "page");
  revalidatePath("/insights/[slug]", "page");
  return NextResponse.json({ message: "Revalidated" });
}
