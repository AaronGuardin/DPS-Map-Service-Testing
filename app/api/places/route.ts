import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const places = await prisma.places.findMany()

    return NextResponse.json(places)
  } catch (error) {
    console.error("Database error:", error)

    return NextResponse.json(
      {
        error: "Failed to fetch places",
      },
      {
        status: 500,
      }
    )
  }
}
