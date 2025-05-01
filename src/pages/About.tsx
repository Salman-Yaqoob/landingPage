function About() {
  return (
    <section className="relative flex max-h-screen flex-col justify-center pt-20 text-left">
      {/* dark overlay */}

      <div className="relative z-10 max-w-2xl p-6 dark:text-white">
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          Our path to success
        </h1>
        <p className="text-base leading-relaxed sm:text-lg">
          From our initial entry into car insurance, recent expansion into
          homeowners and big plans for the future including renters, RV, boat
          and more, The Company is achieving our vision of a trusted partner for
          consumers, helping them to better manage and understand all their
          insurance needs through every stage of life, even in the face of the
          unexpected.
        </p>
      </div>
    </section>
  );
}

export default About;
