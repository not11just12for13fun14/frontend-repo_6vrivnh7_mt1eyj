import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Books(){
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const load = async ()=>{
    const r = await fetch(`${API}/books`)
    if(r.ok){ setBooks(await r.json()) }
  }
  useEffect(()=>{ load() },[])

  const add = async ()=>{
    const r = await fetch(`${API}/books`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({title, author})})
    if(r.ok){ setTitle(''); setAuthor(''); load() }
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-3 items-end">
          <div>
            <label className="text-sm">Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Author</label>
            <input value={author} onChange={e=>setAuthor(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <button onClick={add} className="h-10 px-4 rounded-md bg-[var(--accent)] text-white shadow hover:shadow-md active:scale-[.99]">Add</button>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {books.map((b,i)=> (
            <motion.div key={i} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-4 shadow-sm">
              <div className="text-sm text-slate-500">{b.author || 'Unknown'}</div>
              <div className="text-lg font-semibold mt-1">{b.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
