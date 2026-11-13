import { useEffect, useId, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, Menu, X } from "lucide-react";
import { sendEnquiry, type EnquiryInput } from "@/lib/enquiry";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

const CHANNELS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/susheeljsr",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:susheel.jsr@gmail.com",
    external: false,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/susheel.jsr/",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919204266568",
    external: true,
  },
] as const;

const METRICS = [
  { value: "21+", label: "Years in industry" },
  { value: "10+", label: "Years in HR leadership" },
  { value: "5,000+", label: "Contract workforce" },
  { value: "30+", label: "Conciliations handled" },
] as const;

const PRACTICES = [
  {
    title: "Talent Acquisition",
    copy: "Critical hiring, reservation rosters, manpower planning and a clear onboarding path for executives and non-executives.",
  },
  {
    title: "Employee Relations",
    copy: "Grievances, domestic enquiry, welfare and the daily trust between management, staff and workmen.",
  },
  {
    title: "HR Operations",
    copy: "Establishment, attendance, records, payroll support and the service routines a plant HR office is judged on.",
  },
  {
    title: "Industrial Relations",
    copy: "Trade-union engagement, preventive forums and dispute handling that keeps operations moving.",
  },
  {
    title: "Labour & Employment Law",
    copy: "Contract labour, wages, safety, standing orders, EPF and ESI — advised from the statute, not from habit.",
  },
  {
    title: "Contract Labour Governance",
    copy: "Contractor oversight, gate-pass discipline, compliance trackers and MIS for large contract workforces.",
  },
  {
    title: "Performance Management",
    copy: "A structured PMS for executives and non-executives, tied to role clarity rather than a once-a-year form.",
  },
  {
    title: "Statutory Compliance",
    copy: "Registrations, returns, inspections and the documentation lenders, auditors and authorities actually ask for.",
  },
  {
    title: "HR Systems",
    copy: "SAP HCM, biometric attendance, dashboards and contractor MIS used for decisions, not decoration.",
  },
] as const;

const ROLES = [
  {
    period: "April 2024 — Present",
    title: "Manager – Human Resources",
    org: "Talcher Fertilizers Limited",
    place: "Talcher, Odisha",
    note: "Joint venture of CIL, GAIL, RCF and FCIL",
    points: [
      "Partner to the Head of HR and project leadership on organisation effectiveness, workforce capability and statutory governance for a large greenfield fertilizer project.",
      "Industrial and employee relations covering company employees and more than 5,000 contract workmen, with contractors, representatives and statutory authorities.",
      "Compliance framework across the Contract Labour Act, inter-state migrant workmen provisions, the Code on Wages, the Occupational Safety, Health and Working Conditions Code, and related employment law.",
      "Recruitment for critical positions, reservation rosters, manpower planning, onboarding, and a performance management system for executives and non-executives.",
      "Contractor labour MIS, digital compliance trackers, biometric attendance and HR dashboards.",
      "Recognised by the Managing Director for statutory and legal coordination supporting financial closure of a ₹12,250.06 crore rupee term loan.",
    ],
  },
  {
    period: "November 2016 — April 2024",
    title: "Personnel Officer (Human Resources)",
    org: "Madhya Pradesh Power Generating Company Limited",
    place: "Madhya Pradesh",
    note: "State thermal power generating company",
    points: [
      "HR business partner to the Plant Head for a large thermal station: about 1,200 employees, more than 3,000 contract workmen, and a team of 13 HR professionals.",
      "Collective engagement with nearly 13 recognised trade unions, with negotiations and dispute resolution aimed at uninterrupted generation.",
      "Recruitment and onboarding of about 120 executives and non-executives, with induction, confirmation, transfers, promotions and employee records.",
      "More than 30 conciliation proceedings and eight domestic enquiries, conducted with labour law and the principles of natural justice.",
      "SAP HCM, HR digitisation, biometric attendance, dashboards and process standardisation.",
      "Compliance with the Factories Act, Industrial Disputes Act, Contract Labour Act, Apprentices Act, EPF, ESI and standing orders, including CAG, RTI and statutory inspections. Republic Day Awards in 2017 and 2023.",
    ],
  },
  {
    period: "September 2005 — October 2016",
    title: "Associate / Junior Technician",
    org: "Tata Steel Limited",
    place: "Jamshedpur",
    note: "Electrical maintenance, integrated steelworks",
    points: [
      "Eleven years from apprentice to associate in electrical maintenance — breakdowns, preventive work, shutdowns and safe working practice.",
      "Kaizen, quality circles and suggestion schemes, with SAP PM master data, planning and equipment reliability.",
      "Member of the Joint Department Council, alongside safety and canteen committees.",
      "The shop-floor years still shape how I partner with plant leadership on people, discipline and productivity.",
    ],
  },
] as const;

const FORMATION = [
  "LL.B. — Awadhesh Pratap Singh University",
  "MBA, Human Resource Management & Marketing — Kolhan University",
  "B.Sc., Information Technology — Sikkim Manipal University",
  "Senior Executive Development Programme, Building Future CHROs — XLRI (pursuing)",
] as const;

const CREDENTIALS = [
  "Independent Director — IICA Databank, IDDB-NR-202603-088622 (11 March 2026 to 10 March 2027)",
  "BHASKAR ID IN-0626-9484JH — Startup India",
  "UGC-NET — Labour Welfare / Human Resource Management",
  "Certified Factory Labour Welfare Officer",
  "POSH compliance",
  "Compensation & Benefits",
  "Labour Codes & Employment Laws — VVGNLI and NHRD XLRI",
  "IIT Kharagpur — Ethical and Legal Outsourcing",
  "NPTI — HR practices for executive trainees",
  "Naukri Maestro Recruiter",
  "AI for Human Resources",
] as const;

const HONOURS = [
  "Top 15 Global HR Icon 2026 — CHRD",
  "Managing Director’s Appreciation — Talcher Fertilizers Limited, ₹12,250.06 crore financial closure",
  "Republic Day Award, 2017",
  "Republic Day Award, 2023",
  "Kaizen and suggestion awards — Tata Steel",
] as const;

const EMPTY: EnquiryInput = {
  name: "",
  email: "",
  organisation: "",
  subject: "",
  message: "",
  companyWebsite: "",
};

function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-navy focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <HomeSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const nodes = NAV.map((item) => document.getElementById(item.id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate/20 bg-paper">
      <div className="h-1 bg-navy" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#home" className="flex min-h-11 items-center gap-3">
          <span className="grid size-9 place-items-center bg-navy font-serif text-sm text-paper">
            SK
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-wide">Susheel Kumar</span>
            <span className="block text-xs text-slate">hrsk.in</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={
                "inline-flex min-h-11 items-center px-3 text-sm transition-colors duration-200 " +
                (active === item.id ? "text-navy" : "text-slate hover:text-navy")
              }
            >
              <span className={active === item.id ? "border-b border-brass pb-0.5" : ""}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-slate/30 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-slate/20 px-5 py-2 md:hidden" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex min-h-11 items-center text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function HomeSection() {
  return (
    <section id="home" className="scroll-mt-28 border-b border-slate/20">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-14 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <figure className="rise md:col-span-5">
          <div className="border border-slate/25 bg-surface p-2.5">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Susheel Kumar"
              className="aspect-3/4 w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between text-xs tracking-widest text-slate uppercase">
            <span>Jamshedpur</span>
            <span>East India</span>
          </figcaption>
        </figure>

        <div className="md:col-span-7">
          <p className="rise text-xs font-medium tracking-widest text-slate uppercase">
            Senior HR Professional · Global HR Icon
          </p>
          <h1 className="rise rise-2 mt-4 font-serif text-5xl text-navy md:text-7xl">Susheel Kumar</h1>
          <h2 className="rise rise-3 mt-4 max-w-xl font-serif text-2xl text-navy italic">
            Industrial relations professional and employee relations expert
          </h2>
          <p className="mt-6 max-w-xl text-base text-slate">
            Good day. I am an HR business partner with 21 years in industry, more than ten of them in
            human resources across steel, power and fertilizer. I am a registered Independent Director
            with the Indian Institute of Corporate Affairs, registration IDDB-NR-202603-088622, valid to
            10 March 2027.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {CHANNELS.map((channel) => (
              <ChannelButton key={channel.label} {...channel} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-widest text-slate uppercase">01 — About</p>
            <h2 className="mt-3 font-serif text-4xl text-navy">Independent director and consultant, rooted in Jamshedpur.</h2>
          </div>
          <div className="space-y-5 text-base md:col-span-8">
            <p>
              At Talcher Fertilizers Limited — a joint venture of CIL, GAIL, RCF and FCIL — I am Manager,
              Human Resources, on one of India’s large greenfield fertilizer projects. The Managing
              Director recognised the statutory and legal coordination that supported financial closure of
              a ₹12,250.06 crore rupee term loan.
            </p>
            <p>
              Before this, as Personnel Officer at Madhya Pradesh Power Generating Company Limited, I led
              HR for about 1,200 employees and more than 3,000 contract workmen, with 13 direct reports,
              nearly 13 trade unions, more than 30 conciliations and eight domestic enquiries.
            </p>
            <p>
              I began at Tata Steel, Jamshedpur, in electrical maintenance. Eleven years on the shop floor
              still decide how I listen to workmen, contractors and plant heads. My Independent Director
              registration with IICA (IDDB-NR-202603-088622) runs from 11 March 2026 to 10 March 2027. I
              am also on Startup India’s BHASKAR network, ID IN-0626-9484JH, a certified Factory Labour
              Welfare Officer, UGC-NET qualified in Labour Welfare and Human Resource Management, and
              pursuing XLRI’s programme in Building Future CHROs.
            </p>
          </div>
        </div>
        <dl className="mx-auto grid max-w-6xl grid-cols-2 border-t border-slate/20 md:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="border-b border-slate/20 px-5 py-6 odd:border-r md:border-b-0 md:border-l md:px-8 md:odd:border-r-0 md:first:border-l-0">
              <dt className="font-serif text-4xl text-navy">{metric.value}</dt>
              <dd className="mt-1 text-sm text-slate">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-28 border-b border-slate/20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-slate uppercase">02 — Core HR expertise</p>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
            East India HR, practised with the workforce.
          </h2>
          <p className="mt-4 text-base text-slate">
            Talent acquisition, employee relations and HR operations sit at the centre. Around them is
            the industrial-relations and compliance practice a manufacturing employer actually needs.
          </p>
        </div>
        <ol className="mt-12 border-t border-slate/25">
          {PRACTICES.map((practice, index) => (
            <li
              key={practice.title}
              className="grid gap-2 border-b border-slate/25 py-6 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-serif text-sm text-brass md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-navy md:col-span-4">{practice.title}</h3>
              <p className="text-base text-slate md:col-span-7">{practice.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 border-b border-slate/20 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-slate uppercase">
            03 — Professional experience
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
            Towards a future CHRO, through XLRI.
          </h2>
        </div>

        <ol className="mt-14 border-l border-slate/30">
          {ROLES.map((role) => (
            <li key={role.org} className="relative pb-14 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-1.5 size-3 bg-navy" aria-hidden="true" />
              <p className="text-xs font-medium tracking-widest text-slate uppercase">{role.period}</p>
              <h3 className="mt-2 font-serif text-3xl text-navy">{role.title}</h3>
              <p className="mt-1 text-base">
                {role.org}
                <span className="text-slate"> · {role.place}</span>
              </p>
              <p className="mt-1 text-sm text-slate">{role.note}</p>
              <ul className="mt-5 space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="grid grid-cols-[auto_1fr] gap-3 text-base">
                    <span className="mt-2 size-1.5 bg-brass" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 border-t border-slate/20 pt-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-navy">Education</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {FORMATION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-navy">Credentials</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {CREDENTIALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-navy">Recognition</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {HONOURS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="text-xs font-medium tracking-widest text-slate uppercase">04 — Contact</p>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">Write, or reach me directly.</h2>
          <p className="mt-4 text-base text-slate">
            For a leadership role, a board conversation, or a matter of labour and industrial relations.
            I read every note myself.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {CHANNELS.map((channel) => (
              <ChannelButton key={channel.label} {...channel} wide />
            ))}
          </div>
        </div>
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [values, setValues] = useState<EnquiryInput>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const formId = useId();

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function mailtoHref() {
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Organisation: ${values.organisation || "—"}`,
      "",
      values.message,
    ].join("\n");
    return `mailto:susheel.jsr@gmail.com?subject=${encodeURIComponent(values.subject || "Note from hrsk.in")}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validateEnquiry(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      setNotice("");
      return;
    }
    setStatus("sending");
    setNotice("");
    try {
      const result = await sendEnquiry({ data: values });
      if (result.ok) {
        setStatus("sent");
        setValues(EMPTY);
        return;
      }
      setStatus("error");
      setNotice(result.error);
    } catch {
      setStatus("error");
      setNotice("This could not be delivered just now. Use Email or WhatsApp — the note will still reach me.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-slate/25 bg-surface px-6 py-10" role="status">
        <p className="text-xs font-medium tracking-widest text-slate uppercase">Message sent</p>
        <h3 className="mt-3 font-serif text-3xl text-navy">Thank you. I have your note.</h3>
        <p className="mt-3 text-base text-slate">
          It has been sent to susheel.jsr@gmail.com. I will reply at the address you shared.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex min-h-11 items-center border border-navy px-5 text-sm font-medium text-navy transition-colors duration-200 hover:bg-navy hover:text-paper active:scale-[0.96]"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-slate/25 bg-surface px-5 py-6 md:px-8 md:py-8">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Company website</label>
        <input
          id={`${formId}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(event) => update("companyWebsite", event.target.value)}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          value={values.name}
          autoComplete="name"
          error={errors.name}
          onChange={(value) => update("name", value)}
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          type="email"
          value={values.email}
          autoComplete="email"
          error={errors.email}
          onChange={(value) => update("email", value)}
        />
        <Field
          id={`${formId}-org`}
          label="Organisation"
          value={values.organisation}
          autoComplete="organization"
          optional
          error={errors.organisation}
          onChange={(value) => update("organisation", value)}
        />
        <Field
          id={`${formId}-subject`}
          label="Subject"
          value={values.subject}
          error={errors.subject}
          onChange={(value) => update("subject", value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={`${formId}-message`} className="mb-2 block text-xs font-medium tracking-widest text-slate uppercase">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          required
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={fieldClass}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-navy">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center justify-center bg-navy px-6 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-90 active:scale-[0.96] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <a href={mailtoHref()} className="inline-flex min-h-11 items-center text-sm text-slate underline decoration-slate/40 underline-offset-4">
          Open in your email app
        </a>
      </div>
      <p className="mt-4 text-sm text-slate" role="status" aria-live="polite">
        {notice || "Your message is emailed to me. It is not stored on this website."}
      </p>
    </form>
  );
}

const fieldClass =
  "w-full border border-slate/30 bg-paper px-3 py-3 text-base text-navy transition-colors duration-200 placeholder:text-slate/60 focus:border-navy";

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-xs font-medium tracking-widest text-slate uppercase">
        <span>{label}</span>
        {optional ? <span className="tracking-normal normal-case">Optional</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={!optional}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-navy">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validateEnquiry(values: EnquiryInput): Partial<Record<keyof EnquiryInput, string>> {
  const errors: Partial<Record<keyof EnquiryInput, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please share your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.subject.trim().length < 2) errors.subject = "Add a short subject.";
  if (values.message.trim().length < 10) errors.message = "Please add a short message.";
  return errors;
}

function ChannelButton({
  label,
  href,
  external,
  wide = false,
}: {
  label: string;
  href: string;
  external: boolean;
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        "inline-flex min-h-11 items-center gap-2 border border-navy px-4 text-sm font-medium text-navy transition-colors duration-200 hover:bg-navy hover:text-paper active:scale-[0.96] " +
        (wide ? "w-full" : "")
      }
    >
      <span className="inline-flex items-center gap-2">
        <ChannelIcon label={label} />
        {label}
      </span>
    </a>
  );
}

function ChannelIcon({ label }: { label: string }) {
  const className = "size-4";
  if (label === "LinkedIn") return <Linkedin className={className} aria-hidden="true" />;
  if (label === "Email") return <Mail className={className} aria-hidden="true" />;
  if (label === "Facebook") return <Facebook className={className} aria-hidden="true" />;
  return <WhatsAppIcon className={className} />;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.41.5-.14.14-.28.29-.12.56.16.28.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate/20 bg-navy text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-serif text-2xl">Susheel Kumar</p>
          <p className="mt-1 text-sm text-paper/75">
            Manager – Human Resources · Independent Director, IDDB-NR-202603-088622
          </p>
        </div>
        <div className="text-sm text-paper/75">
          <p>English · Hindi · Odia · Bangla · Bhojpuri</p>
          <p className="mt-1">BHASKAR IN-0626-9484JH · hrsk.in</p>
        </div>
      </div>
    </footer>
  );
}
