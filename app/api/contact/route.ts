import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  level?: string;
  format?: string;
  ageGroup?: string;
  goalType?: string;
  schedule?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const level = body.level?.trim() ?? '';
    const format = body.format?.trim() ?? '';
    const ageGroup = body.ageGroup?.trim() ?? '';
    const goalType = body.goalType?.trim() ?? '';
    const schedule = body.schedule?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email format' }, { status: 400 });
    }

    console.info('Contact inquiry', {
      name,
      email,
      level,
      format,
      ageGroup,
      goalType,
      schedule,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request payload' }, { status: 400 });
  }
}
