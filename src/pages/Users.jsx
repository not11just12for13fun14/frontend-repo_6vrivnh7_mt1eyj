import React, { useEffect, useMemo, useRef, useState } from 'react'
import Layout from '../components/Layout'
import QRCode from 'qrcode'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Users(){
  const [users, setUsers] = useState([])
  const [full_name, setName] = useState('')
  const [email, setEmail] = useState('')

  const load = async ()=>{
    const r = await fetch(`${API}/users`)
    if(r.ok) setUsers(await r.json())
  }
  useEffect(()=>{ load() },[])

  const add = async ()=>{
    const r = await fetch(`${API}/users`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({full_name, email})})
    if(r.ok){ setName(''); setEmail(''); load() }
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="text-lg font-semibold">Members</div>
        <div className="mt-4 flex flex-col md:flex-row gap-3 items-end">
          <div>
            <label className="text-sm">Name</label>
            <input value={full_name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2" />
          </div>
          <button onClick={add} className="h-10 px-4 rounded-md bg-[var(--accent)] text-white shadow hover:shadow-md active:scale-[.99]">Add</button>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {users.map((u,i)=> <UserCard key={i} user={u} />)}
        </div>
      </div>
    </Layout>
  )
}

function UserCard({ user }){
  const canvasRef = useRef(null)
  const memberId = useMemo(()=> user.member_id || (user.email || '').split('@')[0], [user])
  useEffect(()=>{ if(canvasRef.current){ QRCode.toCanvas(canvasRef.current, `libvault:${memberId}`, {width: 96}) } }, [memberId])
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-4 shadow-sm">
      <div className="font-semibold">{user.full_name || user.name}</div>
      <div className="text-sm text-slate-500">{user.email}</div>
      <div className="mt-3 flex items-center gap-3">
        <canvas ref={canvasRef} className="rounded bg-white p-2" />
        <div>
          <div className="text-xs uppercase text-slate-500">Library Card</div>
          <div className="font-mono text-sm">{memberId}</div>
        </div>
      </div>
    </div>
  )
}
