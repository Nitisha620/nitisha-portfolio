export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <h1 className="text-5xl font-bold">Hi, I'm Nitisha Jain</h1>

      <p className="mt-2 text-gray-500">Full Stack Engineer</p>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Full Stack Engineer specializing in mobile and backend systems. I build
        scalable applications using Flutter, Spring Boot and modern APIs.
      </p>

      <p className="mt-4 text-gray-500">
        Flutter • React Native • Spring Boot • REST APIs • System Design
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/Nitisha620"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Github
        </a>

        <a
          href="https://linkedin.com/in/nitisha-jain-2099"
          className="px-6 py-3 border rounded-lg"
        >
          LinkedIn
        </a>

        {/* <a href="/resume.pdf" className="px-6 py-3 border rounded-lg">
          Download Resume
        </a> */}
      </div>
    </section>
  );
}
