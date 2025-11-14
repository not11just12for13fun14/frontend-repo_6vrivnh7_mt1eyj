import React, { useState } from 'react'
import Layout from '../components/Layout'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Assistant(){
  const [text, setText] = useState('Paste a book blurb or article text here to summarize...')
  const [summary, setSummary] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const summarize = async ()=>{
    const r = await fetch(`${API}/ai/summarize`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({text})})
    if(r.ok){ const d = await r.json(); setSummary(d.summary) }
  }
  const search = async ()=>{
    const r = await fetch(`${API}/ai/search`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({query})})
    if(r.ok){ const d = await r.json(); setResults(d.results) }
  }

  return (
    <Layout>
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
          <div className="font-semibold">AI Summary</div>
          <textarea value={text} onChange={e=>setText(e.target.value)} className="mt-3 w-full h-40 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3" />
          <button onClick={summarize} className="mt-3 px-4 py-2 rounded-md bg-[var(--accent)] text-white">Summarize</button>
          {summary && <div className="mt-3 text-sm bg-slate-50 dark:bg-slate-800/50 p-3 rounded-md">{summary}</div>}
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
          <div className="font-semibold">AI Search</div>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search books..." className="mt-3 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          <button onClick={search} className="mt-3 px-4 py-2 rounded-md bg-[var(--accent)] text-white">Search</button>
          <div className="mt-3 space-y-2">
            {results.map((r,i)=> <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">{r.title} <span className="text-slate-500">• {r.author}</span></div>)}
          </div>
        </div>
      </div>
    </Layout>
  )
}
