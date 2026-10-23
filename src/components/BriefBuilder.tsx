import { useState } from 'react'

type Option = {
  label: string
  value: string
}

type BriefState = {
  event: string
  venue: string
  setting: string
  pax: string
  days: string
  budget: string
  service: string
}

type Step = {
  category: keyof BriefState
  label: string
  options: Option[]
}

const STEPS: Step[] = [
  {
    category: 'event',
    label: '1. Event Type',
    options: [
      { label: 'House Event', value: 'House Event' },
      { label: 'Birthday', value: 'Birthday' },
      { label: 'Convocation', value: 'Convocation' },
      { label: 'Corporate Parties', value: 'Corporate Parties' },
      { label: 'Business Launch', value: 'Business Launch' },
      { label: 'Product Launch', value: 'Product Launch' },
      { label: 'Cultural Events', value: 'Cultural Events' },
      { label: 'Weddings', value: 'Weddings' },
      { label: 'Mini Concerts', value: 'Mini Concerts' },
      { label: 'Sports Events', value: 'Sports Events' },
    ],
  },
  {
    category: 'venue',
    label: '2. Venue Scale',
    options: [
      { label: 'Hotel Grand Ballroom', value: 'Hotel Grand Ballroom' },
      { label: 'Private Indoor Hall', value: 'Private Indoor Hall' },
      { label: 'Outdoor / Marquee Setup', value: 'Outdoor / Marquee Setup' },
      { label: 'Outdoor / Park', value: 'Outdoor / Park' },
      { label: 'Intimate Gallery / Retail', value: 'Intimate Gallery / Retail' },
    ],
  },
  {
    category: 'setting',
    label: '3. Indoor / Outdoor',
    options: [
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Outdoor', value: 'Outdoor' },
    ],
  },
  {
    category: 'pax',
    label: '4. No. of Pax',
    options: [
      { label: '<50', value: 'Below 50' },
      { label: '50-150', value: '50-150' },
      { label: '150-300', value: '150-300' },
      { label: '300-500', value: '300-500' },
      { label: '500-1000', value: '500-1000' },
      { label: '1000-1500', value: '1000-1500' },
    ],
  },
  {
    category: 'days',
    label: '5. Number of Days',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4+', value: '4+' },
    ],
  },
  {
    category: 'budget',
    label: '6. Budget Range',
    options: [
      { label: 'RM3k - RM5k', value: 'RM3k - RM5k' },
      { label: 'RM5k - RM10k', value: 'RM5k - RM10k' },
      { label: 'RM10k - RM50k', value: 'RM10k - RM50k' },
      { label: 'RM50k - RM100k', value: 'RM50k - RM100k' },
      { label: 'RM100k - RM200k', value: 'RM100k - RM200k' },
    ],
  },
  {
    category: 'service',
    label: '7. Service Requirement',
    options: [
      { label: 'Full Sound + Lighting + Crew', value: 'Full Sound System + Lighting + Crew' },
      { label: 'Sound-System Management Only', value: 'Sound-System Management Only' },
      { label: 'Stage Lighting & Truss Rigging', value: 'Stage Lighting & Truss Rigging' },
      { label: 'LED + Sound + Lighting Installation', value: 'Installation of LED + Sound + Lighting + Event-related Projects' },
    ],
  },
]

const WHATSAPP_PHONE = '60126172342'

const INITIAL_STATE: BriefState = {
  event: 'House Event',
  venue: 'Hotel Grand Ballroom',
  setting: 'Indoor',
  pax: '50-150',
  days: '1',
  budget: 'RM10k - RM50k',
  service: 'Full Sound System + Lighting + Crew',
}

export default function BriefBuilder() {
  const [selection, setSelection] = useState<BriefState>(INITIAL_STATE)

  const message =
    'Hi AV Solutions Global, I would like to check availability and get a quote for my upcoming event:\n\n' +
    `• Event Type: ${selection.event}\n` +
    `• Venue: ${selection.venue}\n` +
    `• Setting: ${selection.setting}\n` +
    `• Estimated Pax: ${selection.pax}\n` +
    `• Duration: ${selection.days} day(s)\n` +
    `• Budget Range: ${selection.budget}\n` +
    `• Services Required: ${selection.service}\n\n` +
    'Could you let me know your availability and package options?'

  const selectOption = (category: keyof BriefState, value: string) => {
    setSelection((prev) => ({ ...prev, [category]: value }))
  }

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div
      id="brief-builder"
      className="relative rounded-[14px] border border-white/[0.12] bg-panel p-[30px] shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
    >
      <div className="mb-2 flex items-center gap-2.5 font-display text-[21px] font-bold text-white">
        ⚡ Instant Event Brief Generator
      </div>
      <p className="mb-6 text-[13px] leading-[1.5] text-mist">
        Select your event specs below. We'll generate a ready-to-send brief directly to our engineering desk
        via WhatsApp.
      </p>

      {STEPS.map((step) => (
        <div key={step.category} className="mb-5">
          <label className="mb-2.5 block text-xs font-bold uppercase tracking-[1px] text-slate-300">
            {step.label}
          </label>
          <div className="flex flex-wrap gap-2">
            {step.options.map((option) =>
              selection[step.category] === option.value ? (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectOption(step.category, option.value)}
                  className="cursor-pointer rounded-md border border-white bg-white px-4 py-2.5 text-[12.5px] font-bold text-ink-deep shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-150"
                >
                  {option.label}
                </button>
              ) : (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectOption(step.category, option.value)}
                  className="cursor-pointer rounded-md border border-white/10 bg-pill px-4 py-2.5 text-[12.5px] font-medium text-slate-300 transition-all duration-150 hover:border-white/35 hover:text-white"
                >
                  {option.label}
                </button>
              ),
            )}
          </div>
        </div>
      ))}

      <div className="mt-6 rounded-lg border border-white/10 bg-void p-[18px]">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[1px] text-slate-500">
          WhatsApp Message Preview:
        </div>
        <pre className="mb-4 whitespace-pre-wrap rounded-md border border-white/[0.08] bg-panel-inset p-3.5 font-mono text-[13px] leading-[1.6] text-slate-200">
          {message}
        </pre>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md border-none bg-green-500 p-3.5 text-sm font-extrabold tracking-[0.5px] text-[#022c22] transition-all duration-200 hover:-translate-y-px hover:bg-green-600"
        >
          Open in WhatsApp & Get Same-Day Quote
        </button>
      </div>
    </div>
  )
}
