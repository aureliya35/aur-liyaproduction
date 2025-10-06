export default async function handler(req, res){
  if(req.method !== 'POST'){ res.status(405).json({error:'Use POST with {prompt}'}); return; }
  const key = process.env.OPENAI_API_KEY;
  const body = typeof req.body === 'string' ? JSON.parse(req.body||'{}') : (req.body||{});
  const prompt = body.prompt || 'Say hello to Sabrina from Boardroom.';

  if(!key){
    // Safe mock if no key configured
    res.status(200).json({
      provider: 'mock',
      prompt,
      output: `👋 Hi Sabrina! (mock reply)
Time: ${new Date().toLocaleString()}`
    });
    return;
  }

  try {
    // Minimal proxy using fetch (no external libs). Uses Responses API for safety.
    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        input: prompt
      })
    });
    const j = await r.json();
    let text = '';
    if (j && j.output && Array.isArray(j.output) && j.output.length){
      // Concatenate text outputs if present
      text = j.output.map(x => (x && x.content && x.content[0] && x.content[0].text && x.content[0].text.trim()) || '').join('\n').trim();
    }
    res.status(200).json({ provider: 'openai', prompt, output: text || JSON.stringify(j).slice(0,800) });
  } catch (e){
    res.status(500).json({ error: 'OpenAI call failed', detail: String(e) });
  }
}
