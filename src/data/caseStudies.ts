export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  description: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  tools: string[]
  duration: string
  team: string[]
  imageUrl?: string
  gallery?: string[]
  heroColor: string
  year: number
  client?: string
  brief?: string
  insights?: string[]
  personas?: {
    name: string
    profile: string
    goal: string
    fear: string
    quote: string
  }[]
  principles?: {
    title: string
    description: string
  }[]
  process?: {
    phase: string
    timeframe: string
    summary: string
    findings?: string[]
  }[]
  designDecisions?: {
    title: string
    description: string
  }[]
  designSystem?: {
    colors?: {
      role: string
      value: string
      hex?: string
    }[]
    typography?: string[]
    spacing?: string[]
    components?: string[]
  }
  qualitativeFeedback?: string[]
  takeaways?: string[]
}

export const caseStudies: Project[] = [
  {
    id: '5',
    slug: 'flourish-ai-figma-mcp-fintech-experiment',
    title: 'Flourish',
    subtitle: 'AI-driven fintech UI system: from one moodboard to 20+ production-ready screens in a single conversation',
    category: 'Experiment · AI Integration · Design Systems',
    description:
      'Flourish is a complete fintech mobile banking application design system built through conversational AI execution using Claude + Figma MCP, without manual layer-by-layer authoring in Figma. Starting from a single moodboard image, the system expanded into 22 component sets, 197 variable tokens, 22 text styles, and 20+ production-ready screens across onboarding, verification, account setup, direct deposit, credit monitoring, card management, and home dashboard experiences.',
    brief:
      'Prove that AI + Figma MCP can compress fintech design-system production from weeks to hours without sacrificing quality. Deliverables needed a complete primitive-to-semantic token architecture, Light/Dark readiness, component-first assembly, and automated audits for binding consistency.',
    challenge:
      'High-speed generation often creates hidden design debt: raw values, one-off layouts, untracked variants, and inconsistent typography. The challenge was to keep velocity high while ensuring every property remained token-bound, reusable, and reliable for design-to-code handoff.',
    solution:
      'I implemented a protocol-driven workflow: moodboard analysis to primitives, semantic aliasing with Light/Dark modes, type system generation, component-first construction, and mandatory post-build audits. A custom figma-token-binding skill enforced variable usage for paints, spacing, radii, and typography so every screen could ship with 0 unbound issues.',
    insights: [
      'Encoding design rules as an AI skill was more reliable than documentation alone.',
      'Component-first architecture reduced duplication and accelerated multi-screen production.',
      'Discovery-before-creation scripts prevented variable and style reference mistakes.',
      'Automated token audits turned consistency checks from manual effort to a repeatable gate.',
      'Fully token-bound design files improved downstream design-to-code parity.',
    ],
    principles: [
      {
        title: 'Primitives Before Semantics',
        description:
          'Foundational scales were established first, then semantic aliases mapped to Light and Dark modes.',
      },
      {
        title: 'Component-First, Screen-Second',
        description:
          'Every missing UI pattern was componentized before being used in production screens.',
      },
      {
        title: 'Zero Hardcoded Values',
        description:
          'Colors, spacing, radii, and text properties used bound variables instead of raw values.',
      },
      {
        title: 'Audit Before Acceptance',
        description:
          'No screen was accepted until automated token-binding checks passed with 0 issues.',
      },
      {
        title: 'Human Feedback, AI Execution',
        description:
          'Design direction remained human-led through screenshot reviews and comment-based iteration.',
      },
    ],
    process: [
      {
        phase: 'Phase 1: Foundation (Moodboard to Tokens)',
        timeframe: 'Phase 1',
        summary:
          'Extracted brand signals from the moodboard and generated primitive and semantic token layers with mode support.',
        findings: [
          'Built 91 primitives and 106 semantic aliases (197 variables total).',
          'Configured Light and Dark token mappings from the start.',
          'Generated 22 Mulish-based text styles with token-backed typography properties.',
        ],
      },
      {
        phase: 'Phase 2: Component Library',
        timeframe: 'Phase 2',
        summary:
          'Ran component inventory and gap analysis before screen work, then built reusable components with full state coverage.',
        findings: [
          'Created 22 component sets including button, input, card, and tab systems.',
          'Built 60 button variants plus text, password, and select input state variants.',
          'Produced supporting visual systems: 20 icons, 13 illustrations, and 6 logo variants.',
        ],
      },
      {
        phase: 'Phase 3: Screen Production',
        timeframe: 'Phase 3',
        summary:
          'Composed screens from component instances, then executed audits and comment-driven iteration loops.',
        findings: [
          'Delivered 20+ production-ready fintech mobile screens.',
          'Sustained 3-5 complete screens per interaction in production cycles.',
          'Achieved 0 unbound token issues after automated verification.',
        ],
      },
    ],
    designDecisions: [
      {
        title: 'Custom Token-Binding Skill as Guardrail',
        description:
          'The figma-token-binding skill enforced variable APIs and prevented raw-value regressions.',
      },
      {
        title: 'Mandatory Discovery Script per Task',
        description:
          'Each task started by caching variable and text-style IDs to avoid naming mismatches.',
      },
      {
        title: 'Gap Analysis Before Screen Creation',
        description:
          'Reuse checks were required before screen assembly; missing pieces were built as components first.',
      },
      {
        title: 'Hybrid Layout for Visual Depth',
        description:
          'Used auto-layout inside sections with selective absolute positioning for overlap-heavy fintech card compositions.',
      },
      {
        title: 'Constraint-Aware API Execution',
        description:
          'Worked with Figma API constraints using explicit patterns for font loading, sizing modes, and instance-safe updates.',
      },
    ],
    designSystem: {
      colors: [
        { role: 'Primary Green', value: 'Trust and core fintech actions', hex: '#02554A' },
        { role: 'Accent Yellow', value: 'Highlights and callout moments', hex: '#F9B342' },
        { role: 'Action Coral', value: 'Interactive emphasis and feedback', hex: '#EE754D' },
        { role: 'Soft Surface Pink', value: 'Supportive backgrounds and sections', hex: '#FDECEE' },
      ],
      typography: [
        '22 styles: Display, Heading, Body, Label, Caption, and Utility groups.',
        'Mulish as primary production type family for readability and consistency.',
        'Font size, line-height, and letter-spacing bound to type tokens.',
      ],
      spacing: [
        'Primitive and semantic spacing variables standardized layout rhythm.',
        'Radii and spacing values are variable-bound across components and screens.',
        'Shared space tokens enable scalable updates and theme consistency.',
      ],
      components: [
        '22 component sets including Button (60 variants), Text/Password/Select Inputs, and Bottom Tab Bar',
        'Account, credit score, promo, progress, and info cards for fintech dashboard composition',
        '20 icons with consistent 20x20 stroke style',
        '13 illustrations and 6 logo variants tied to the brand system',
      ],
    },
    results: [
      { metric: 'Variable Tokens', value: '197' },
      { metric: 'Component Sets', value: '22' },
      { metric: 'Text Styles', value: '22' },
      { metric: 'Production Screens', value: '20+' },
      { metric: 'Screen Throughput', value: '3-5 / interaction' },
      { metric: 'Token Audit Status', value: '0 issues' },
      { metric: 'Time Reduction', value: '~95%' },
      { metric: 'Traditional Timeline', value: '2-3 weeks' },
      { metric: 'AI + MCP Timeline', value: '1 day' },
    ],
    qualitativeFeedback: [
      'Comment-driven iteration in Figma felt close to real production design reviews.',
      'Component updates cascaded quickly across every dependent screen.',
      'Token naming made design-to-code handoff clearer for implementation.',
    ],
    takeaways: [
      'AI acceleration is strongest when paired with enforced system constraints.',
      'A token-bound file behaves like structured product data, not just visuals.',
      'Automated audits should be a standard quality gate before handoff.',
      'Conversational production can compress weeks of work into hours without cutting rigor.',
    ],
    tools: ['Claude', 'Figma MCP', 'Figma Plugin API', 'Design Tokens', 'Component Systems', 'Automated QA'],
    imageUrl: '/Flourish/cover.png',
    gallery: [
      '/Flourish/Home.jpg',
      '/Flourish/Home — Scrolled.jpg',
      '/Flourish/Onboarding — Welcome.jpg',
      '/Flourish/Onboarding — Carousel (B).jpg',
      '/Flourish/Registration — Basic Info.jpg',
      '/Flourish/Registration — Basic Info Filled.jpg',
      '/Flourish/Phone — Empty.jpg',
      '/Flourish/Phone — Filled.jpg',
      '/Flourish/Verify — Empty.jpg',
      '/Flourish/Verify — Filled.jpg',
      '/Flourish/Password — Empty.jpg',
      '/Flourish/Password — Weak.jpg',
      '/Flourish/Password — Strong.jpg',
      '/Flourish/Pick Card Color.jpg',
      '/Flourish/Get your Card.jpg',
      '/Flourish/Details — Empty.jpg',
      '/Flourish/Details — Filled.jpg',
      '/Flourish/Details — Dropdown Open.jpg',
      '/Flourish/Securing Account.jpg',
      '/Flourish/Direct Deposit.jpg',
      '/Flourish/image 1.jpg',
    ],
    duration: '1 day',
    team: ['Rishabh Sharma - Product Designer (Sole Designer)'],
    year: 2026,
    client: 'Flourish Fintech Concept',
    heroColor: 'from-[#02554A] via-[#EE754D] to-[#F9B342]',
  },
  {
    id: '4',
    slug: 'givehope-donation-experience-2026',
    title: 'GiveHope Donation Experience',
    subtitle: 'End-to-end donation, payment, profile, and settings UX designed for trust, transparency, and repeat giving',
    category: 'UX/UI Design · Fintech for Social Impact',
    description:
      'Using MCP-connected Figma analysis, this case study captures a comprehensive 2026 donation platform flow for GiveHope. The project spans campaign discovery, payment review with saved and new cards, recurring donation management, billing address editing, and account-level communication preferences. The design language prioritizes conversion confidence, clear transaction visibility, and donor trust through transparent copy and secure-payment cues.',
    brief:
      'Design a unified donor journey that reduces donation drop-off, simplifies payment decisions, and supports long-term retention via recurring giving and account management. Deliverables had to include a scalable design system, clearly separated production screens, and responsive variants for desktop, tablet, and mobile.',
    challenge:
      'The product had to balance emotional motivation (give now) with operational clarity (card details, recurring schedules, billing address, and notification controls). Without strong hierarchy and explicit trust signals, donors could hesitate at payment and settings stages, reducing completion and repeat contribution behavior.',
    solution:
      'I designed a trust-first flow architecture: clear step progression for payment, saved-card selection with fallback to new card entry, transparent order summary, and explicit security language. Supporting account flows include modals for editing cards and recurring plans, plus communication and privacy settings that make donor control explicit without cluttering core conversion paths.',
    insights: [
      'Donors needed clear payment context (amount, type, total) before committing at checkout.',
      'Saved-card flows reduced friction, but users still wanted obvious fallback to add a new card.',
      'Security microcopy near CTAs increased confidence at high-intent decision points.',
      'MCP-extracted modal patterns showed a repeatable structure: header, preview, form body, and dual-action footer.',
      'Account-level controls (recurring, communication, privacy) were critical for retention trust, not just post-donation utility.',
    ],
    principles: [
      {
        title: 'Emotional Connection',
        description:
          'Use warm visual tone and cause-first language so donation actions feel meaningful, not transactional.',
      },
      {
        title: 'Clear Hierarchy',
        description:
          'Prioritize key headings, payment summaries, and primary actions so users can decide quickly with low cognitive load.',
      },
      {
        title: 'Trust Signals',
        description:
          'Use explicit secure-payment copy, masked card details, and transparent recurring-charge details to reduce risk perception.',
      },
      {
        title: 'Accessibility First',
        description:
          'Ensure WCAG 2.1 AA standards with a minimum 4.5:1 contrast ratio and readable text sizing across breakpoints.',
      },
      {
        title: 'Responsive by Default',
        description:
          'Adopt a mobile-first system with graceful degradation from desktop to tablet to mobile contexts.',
      },
    ],
    process: [
      {
        phase: 'Flow Mapping and Scope Definition',
        timeframe: 'Week 1',
        summary:
          'Mapped end-to-end donor journeys across campaign browsing, payment, recurring management, and account settings.',
      },
      {
        phase: 'Design System Definition',
        timeframe: 'Week 1-2',
        summary:
          'Defined reusable tokens and components for forms, cards, summaries, settings rows, tab bars, and modal actions.',
      },
      {
        phase: 'Screen Production and States',
        timeframe: 'Week 2-3',
        summary:
          'Produced core screens for saved-card and new-card payment, edit-card modal, recurring plan edits, billing address edit, and communication settings.',
      },
      {
        phase: 'Responsive Variants and QA',
        timeframe: 'Week 4',
        summary:
          'Documented responsive behavior at desktop (1440px), tablet (768px), and mobile (375px), including spacing, form stacking, and action placement.',
      },
    ],
    designDecisions: [
      {
        title: 'Saved Card First, New Card Fallback',
        description:
          'Returning users see a fast saved-card selector, while an explicit use-a-different-card path preserves flexibility.',
      },
      {
        title: 'Transparent Order Summary Block',
        description:
          'Order details (amount, type, fee, total) are always visible to reduce ambiguity before completion.',
      },
      {
        title: 'Embedded Security Reassurance',
        description:
          'Security copy is placed near payment controls and recurring updates to reduce abandonment anxiety.',
      },
      {
        title: 'Edit-in-Place Account Management',
        description:
          'Card edits, recurring updates, and billing address changes use focused modal and side-panel patterns to preserve context.',
      },
      {
        title: 'Preference Controls for Retention Trust',
        description:
          'Communication and privacy settings were treated as product trust surfaces, not secondary admin pages.',
      },
    ],
    designSystem: {
      colors: [
        { role: 'Primary CTA', value: 'Donation and save actions', hex: '#E56A54' },
        { role: 'Trust Navy', value: 'Headings and primary controls', hex: '#1B3A52' },
        { role: 'Soft Surface', value: 'Card and section backgrounds', hex: '#F8FAFC' },
        { role: 'Divider', value: 'Structural separators', hex: '#E5E7EB' },
        { role: 'Input Border', value: 'Form field boundary', hex: '#D0D0D0' },
        { role: 'Placeholder Text', value: 'Input placeholder state', hex: '#A5A5A5' },
        { role: 'Positive Security', value: 'Safe-state and trust notes', hex: '#2F9E8F' },
        { role: 'Canvas', value: 'Primary background', hex: '#FFFFFF' },
      ],
      typography: [
        'Large sectional headings for payment and settings context.',
        'Readable form labels and helper text with clear hierarchy from title to metadata.',
        'Action-first button labels for completion and confirmation states.',
      ],
      spacing: [
        '8px base spacing system for forms and cards.',
        'Consistent panel padding and row heights for editable account data.',
        'Responsive margin and stack rules from desktop to mobile.',
      ],
      components: [
        'Saved card selector list',
        'New card payment form fields',
        'Modal/EditCard with header, card preview, and toggle state',
        'Order summary panel',
        'Recurring donation editable row',
        'Billing address edit panel',
        'Communication preference toggle rows',
        'Modal action button row (cancel/confirm)',
      ],
    },
    results: [
      { metric: 'Primary Deliverable', value: 'Donation UX System' },
      { metric: 'Design System Coverage', value: 'Colors, Type, Components' },
      { metric: 'Screen Documentation', value: 'Screen-Separated Frames' },
      { metric: 'Responsive Variants', value: '1440 / 768 / 375' },
      { metric: 'Accessibility Standard', value: 'WCAG 2.1 AA' },
      { metric: 'Minimum Contrast', value: '4.5:1' },
    ],
    qualitativeFeedback: [
      'Saved card flow makes checkout feel fast and familiar.',
      'Recurring controls are clear and less intimidating than typical billing settings.',
      'Security messaging feels reassuring without being overwhelming.',
    ],
    takeaways: [
      'Donation products need conversion UX and account-management UX to be designed as one system.',
      'Trust is built through repeated micro-interactions, not only branding.',
      'Responsive clarity is essential in form-heavy financial flows.',
    ],
    tools: ['Figma', 'MCP Design Context', 'Design System', 'Interaction Design', 'Accessibility QA'],
    imageUrl: '/Give hope/Nonprofit Charity Platform Design-1.jpg',
    gallery: [
      '/Give hope/Nonprofit Charity Platform Design-1.jpg',
      '/Give hope/Nonprofit Charity Platform Design-2.jpg',
      '/Give hope/Nonprofit Charity Platform Design-3.jpg',
      '/Give hope/Nonprofit Charity Platform Design-4.jpg',
      '/Give hope/Nonprofit Charity Platform Design-5.jpg',
      '/Give hope/Nonprofit Charity Platform Design-6.jpg',
      '/Give hope/Edit Card – Saved Card.jpg',
      '/Give hope/Profile – Payment Methods.jpg',
      '/Give hope/Nonprofit Charity Platform Design.jpg',
    ],
    duration: '4 weeks',
    team: ['Rishabh Sharma - Product Designer (Sole Designer)'],
    year: 2026,
    client: 'GiveHope',
    heroColor: 'from-[#E56A54] via-[#F59E7D] to-[#2F9E8F]',
  },
  {
    id: '3',
    slug: 'credflow-b2b-payments-receivables',
    title: 'Credflow',
    subtitle: 'B2B payment and receivables management platform for Indian SMEs, designed for trust-first automation and investor-ready clarity',
    category: 'UX/UI Design · B2B Fintech',
    description:
      'Credflow is a B2B fintech SaaS product built to help Indian SMEs reduce payment delays, automate receivables follow-ups, and gain cash-flow visibility across mobile and web. Over a 3-month MVP timeline, I led UX/UI as the sole designer across research, workflow design, mobile and web interfaces, and handoff. The product was designed to balance automation with human control, with WhatsApp-first communication and visible Tally integration as core trust signals.',
    brief:
      'Indian SMEs lose significant revenue due to delayed payments and unmanaged receivables. Business owners spend hours manually chasing invoices with little visibility into who owes what. Credflow needed a complete, investor-ready MVP in 3 months that could prove the business logic worked, while remaining simple for non-technical SME owners in tier-2 India.',
    challenge:
      'The core UX challenge was not just dashboard design. Existing collection behavior relied on memory, personal follow-ups, and relationship-sensitive communication. Users wanted automation but feared losing control and sounding robotic with customers. The product needed to automate follow-ups, keep communication human, and provide high-confidence visibility from trusted Tally data.',
    solution:
      'I defined a trust-first UX strategy across mobile and web: mandatory preview-before-send for reminders, WhatsApp as the default communication channel, prominent Tally integration cues, and condition-based debtor segmentation for nuanced automation. The MVP delivered six core modules: payment delay automation, quotation workflows, KPI-led dashboarding, flexible collection handling, humanized communication/broadcasting, and deeper receivables operations on web.',
    insights: [
      'Business owners wanted control over messaging, not black-box automation.',
      'WhatsApp was the primary business communication channel across target users.',
      'Fast KPI visibility was more valuable than dense report reading.',
      'Tally data trust and zero re-entry were central adoption drivers.',
      'Relationship sensitivity shaped reminder tone and workflow preferences.',
    ],
    personas: [
      {
        name: 'Ramesh, 44 - Trading Business Owner, Delhi',
        profile:
          'Runs a mid-size trading company with 80-120 active debtor accounts and uses Tally daily. Manages follow-ups personally over calls and WhatsApp.',
        goal: 'Spend less time chasing payments and more time on sourcing and growth.',
        fear: 'Automated reminders could offend long-standing customers.',
        quote: 'Mujhe pata hi nahi chalta kaun kitna baaki hai jab tak mahina end nahi hota.',
      },
      {
        name: 'Priya, 31 - Accounts Manager, Manufacturing Firm, Noida',
        profile:
          'Manages invoice collections across reps and regions for a large manufacturing business. Uses Excel-heavy manual aging analysis each week.',
        goal: 'Automate aging and reminders while keeping full workflow visibility.',
        fear: 'Losing traceability of what was sent, when, and to whom.',
        quote: 'I need to know what has been sent, when, and who responded.',
      },
    ],
    principles: [
      {
        title: 'Functional Confidence Over Visual Decoration',
        description:
          'Given MVP and investor constraints, the focus was information clarity, hierarchy, and speed of understanding over visual ornamentation.',
      },
      {
        title: 'Control Before Automation',
        description:
          'Automation flows were designed with transparency and intervention points so users could review and edit communication before send.',
      },
      {
        title: 'Mobile-First, Tally-Connected',
        description:
          'Primary usage patterns were mobile, with web reserved for deeper operations. Tally integration was surfaced as a core value proposition.',
      },
      {
        title: 'WhatsApp As Default Channel',
        description:
          'Reminder and communication flows prioritized WhatsApp first, with email and SMS as secondary channels to match real SME behavior.',
      },
    ],
    process: [
      {
        phase: 'Problem Space Mapping',
        timeframe: 'Weeks 1-2',
        summary:
          'Studied receivables workflows in Indian SMEs through interviews, competitor audits, and technical scoping with founders.',
        findings: [
          'Interviewed 6 SME owners from manufacturing, trading, and distribution.',
          'Benchmarked Vyapar, Khatabook, Zoho Books, and OkCredit.',
          'Mapped Tally integration opportunities and constraints with engineering.',
        ],
      },
      {
        phase: 'MVP Flow Design (Mobile + Web)',
        timeframe: 'Weeks 3-8',
        summary:
          'Designed six high-priority feature areas in parallel, emphasizing daily-use collection and communication workflows.',
        findings: [
          'Reminder preview before send removed major trust friction.',
          'Debtor segmentation unlocked differentiated escalation strategies.',
          'KPI-first dashboarding improved at-a-glance decision speed.',
        ],
      },
      {
        phase: 'Design System and Componentization',
        timeframe: 'Weeks 6-10',
        summary:
          'Built reusable mobile and web components with consistent state logic for receivables, communication, and reporting modules.',
      },
      {
        phase: 'Prototype and Handoff',
        timeframe: 'Weeks 10-12',
        summary:
          'Delivered annotated Figma artifacts, interaction specifications, and export-ready assets for MVP implementation and investor demos.',
      },
    ],
    designDecisions: [
      {
        title: 'Mandatory Preview-Before-Send',
        description:
          'Every automated reminder required a preview step so users retained confidence and accountability over customer-facing communication.',
      },
      {
        title: 'WhatsApp-First Information Architecture',
        description:
          'WhatsApp was designed as the primary tab and default route, reframing Credflow as a practical collections manager, not a generic reminder tool.',
      },
      {
        title: 'Tally Integration As Front-Stage Trust Signal',
        description:
          'Integration visibility was intentionally surfaced on high-salience screens to answer data credibility concerns instantly.',
      },
      {
        title: 'Condition-Based Debtor Segmentation',
        description:
          'Workflow builder supported nuanced sequences (for example 30-day vs 90-day overdue) to reflect real B2B recovery patterns.',
      },
      {
        title: 'Humanized, Editable Message Templates',
        description:
          'Template tone libraries (formal, friendly, firm) plus full edit capability reduced user anxiety around relationship damage.',
      },
    ],
    designSystem: {
      colors: [
        { role: 'Primary Blue', value: 'Trust and authority', hex: '#2B5CE6' },
        { role: 'Light Blue', value: 'Surface and background tint', hex: '#EEF2FF' },
        { role: 'Success Green', value: 'Collected and positive states', hex: '#22C55E' },
        { role: 'Warning Amber', value: 'Due soon and attention states', hex: '#F59E0B' },
        { role: 'Danger Red', value: 'Overdue and critical states', hex: '#EF4444' },
        { role: 'Neutral Grey', value: 'Secondary text and labels', hex: '#64748B' },
        { role: 'White', value: 'Cards and elevated surfaces', hex: '#FFFFFF' },
      ],
      typography: [
        'Bold sans-serif for headings and high-importance UI labels.',
        'Body copy at 15px with 1.6 line-height for readability on dense operational screens.',
        'Tabular figure treatment for financial values and KPI consistency.',
        'Label sizing around 11-12px with medium weight for metadata.',
      ],
      spacing: [
        '4px base unit.',
        'Card padding: 16px on mobile and 24px on desktop.',
        'Grid: 4-column mobile and 12-column desktop layout system.',
      ],
      components: [
        'Debtor list item with current, due soon, and overdue states',
        'KPI metric card and aging analysis chart',
        'Reminder preview card and template editor',
        'Quotation line item row and product search autocomplete',
        'Collection entry form and contextual payment method fields',
        'Receipt share sheet and broadcast composer',
        'WhatsApp, SMS, and Email channel tab bar',
        'Bulk action table row and receivables filter sidebar',
        'Workflow condition builder and status chips',
        'Loading skeletons, empty states, and confirmation modals',
      ],
    },
    results: [
      { metric: 'MVP Delivery Timeline', value: '3 months' },
      { metric: 'Onboarding Completion Rate', value: '79%' },
      { metric: 'Reminder Feature Adoption', value: '68%' },
      { metric: 'WhatsApp Reminder Usage', value: '91%' },
      { metric: 'Quotation Adoption (2 weeks)', value: '43%' },
      { metric: 'NPS (Beta)', value: '58' },
      { metric: 'Mobile Scope Delivered', value: '40+ screens' },
      { metric: 'Web Scope Delivered', value: '20+ screens' },
      { metric: 'Design Components', value: '36' },
      { metric: 'Seed Funding Outcome', value: 'Secured' },
    ],
    qualitativeFeedback: [
      'The preview before sending is the only reason I trusted it to send messages to my customers.',
      'It actually pulled my Tally data. I did not have to enter anything again.',
      'I sent Diwali greetings to 80 customers in 4 minutes. Usually this takes me half a day.',
    ],
    takeaways: [
      'Domain understanding in Indian B2B fintech directly improves decision quality in UX.',
      'In B2B products, trust-building interactions are core product mechanics, not polish.',
      'Investor-ready UX is a valid design deliverable with clarity prioritized over cleverness.',
      'Tight constraints can sharpen MVP value by forcing disciplined feature prioritization.',
    ],
    tools: ['Figma', 'Adobe XD', 'Photoshop', 'Prototyping', 'UX Research'],
    duration: '3 months',
    team: ['Rishabh Sharma - UX/UI Designer (Sole Designer)'],
    imageUrl: '/Credflow/image 103.jpg',
    gallery: [
      '/Credflow/image 105.jpg',
      '/Credflow/image 106.jpg',
      '/Credflow/image 107.jpg',
      '/Credflow/image 108.jpg',
      '/Credflow/image 109.jpg',
      '/Credflow/image 110.jpg',
      '/Credflow/image 111.jpg',
      '/Credflow/image 112.jpg',
      '/Credflow/image 2.jpg',
      '/Credflow/image 3.jpg',
      '/Credflow/image 4.jpg',
      '/Credflow/image 5.jpg',
      '/Credflow/image 6.jpg',
      '/Credflow/image 7.jpg',
    ],
    year: 2025,
    client: 'Credflow',
    heroColor: 'from-[#2B5CE6] via-[#3D7BFA] to-[#22C55E]',
  },
  {
    id: '2',
    slug: 'ripen-adulting-companion',
    title: 'Ripen',
    subtitle: 'Let\'s solve adulting together: a personalized mobile companion for first-time adult decisions',
    category: 'UX/UI Design',
    description:
      'Ripen is a mobile app designed for young adults navigating first-time life and money decisions, from getting a first credit card to building savings and managing everyday life admin. In a two-month sprint, I led the product from early concept to high-fidelity, tested UX. The core objective was to transform an intimidating category into a guided, motivating experience through personalization, visible progress, and an approachable tone.',
    brief:
      'Nobody teaches you how to be an adult. Ripen was conceived as a mobile companion to close that gap with a clear, gamified roadmap that helps young adults take confident next steps across money and life admin. The founding team brought an early concept and a tight two-month window. My role was to take the product from rough idea to validated high-fidelity design ready for handoff.',
    challenge:
      'Users in the 18-28 range repeatedly described the same pain points: shame around not understanding basic financial concepts, overwhelm from generic online advice, and uncertainty about what to do first. The product challenge was to design a journey that quickly builds trust, personal relevance, and momentum while keeping onboarding lightweight. We also needed to validate if gamification could motivate action without making serious life tasks feel childish.',
    solution:
      'I structured the UX around three principles: personalization before advice, progress made visible, and approachable clarity. The onboarding flow captures life stage and help areas before generating a tailored roadmap. Core tasks were reframed as Quests with clear states (locked, active, complete), progress indicators, and a celebratory completion moment (Quest Unlocked) that links directly to the next action. Over four phases (alpha testing, wireframes, UI design, and handoff), I delivered end-to-end flows for onboarding and OTP, dashboard, roadmap, quest detail, completion states, and a full featured credit-card quest. The visual system used warm coral, soft lavender, and sage green to balance confidence with emotional safety.',
    insights: [
      'Most users felt embarrassed about not understanding basic finance and life concepts.',
      'Generic content from search and video platforms felt overwhelming and impersonal.',
      'Users wanted specific next-step guidance tailored to their own life stage.',
      'Gamified progress cues motivated action when tied to real goals.',
    ],
    personas: [
      {
        name: 'Aanya, 22 - Fresh Graduate',
        profile:
          'Started her first job in Bengaluru with a salary account but no credit card, investments, or clear plan.',
        goal: 'Build a financial safety net without feeling overwhelmed.',
        fear: 'Making mistakes that hurt money outcomes or credit score.',
        quote: 'I just need someone to tell me: what do I do first?',
      },
      {
        name: 'Karan, 26 - Working Professional',
        profile:
          'Three years into his career with some savings but no structure and no clarity on priorities.',
        goal: 'Move from surviving to building long-term wealth.',
        fear: 'Spending time on the wrong thing in the wrong order.',
        quote: 'I know I should be doing more. I just do not know what more is.',
      },
    ],
    principles: [
      {
        title: 'Personalization Before Advice',
        description:
          'The onboarding learns life stage and current needs before showing recommendations, so users receive a roadmap that feels personally relevant from the first session.',
      },
      {
        title: 'Visible Progress At Every Step',
        description:
          'Tasks are framed as Quests with locked, active, and completed states so effort is acknowledged and momentum compounds through small wins.',
      },
      {
        title: 'Approachable Without Being Condescending',
        description:
          'Tone, visuals, and copy were designed for warm confidence: plain language, supportive feedback, and no patronizing simplification.',
      },
    ],
    process: [
      {
        phase: 'Alpha Testing With MVP',
        timeframe: 'Week 1-2',
        summary:
          'Ran lightweight alpha sessions to validate core flow comprehension and emotional response before visual refinement.',
        findings: [
          'Users wanted roadmap visibility before committing to onboarding steps.',
          'OTP entry needed stronger context and trust framing.',
          'Quest metaphor resonated and felt motivating.',
          'Life stage selection created the strongest sense of relevance.',
        ],
      },
      {
        phase: 'Wireframes',
        timeframe: 'Week 2-3',
        summary:
          'Iterated three times to validate information architecture, onboarding depth, and roadmap structure before high-fidelity work.',
      },
      {
        phase: 'UI Design',
        timeframe: 'Week 3-7',
        summary:
          'Designed complete high-fidelity flows for onboarding, dashboard, quest detail, roadmap, completion, and credit-card quest.',
      },
      {
        phase: 'Developer Handoff',
        timeframe: 'Week 8',
        summary:
          'Delivered annotated Figma specs, component library, interaction notes, and platform-specific responsive behaviors for iOS and Android.',
      },
    ],
    designDecisions: [
      {
        title: 'Phone + OTP Login',
        description:
          'Chosen to reduce onboarding friction and align with familiar mobile-first patterns, with reassuring copy to avoid abrupt security tone.',
      },
      {
        title: 'Life Stage As Onboarding Centerpiece',
        description:
          'Asking where users are in life was easier and more confidence-building than asking what they want to do upfront.',
      },
      {
        title: 'Multi-Select Help Areas',
        description:
          'A low-pressure multi-select gave enough personalization signal while keeping exploration open and non-judgmental.',
      },
      {
        title: 'Visual Quest Roadmap Over Task List',
        description:
          'Connected nodes and progress states increased motivation compared with static list-based tasks.',
      },
      {
        title: 'Quest Unlocked Celebration State',
        description:
          'A full-screen completion moment reinforced achievement and created a stronger next-action loop.',
      },
    ],
    designSystem: {
      colors: [
        { role: 'Primary', value: 'Coral / Salmon', hex: '#F4735A' },
        { role: 'Secondary', value: 'Soft Lavender', hex: '#C5B8F0' },
        { role: 'Accent', value: 'Sage Green', hex: '#6DBF99' },
        { role: 'Background', value: 'Warm White', hex: '#FAFAF8' },
      ],
      typography: [
        'Bold sans display style for confidence and modernity.',
        'Body copy set on a 16px base with readable spacing.',
        'UI labels at 12-14px medium weight with generous tracking.',
      ],
      spacing: [
        '4px base unit.',
        'Standard gaps: 8, 12, 16, 24, 32, 48px.',
        'Card padding: 20px horizontal and 24px vertical.',
      ],
      components: [
        'Phone input with country code selector',
        'OTP input grid',
        'Life stage selection card',
        'Help area multi-select chips',
        'Quest card states',
        'Quest roadmap nodes',
        'Quest and roadmap progress bars',
        'Step-by-step guide items',
        'Quest completion celebration screen',
        'Bottom navigation',
        'Half-sheet modal',
        'Toast notification',
        'Primary and secondary CTA buttons',
      ],
    },
    results: [
      { metric: 'Onboarding Completion', value: '84%' },
      { metric: 'Quest Start Rate', value: '76%' },
      { metric: 'D7 Retention', value: '52%' },
      { metric: 'Average Quests Started/User', value: '2.3' },
      { metric: 'NPS (Beta)', value: '61' },
      { metric: 'Design Sprint Timeline', value: '2 months' },
    ],
    qualitativeFeedback: [
      'Finally an app that does not assume I already know everything.',
      'The Quest Unlocked screen made me feel good about myself.',
      'I showed my friends and they said they need this too.',
      'The onboarding actually listens to where I am.',
    ],
    takeaways: [
      'Personalization works best as a core UX strategy, not a late-stage feature.',
      'Tone is a product lever: copy, visual style, and motion shape trust.',
      'Completion moments drive behavior and deserve first-class design attention.',
      'Tight constraints improve focus when the core product loop is prioritized.',
    ],
    tools: ['Figma', 'Prototyping', 'User Testing', 'User Research', 'Design System'],
    duration: '2 months',
    team: ['Rishabh Sharma - Senior UX/UI Designer (Sole Designer)'],
    imageUrl: '/Ripen/image 22.jpg',
    gallery: [
      '/Ripen/image 124.jpg',
      '/Ripen/image 125.jpg',
      '/Ripen/image 22.jpg',
      '/Ripen/Splash screen.jpg',
      '/Ripen/Splash screen-1.jpg',
      '/Ripen/Splash screen-2.jpg',
      '/Ripen/Splash screen-3.jpg',
      '/Ripen/Splash screen-4.jpg',
      '/Ripen/Splash screen-5.jpg',
      '/Ripen/Splash screen-6.jpg',
      '/Ripen/Splash screen-7.jpg',
      '/Ripen/Splash screen-8.jpg',
    ],
    year: 2024,
    client: 'Ripen',
    heroColor: 'from-[#F4735A] via-[#C5B8F0] to-[#6DBF99]',
  },
  {
    id: '1',
    slug: 'la-polo-international',
    title: 'La Polo International',
    subtitle: "Content Platform Redesign for India's Leading Polo Lifestyle Publication",
    category: 'UX/UI Design',
    description:
      "La Polo International is India's leading polo lifestyle publication — covering tournaments, fashion, culture, and the personalities behind the sport. Their digital presence was a generic WordPress theme that communicated none of the exclusivity, craft, or prestige that polo — and the La Polo brand — stood for. Advertisers were hesitant, readers bounced quickly, and the editorial team's hard work wasn't being surfaced effectively. I redesigned their platform end-to-end: a full design system, five page templates, and an interactive prototype — all designed mobile-first.",
    challenge:
      "A heuristic review, 5-second test with 8 target users, and a Google Analytics audit surfaced four critical failures. Every article looked identical — no editorial hierarchy, no clear entry point. La Polo's biggest asset, stunning polo photography, was compressed into small thumbnails, making the site feel lifeless despite rich content. With 62% of sessions on mobile, the experience was a broken squeeze of the desktop layout: unreadable type, broken navigation, no workable structure. And with no newsletter CTA, no membership prompt, and no recommended content mechanism, every session ended with nothing to show for it. Baseline: 73% bounce rate, 1m 20s avg. session, 1.4 pages per session, zero newsletter subscribers.",
    solution:
      "I defined three design principles before touching a screen: imagery first (every template rebuilt around full-bleed photography as the hero), editorial hierarchy through a deliberate three-tier type system (Playfair Display for display, Source Serif Pro for body, Inter for UI), and building for return — a contextual inline newsletter module woven into article flow at paragraph 4, plus a Recommended Stories rail. I designed five core templates in Figma: an editorial homepage grid, an event detail page with stat tiles and venue info, story pages with a centred 680px reading column, a longform interactive polo history timeline, and a fully independent mobile experience with thumb-friendly navigation and 18px body type. The design system delivered 18 reusable components, colour tokens (deep navy #0E1B2E, warm gold #C9A84C, off-white #F7F4EF), a 4px-base spacing scale, and a 12/4-column grid.",
    results: [
      { metric: 'Bounce Rate', value: '73% → 43%' },
      { metric: 'Avg. Session Duration', value: '1m 20s → 2m 15s' },
      { metric: 'Pages Per Session', value: '1.4 → 4.5 (+221%)' },
      { metric: 'Newsletter Subscribers', value: '0 → 4,200' },
      { metric: 'Mobile Session Duration', value: '+94%' },
      { metric: 'Editorial Formatting Time', value: '-40%' },
    ],
    tools: ['Figma', 'Adobe XD'],
    duration: '10 weeks',
    team: ['UX/UI Designer (Sole)'],
    imageUrl: '/Lapolo/image 32.jpg',
    gallery: ['/Lapolo/image 23.jpg', '/Lapolo/image 25.jpg', '/Lapolo/image 28.jpg', '/Lapolo/image 29.jpg', '/Lapolo/image 31.jpg', '/Lapolo/image 33.jpg', '/Lapolo/image 34.jpg', '/Lapolo/image 35.jpg', '/Lapolo/image 36.jpg', '/Lapolo/image 112.jpg', '/Lapolo/image 113.jpg'],
    year: 2023,
    client: 'La Polo International',
    heroColor: 'from-slate-900 to-amber-700',
  },
]
