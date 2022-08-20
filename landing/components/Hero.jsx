const Hero = () => {
  return (
    <section
      className="flex w-full items-center justify-center px-1 py-16 md:py-32"
      id="hero"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="space-y-8">
            <div className="text-shadow mx-auto text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
              <h1>
                <span className="leading-snug text-primary-light">
                  Reliable performance
                </span>{" "}
                <br />
                for botters big and small.
              </h1>
            </div>
            <p className="mx-auto max-w-xl px-3 text-center text-lg font-medium text-[#8FA2AD] md:text-xl">
              Comet is on a mission to deliver high-quality proxies for when
              speed and consistency matter most.
            </p>
            <div class="flex items-center justify-center">
              <a
                href="#pricing"
                className="trans rounded-md bg-primary-default py-3 px-16 text-lg font-semibold hover:bg-primary-light"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
