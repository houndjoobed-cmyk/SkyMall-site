import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      console.error('BREVO_API_KEY is not defined in environment variables.')
      return NextResponse.json({ error: 'Configuration serveur manquante.' }, { status: 500 })
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'Site Web SkyMall', email: 'sky.mall.0026@gmail.com' },
        to: [{ email: 'sky.mall.0026@gmail.com', name: 'Admin SkyMall' }],
        replyTo: { email, name },
        subject: `Nouveau message de contact - ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #17385D;">Nouveau message depuis le site SkyMall</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #F5F6F8; border-radius: 8px;">
              <p style="margin: 0;"><strong>Message :</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API Error:', errorData)
      return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email via Brevo.' }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Contact Error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
