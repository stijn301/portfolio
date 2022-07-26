import React from 'react'
import ExternalLink from '../buttons/ExternalLink'

export default function Footer() {
  return (
    <footer>
      <div className="py-2 flex flex-col items-center gap-2">
        <div className="flex justify-center gap-2">
          <ExternalLink text="Github" href="https://github.com/stijn301" />
          <ExternalLink text="LinkedIn" href="" />
        </div>

        <p className="text-neutral-400">Built by Stijn Vergauwen</p>
      </div>
    </footer>
  )
}
