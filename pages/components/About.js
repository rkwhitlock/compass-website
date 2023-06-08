export default function About() {
  return (
    <div className="flex container py-10">
      <div className="font-sans p-20">
        <div className="flex">
          <div className=" font-ny text-7xl w-full">
            <div className="text-white">Mathematical Modeling for </div>

            <div className="inline text-yellow-300">Social Good</div>
          </div>

          {/* <h1 className="font-bold text-5xl pl-0 text-sky-900">
                         Social Good
                    </h1> */}
        </div>

        <h2 className="text-3xl text-white font-ny">@ UC San Diego</h2>
        <p className="text-xl font-sans pt-5 text-white">
          We're a student run organization partnering with local and
          international organizations to amplify their impact through
          mathematics, computer science, and data science.
        </p>
      </div>
    </div>
  );
}
