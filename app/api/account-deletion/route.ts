import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, contact, reason } = await request.json()

    if (!name || !contact) {
      return NextResponse.json({ error: 'Le nom et le contact sont requis.' }, { status: 400 })
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
        subject: `Demande de suppression de compte - ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #17385D;">Demande de suppression de compte — Site SkyMall</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Téléphone ou email du compte :</strong> ${contact}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #F5F6F8; border-radius: 8px;">
              <p style="margin: 0;"><strong>Motif :</strong></p>
              <p style="white-space: pre-wrap;">${reason || '(non précisé)'}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 13px;">
              Cette demande a été soumise depuis la page publique de suppression de compte du site
              (utilisateur sans l'application installée). Vérifier l'identité avant de traiter la
              suppression côté Supabase.
            </p>
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
    console.error('API Account Deletion Error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
