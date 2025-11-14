import React from 'react'
import Layout from '../components/Layout'

export default function Billing(){
  return (
    <Layout>
      <div className="p-6">
        <div className="text-lg font-semibold">Billing</div>
        <div className="mt-2 text-slate-500">Manage subscriptions, invoices, and renewals.</div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
            <div className="font-medium">Current Plan</div>
            <div className="mt-1 text-3xl font-semibold">Pro</div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
            <div className="font-medium">Invoices</div>
            <div className="mt-2 space-y-2 text-sm">
              {['INV-1001','INV-1000','INV-0999'].map(id => <div key={id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between"><span>{id}</span><a href="#" className="text-[var(--accent)]">View</a></div>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
