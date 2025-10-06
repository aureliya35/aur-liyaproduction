export default async function handler(req, res){
  if(req.method !== 'POST'){ res.status(405).json({error:'Use POST'}); return; }
  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body||'{}') : (req.body||{});
    res.status(200).json({ you_sent: data, length: JSON.stringify(data).length });
  } catch (e){
    res.status(400).json({ error: 'Invalid JSON', detail: String(e) });
  }
}
