import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Documents(){
  const [docs, setDocs] = useState([])
  const [title, setTitle] = useState('')
  const fileRef = useRef(null)

  const load = async ()=>{
    const r = await fetch(`${API}/documents`)
    if(r.ok) setDocs(await r.json())
  }
  useEffect(()=>{ load() },[])

  const upload = async ()=>{
    const file = fileRef.current.files[0]
    if(!file) return
    const fd = new FormData()
    fd.append('file', file)
    const up = await fetch(`${API}/upload`, { method:'POST', body: fd })
    if(up.ok) {
      const { url } = await up.json()
      const meta = await fetch(`${API}/documents`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, file_url: url, mime_type: file.type }) })
      if(meta.ok){ setTitle(''); fileRef.current.value = ''; load() }
    }
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="text-lg font-semibold">Document Management</div>
        <div className="mt-4 flex flex-col md:flex-row items-end gap-3">
          <div>
            <label className="text-sm">Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">File</label>
            <input ref={fileRef} type="file" className="mt-1 block" />
          </div>
          <button onClick={upload} className="h-10 px-4 rounded-md bg-[var(--accent)] text-white shadow">Upload</button>
        </div>
        <div className="mt-6 space-y-3">
          {docs.map((d,i)=> (
            <a key={i} href={d.file_url} target="_blank" className="block p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40">{d.title || d.file_url}</a>
          ))}
        </div>
      </div>
    </Layout>
  )
}
