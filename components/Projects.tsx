export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <p className="text-gray-600 text-center mt-4">
          {" "}
          Some things I've built
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Weather Forecast App</h3>
            <p className="text-gray-600 mt-2">
              Real-time weather application built with Flutter using Bloc state
              management and OpenWeather APIs.
            </p>
            <p className="text-sm text-gray-500 mt-3"> Flutter • Bloc • APIs</p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Nitisha620/weather_forecast"
                className="tex-black font-medium"
              >
                Github →
              </a>
            </div>
          </div>
        
        <div className="p-6 border rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Route Tracker</h3>

          <p className="text-gray-600 mt-2">
            Real-time vehicle tracking and route visualization system using
            Google Maps and Riverpod state management.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Flutter • Google Maps • Riverpod
          </p>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Nitisha620/flaperon"
              className="text-black font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
