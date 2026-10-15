const groups = [
  ["Mobile development", "Flutter", "Dart", "React Native", "Expo", "Expo Router"],
  ["Programming languages", "JavaScript", "TypeScript", "Dart"],
  ["Frontend web", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  ["State management", "GetX", "Redux Toolkit", "React Hooks"],
  ["Backend integration", "REST APIs", "Dio", "Axios", "JSON", "Multipart requests", "Authentication", "Token management"],
  ["Mobile capabilities", "OTP verification", "Local data persistence", "Messaging", "Socket.IO", "WebSockets", "File and image uploads", "Payment integration", "WebView"],
  ["Development tools", "Git", "GitHub", "Android Studio", "Visual Studio Code", "EAS Build"],
];

export default function Stack() {
  return (
    <section aria-labelledby="skills-title" className="mx-auto mt-24 max-w-6xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">Toolkit</p>
      <h2 id="skills-title" className="mt-2 text-3xl font-semibold tracking-tight">Technical skills</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([title, ...skills]) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => <li key={skill} className="rounded-full bg-gray-100 px-2.5 py-1.5 text-sm text-gray-700">{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
