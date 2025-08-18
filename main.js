
const { useState } = React;
const motion = (window.framerMotion && window.framerMotion.motion) || {};

const Button = ({children, variant="default", size="md", className="", ...props}) => {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
    outline: "border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
  };
  const sizes = { sm:"h-8 px-3 text-sm rounded-xl", md:"h-10 px-4 rounded-2xl", lg:"h-12 px-5 text-base rounded-2xl"};
  return React.createElement("button", {className: `${base} ${variants[variant]||variants.default} ${sizes[size]||sizes.md} ${className}`, ...props}, children);
};

const Badge = ({children, variant="default", className=""}) => {
  const variants = {
    default:"bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
    secondary:"bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    outline:"border border-neutral-300 dark:border-neutral-700",
  };
  return React.createElement("span", {className:`inline-flex items-center px-2 py-1 rounded-full text-xs ${variants[variant]||variants.default} ${className}`}, children);
};

const Card = ({children, className=""}) => React.createElement("div", {className:`card bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm ${className}`}, children);
const CardHeader = ({children, className=""}) => React.createElement("div", {className:`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`}, children);
const CardTitle = ({children, className=""}) => React.createElement("h3", {className:`font-semibold ${className}`}, children);
const CardContent = ({children, className=""}) => React.createElement("div", {className:`p-4 ${className}`}, children);

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research & Experience" },
  { id: "talks", label: "Talks" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Section = ({children}) =>
  React.createElement(motion.div, {initial:{opacity:0,y:8}, animate:{opacity:1,y:0}, transition:{duration:0.35}, className:"mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8"}, children);

const Header = ({current, setCurrent}) => (
  React.createElement("header", {className:"sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800"},
    React.createElement("div", {className:"mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"},
      React.createElement("div", {className:"flex items-center gap-3"},
        React.createElement("div", {className:"h-10 w-10 round-3xl gradient-avatar rounded-2xl"}),
        React.createElement("div", null,
          React.createElement("h1", {className:"text-lg font-semibold tracking-tight"},"Sourav Surya Majumder"),
          React.createElement("p", {className:"text-xs text-neutral-600 dark:text-neutral-400"},"Data Science & AI • Geometric Data Science • Materials Informatics")
        )
      ),
      React.createElement("nav", {className:"hidden md:flex gap-2"},
        NAV.map(n => React.createElement(Button, {key:n.id, variant: current===n.id ? "default":"ghost", className:"rounded-2xl", onClick:() => setCurrent(n.id)}, n.label))
      ),
      React.createElement("div", {className:"flex items-center gap-2"},
        React.createElement("a",{href:"mailto:souravsurya1998@gmail.com", className:"hidden sm:inline-flex"},
          React.createElement(Button,{variant:"outline", className:"rounded-2xl"}, "Email")
        ),
        React.createElement("a",{href:"./Sourav_Surya_Majumder_CV.docx", download:true},
          React.createElement(Button,{className:"rounded-2xl"}, "CV")
        )
      )
    ),
    React.createElement("div",{className:"md:hidden border-t border-neutral-200 dark:border-neutral-800 px-2 py-2 overflow-x-auto"},
      React.createElement("div",{className:"flex gap-2 w-max"},
        NAV.map(n => React.createElement(Button,{key:n.id, size:"sm", variant: current===n.id?"default":"ghost", className:"rounded-2xl", onClick:() => setCurrent(n.id)}, n.label))
      )
    )
  )
);

const Hero = ({setCurrent}) => (
  React.createElement(Section, null,
    React.createElement("div",{className:"grid md:grid-cols-[1.2fr_.8fr] gap-6 items-center"},
      React.createElement("div", null,
        React.createElement("h2",{className:"text-3xl sm:text-4xl font-bold tracking-tight"},"Hello — I’m Sourav."),
        React.createElement("p",{className:"mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed"},
          "I’m a researcher in ", React.createElement("strong", null, "Geometric Data Science"), " and ", React.createElement("strong", null, "AI"),
          ", working on robust descriptors and symmetry analysis for large-scale crystal datasets. I enjoy building reliable pipelines and visual analytics for materials discovery."
        ),
        React.createElement("div",{className:"mt-4 flex flex-wrap gap-2"},
          React.createElement(Badge,null,"Research Collaborator — University of Liverpool"),
          React.createElement(Badge,{variant:"secondary"},"MSc Data Science & AI — Distinction"),
          React.createElement(Badge,{variant:"outline"},"Kolkata, India")
        ),
        React.createElement("div",{className:"mt-6 flex flex-wrap gap-3"},
          React.createElement(Button,{className:"rounded-2xl", onClick:() => setCurrent("research")},"See my work"),
          React.createElement(Button,{variant:"outline", className:"rounded-2xl", onClick:() => setCurrent("talks")},"Talks"),
          React.createElement(Button,{variant:"ghost", className:"rounded-2xl", onClick:() => setCurrent("contact")},"Contact")
        )
      ),
      React.createElement(Card,{className:"round-3xl rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center gap-2"},"At a glance")
        ),
        React.createElement(CardContent,{className:"space-y-3 text-sm"},
          React.createElement("div",{className:"flex items-start gap-3"}, React.createElement("div",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"}), React.createElement("p",null, React.createElement("strong",null,"MSc in Data Science & AI"), ", University of Liverpool (2023–2024) — ", React.createElement("em",null,"Distinction"), ".")),
          React.createElement("div",{className:"flex items-start gap-3"}, React.createElement("div",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-sky-500"}), React.createElement("p",null, React.createElement("strong",null,"MSc in Applied Mathematics"), ", Sister Nivedita University (2021–2023) — CGPA 9.02/10.")),
          React.createElement("div",{className:"flex items-start gap-3"}, React.createElement("div",{className:"mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500"}), React.createElement("p",null, React.createElement("strong",null,"BSc in Mathematics"), ", University of Calcutta (2018–2021)."))
        )
      )
    )
  )
);

const Education = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Education"),
    React.createElement("div",{className:"grid gap-4"},
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center justify-between"},
            React.createElement("span",null,"University of Liverpool — MSc in Data Science & AI"),
            React.createElement(Badge,{className:"ml-2"},"2023–2024")
          )
        ),
        React.createElement(CardContent,{className:"space-y-2 text-sm"},
          React.createElement("p",null, React.createElement("strong",null,"Classification:")," Distinction"),
          React.createElement("p",null, React.createElement("strong",null,"Coursework:")," Research Methods; Database & Information Systems; Programming Fundamentals; Maths & Stats for DS & AI; Computational Intelligence; Machine Learning & Bioinspired Optimisation; Applied AI; Data Mining & Visualisation; MSc Project.")
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center justify-between"},
            React.createElement("span",null,"Sister Nivedita University — MSc in Applied Mathematics"),
            React.createElement(Badge,{className:"ml-2"},"2021–2023")
          )
        ),
        React.createElement(CardContent,{className:"space-y-2 text-sm"},
          React.createElement("p",null, React.createElement("strong",null),"CGPA: 9.02/10"),
          React.createElement("p",null, React.createElement("strong",null,"Coursework:")," Discrete Mathematics; Graph Theory & Non-linear Dynamics; Numerical Analysis; Integral Transforms & Integral Equations; Python Programming; MIS; Cryptography & Network Security; Optimisation & OR; Machine Learning; Financial Mathematics; Bio-mathematics.")
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center justify-between"},
            React.createElement("span",null,"University of Calcutta — BSc in Mathematics"),
            React.createElement(Badge,{className:"ml-2"},"2018–2021")
          )
        ),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("p",null,"Coursework included Calculus; Geometry & Vector Analysis; ODE/PDE & Multivariate Calculus; C Programming; Scientific Computing with SageMath & R; Probability & Statistics; Linear Programming & Game Theory; Numerical Methods.")
        )
      )
    )
  )
);

const Research = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Research & Experience"),
    React.createElement(Card,{className:"rounded-3xl"},
      React.createElement(CardHeader,null,
        React.createElement(CardTitle,{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"},
          React.createElement("span",null,"Research Collaborator — Data Science Theory & Applications Group, University of Liverpool"),
          React.createElement(Badge,null,"June 2023 – Present")
        )
      ),
      React.createElement(CardContent,{className:"space-y-2 text-sm"},
        React.createElement("p",null, React.createElement("strong",null,"Supervisor:")," Professor Vitaliy Kurlin"),
        React.createElement("ul",{className:"list-disc pl-5 space-y-1"},
          React.createElement("li",null,"Developed and computed geometric descriptors for 50,000+ experimental & predicted crystal structures using Python and custom scientific packages."),
          React.createElement("li",null,"Automated symmetry analysis using distance metrics to assess structural deviations."),
          React.createElement("li",null,"Processed multi-structure simulated CIF datasets (T0, T1, T2, T2E) to extract atomic & molecular features; optimised parsing for large-scale input."),
          React.createElement("li",null,"Processed and analysed 1017 simulated landscapes and 1M+ simulated molecular crystal structures."),
          React.createElement("li",null,"Generated statistics and visual plots correlating asymmetry measures with density, energy, packing efficiency, and distance metrics."),
          React.createElement("li",null,"Contributed to research output for peer‑reviewed publication on geometric properties of synthesiseable crystals.")
        )
      )
    )
  )
);

const Talks = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Conferences & Invited Talks"),
    React.createElement(Card,{className:"rounded-3xl"},
      React.createElement(CardHeader,null,
        React.createElement(CardTitle,{className:"flex items-center gap-2"},"MACSMIN 2025 — Mathematics & Computer Science for Materials Innovation")
      ),
      React.createElement(CardContent,{className:"text-sm space-y-2"},
        React.createElement("p",null, React.createElement("strong",null,"Talk:")," Quantifying Continuous Asymmetry with Isometry Invariants"),
        React.createElement("p",null, React.createElement("strong",null,"When/Where:")," 9–12 September 2025, University of Liverpool, UK (Hybrid)"),
        React.createElement("p",null,"Satellite event of the 35th European Crystallographic Meeting (ECM35), Poznań, Poland. Organised by Professor Vitaliy Kurlin’s group and funded by the LMS through the Applied Geometry & Topology network.")
      )
    )
  )
);

const Activities = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Voluntary & Professional Activities"),
    React.createElement("div",{className:"grid gap-4"},
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center justify-between"},
            React.createElement("span",null,"Course Coordinator — University of Liverpool"),
            React.createElement(Badge,null,"Sep 2023 – Sep 2024")
          )
        ),
        React.createElement(CardContent,{className:"text-sm space-y-2"},
          React.createElement("ul",{className:"list-disc pl-5 space-y-1"},
            React.createElement("li",null,"Represented academic & welfare concerns of 400+ MSc students in SSLC meetings."),
            React.createElement("li",null,"Compiled structured feedback across 8+ modules; presented reports enabling 3 departmental teaching improvements."),
            React.createElement("li",null,"Collaborated with course coordinators and school reps to enhance course delivery & assessment flexibility."),
            React.createElement("li",null,"Advocated for increased teaching time in Programming Fundamentals leading to a 50% boost in hours."),
            React.createElement("li",null,"Strengthened student–staff communication for transparency and accountability.")
          )
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null,
          React.createElement(CardTitle,{className:"flex items-center gap-2"},"MIF++ Seminar Participant — Materials Innovation Factory")
        ),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("p",null,"Attend interdisciplinary seminars and research talks on advanced materials design, automation, and data‑driven discovery; engage with topics in computational materials science, machine learning for chemistry, and high‑throughput experimentation.")
        )
      )
    )
  )
);

const Skills = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Skills & Interests"),
    React.createElement("div",{className:"grid md:grid-cols-2 gap-4"},
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Technical")),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("div",{className:"flex flex-wrap gap-2"},
            ["Python","NumPy","SciPy","pandas","matplotlib","scikit-learn","scikit-optimize","PyG","Reinforcement Learning","CCDC Python API","CIF processing","SQL","LaTeX","Git","MS Office"].map(s => React.createElement(Badge,{key:s, variant:"secondary", className:"text-xs"}, s))
          )
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Computational Expertise")),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("div",{className:"flex flex-wrap gap-2"},
            ["Geometric invariants","Symmetry analysis","Clustering","Data visualisation"].map(s => React.createElement(Badge,{key:s, className:"text-xs"}, s))
          )
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Languages")),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("div",{className:"flex flex-wrap gap-2"},
            ["Bengali (native)","English (fluent)","Hindi (conversational)","French (basic)"].map(s => React.createElement(Badge,{key:s, variant:"outline", className:"text-xs"}, s))
          )
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Interests")),
        React.createElement(CardContent,{className:"text-sm"},
          React.createElement("div",{className:"flex flex-wrap gap-2"},
            ["Geometric data science","Machine learning & AI","Photography","Literature"].map(s => React.createElement(Badge,{key:s, variant:"outline", className:"text-xs"}, s))
          )
        )
      )
    )
  )
);

const About = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"About"),
    React.createElement("div",{className:"grid md:grid-cols-[1.2fr_.8fr] gap-6"},
      React.createElement("div",{className:"space-y-3 text-neutral-700 dark:text-neutral-300"},
        React.createElement("p",null,"I build data‑driven methods for analysing periodic structures and quantifying symmetry, with a focus on descriptors that are robust, scalable, and informative for materials design. My recent work involves processing ", React.createElement("strong",null,"50k+"), " crystal structures and ", React.createElement("strong",null,"1M+"), " simulated molecular crystals, extracting atomic/molecular features and correlating asymmetry with physical properties."),
        React.createElement("p",null,"I value clarity, reproducibility, and practical impact — whether optimising parsers for large CIF datasets or designing analysis pipelines that others can rely on."),
        React.createElement("div",{className:"flex flex-wrap gap-2 pt-1"},
          React.createElement(Badge,{variant:"secondary"},"Geometric Data Science"),
          React.createElement(Badge,{variant:"secondary"},"Materials Informatics"),
          React.createElement(Badge,{variant:"secondary"},"Machine Learning")
        )
      ),
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Quick Facts")),
        React.createElement(CardContent,{className:"text-sm space-y-2"},
          React.createElement("div",{className:"flex items-center gap-2"},"Sonarpur, Kolkata, India"),
          React.createElement("div",{className:"flex items-center gap-2"},"souravsurya1998@gmail.com"),
          React.createElement("div",{className:"flex items-center gap-2"},"+91‑8276069386")
        )
      )
    )
  )
);

const Contact = () => (
  React.createElement(Section,null,
    React.createElement("h2",{className:"text-2xl font-semibold tracking-tight mb-4"},"Contact"),
    React.createElement("div",{className:"grid md:grid-cols-2 gap-6"},
      React.createElement(Card,{className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Get in touch")),
        React.createElement(CardContent,{className:"space-y-3 text-sm"},
          React.createElement("p",null,"If you’d like to discuss research or collaboration, email works best."),
          React.createElement("div",{className:"flex flex-col gap-2"},
            React.createElement("a",{className:"underline", href:"mailto:souravsurya1998@gmail.com"},"souravsurya1998@gmail.com"),
            React.createElement("a",{className:"underline", href:"tel:+918276069386"},"+91‑8276069386"),
            React.createElement("span",null,"Sonarpur, Kolkata, India")
          ),
          React.createElement("div",{className:"flex gap-2 pt-1"},
            React.createElement(Button,{variant:"outline", className:"rounded-2xl"},"GitHub"),
            React.createElement(Button,{variant:"outline", className:"rounded-2xl"},"LinkedIn"),
            React.createElement(Button,{variant:"outline", className:"rounded-2xl"},"Google Scholar")
          )
        )
      ),
      React.createElement(Card,{id:"download-cv", className:"rounded-3xl"},
        React.createElement(CardHeader,null, React.createElement(CardTitle,null,"Download CV")),
        React.createElement(CardContent,{className:"space-y-3 text-sm"},
          React.createElement("p",null,"You can download a copy of my CV here."),
          React.createElement("a",{href:"./Sourav_Surya_Majumder_CV.docx", download:true, className:"inline-flex", title:"Download CV"},
            React.createElement(Button,{className:"rounded-2xl"},"Download .docx")
          ),
          React.createElement("p",{className:"text-xs text-neutral-600 dark:text-neutral-400"},"Keep the filename the same so the link works.")
        )
      )
    )
  )
);

function Portfolio(){
  const [current, setCurrent] = useState("about");
  return (
    React.createElement("div",{className:"min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100"},
      React.createElement(Header,{current, setCurrent}),
      current==="about" && React.createElement(React.Fragment,null, React.createElement(Hero,{setCurrent}), React.createElement(About,null)),
      current==="education" && React.createElement(Education,null),
      current==="research" && React.createElement(Research,null),
      current==="talks" && React.createElement(Talks,null),
      current==="activities" && React.createElement(Activities,null),
      current==="skills" && React.createElement(Skills,null),
      current==="contact" && React.createElement(Contact,null),
      React.createElement("footer",{className:"mt-10 border-t border-neutral-200 dark:border-neutral-800"},
        React.createElement("div",{className:"mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2"},
          React.createElement("p",null, `© ${new Date().getFullYear()} Sourav Surya Majumder. All rights reserved.`),
          React.createElement("div",{className:"flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400"},
            React.createElement("span",null,"Made with React & Tailwind (CDN)"),
            React.createElement("a",{className:"underline underline-offset-4", href:"#contact", onClick:(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});}},"Back to top")
          )
        )
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Portfolio));
