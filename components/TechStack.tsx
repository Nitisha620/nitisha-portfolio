export default function TechStack() {
  const tech = [
    "Flutter",
    "Dart",
    "Firebase",
    "REST APIs",
    "Spring Boot",
    "Java",
    "Git",
    "Android",
  ];

  const techStack = {
    Mobile: ["Flutter", "Dart", "React Native (Learning)"],

    Backend: ["Spring Boot", "Java", "REST APIs", "JWT Authentication"],

    Architecture: ["Bloc State Management", "Clean Architecture"],

    Tools: ["Git", "Postman", "Android Studio", "VS Code"],

    languages: ["Dart", "Java", "Python", "C", "C++", "SQL", "Unix Shell"],
    framerwork: ["Flutter", "Angular", "Spring boot", "Google Maps SDK"],
    database: ["MySQL", "MongoDB"],
    services: [
      "AWS (Lambda, EC2, S3)",
      "Firebase Cloud Messaging (FCM)",
      "OneSignal",
      "Shorebird",
    ],
    tools: [
      "Git",
      "Bitbucket",
      "PuTTY",
      "Jira",
      "Postman",
      "Google play console",
      "App store",
    ],
  };
  return (
    <section id="tech" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <h3 className="font-semibold">Programming Languages</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {techStack.languages.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-semibold">Frameworks</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {techStack.framerwork.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-semibold">Database</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {techStack.database.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-semibold">Cloud and Services</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {techStack.services.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-semibold">Tools</h3>
        <div className="mt-2 flex flex-wrap gap-4">
          {techStack.tools.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
