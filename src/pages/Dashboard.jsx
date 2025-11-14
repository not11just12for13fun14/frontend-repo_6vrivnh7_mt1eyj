import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Dashboard(){
  return (
    <Layout>
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[{title:'Active Members', value:'1,248'}, {title:'Books in Catalog', value:'32,904'}, {title:'Books Borrowed', value:'486'}].map((c,i)=> (
            <motion.div key={i} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-4 shadow-sm">
              <div className="text-sm text-slate-500">{c.title}</div>
              <div className="text-2xl font-semibold mt-1">{c.value}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-4 shadow-sm lg:col-span-2">
            <div className="font-semibold">Recent Activity</div>
            <div className="mt-3 space-y-3 text-sm">
              {Array.from({length:6}).map((_,i)=> (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <div className="text-slate-600 dark:text-slate-300">Member returned a book • TX-{1000+i}</div>
                  <div className="text-slate-400">2h</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-4 shadow-sm">
            <div className="font-semibold">Recommendations</div>
            <div className="text-sm text-slate-500 mt-2">AI-curated picks for your members</div>
            <div className="mt-3 space-y-2">
              {['The Pragmatic Programmer','Deep Work','Clean Code'].map((t)=> (
                <div key={t} className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg font-medium">{t}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
