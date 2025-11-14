import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Transactions(){
  const [txs, setTxs] = useState([])

  const load = async ()=>{
    const r = await fetch(`${API}/transactions`)
    if(r.ok) setTxs(await r.json())
  }
  useEffect(()=>{ load() },[])

  return (
    <Layout>
      <div className="p-6">
        <div className="text-lg font-semibold">Transactions</div>
        <div className="mt-4 space-y-2">
          {txs.map((t,i)=> (
            <div key={i} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40">{t.type?.toUpperCase()} • Book {t.book_id} • User {t.user_id}</div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
