import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  await fetch(
    'https://services.leadconnectorhq.com/hooks/MWTJgFgGeot9Z3Ok9tyb/webhook-trigger/28a2e0ab-2846-406b-aaed-9c913701bfd8',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  )

  return NextResponse.json({ ok: true })
}
