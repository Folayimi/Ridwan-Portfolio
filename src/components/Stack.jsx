const groups = [
  ["Frontend", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Query", "Responsive UI"],
  ["Mobile", "Flutter", "Dart", "React Native", "Expo", "Expo Router", "Android builds"],
  ["State and data", "Redux", "Zustand", "GetX", "React hooks", "REST APIs", "Dio", "Axios", "SQL"],
  ["Integration and security", "OTP authentication", "OAuth 2.0", "JWT", "Role-based access", "Socket.IO", "WebRTC", "Secure local storage", "File uploads", "Paystack", "WebView"],
  ["Backend and databases", "Node.js", "Flask", "Python", "PostgreSQL", "Neon", "Drizzle", "SQLAlchemy", "MongoDB", "Redis"],
  ["Tools and quality", "Git and GitHub", "Android Studio", "VS Code", "EAS Build", "CI/CD", "Docker", "Kubernetes", "AWS", "Azure", "Jest", "Cypress"],
];

export default function Stack() {
  return <section aria-labelledby="skills-title" className="mx-auto mt-24 max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">Toolkit</p>
    <h2 id="skills-title" className="mt-2 text-3xl font-semibold tracking-tight">Technical skills</h2>
    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map(([title, ...skills]) => <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5"><h3 className="font-semibold">{title}</h3><ul className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <li key={skill} className="rounded-full bg-gray-100 px-2.5 py-1.5 text-sm text-gray-700">{skill}</li>)}</ul></div>)}
    </div>
  </section>;
}
