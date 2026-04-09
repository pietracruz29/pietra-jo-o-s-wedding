import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, attending, partnerName, children } = await req.json();

    const attendingText = attending ? "✅ Confirmou presença" : "❌ Não poderá comparecer";
    
    let details = `<h2>Nova Confirmação de Presença</h2>
<p><strong>Nome:</strong> ${name}</p>
<p><strong>Status:</strong> ${attendingText}</p>`;

    if (attending && partnerName) {
      details += `<p><strong>Parceiro(a):</strong> ${partnerName}</p>`;
    }

    if (attending && children && children.length > 0) {
      const validChildren = children.filter((c: any) => c.name);
      if (validChildren.length > 0) {
        details += `<p><strong>Crianças:</strong></p><ul>`;
        for (const child of validChildren) {
          details += `<li>${child.name}${child.age ? ` (${child.age})` : ''}</li>`;
        }
        details += `</ul>`;
      }
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      console.error('Missing API keys');
      return new Response(JSON.stringify({ error: 'Email not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const emailRes = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Casamento J&P <onboarding@resend.dev>',
        to: ['pietra.cruz29@gmail.com'],
        subject: `RSVP: ${name} - ${attending ? 'Confirmou' : 'Não comparecerá'}`,
        html: details,
      }),
    });

    const emailData = await emailRes.json();
    console.log('Email sent:', emailData);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
