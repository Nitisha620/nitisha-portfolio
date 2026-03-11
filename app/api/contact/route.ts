export async function POST(req: Request) {
  try {
    const body = await req.json();

    const webhook = process.env.DISCORD_WEBHOOK_URL;

    if (!webhook) {
      return Response.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}