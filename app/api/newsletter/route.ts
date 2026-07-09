import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'L\'email est requis.' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      console.error('BREVO_API_KEY is not defined in environment variables.')
      return NextResponse.json({ error: 'Configuration serveur manquante.' }, { status: 500 })
    }

    // 1. Essayer d'ajouter le contact à la liste Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true // Met à jour le contact s'il existe déjà
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      // Si l'erreur n'est pas parce que le contact existe déjà
      if (errorData.code !== 'duplicate_parameter') {
        console.error('Brevo API Error (Contacts):', errorData)
        return NextResponse.json({ error: 'Erreur lors de l\'inscription.' }, { status: response.status })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Newsletter Error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
