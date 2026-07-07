export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey) {
      return new Response(JSON.stringify({ error: { message: 'API Key not configured' } }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    
    if (data.error) {
        // Fetch available models to debug
        const modelsRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const modelsData = await modelsRes.json();
        const availableModels = modelsData.models ? modelsData.models.map(m => m.name).join(', ') : 'None';
        return new Response(JSON.stringify({ 
            error: { message: data.error.message + " | Available models: " + availableModels }
        }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: { message: 'Internal Server Error', details: error.message } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
