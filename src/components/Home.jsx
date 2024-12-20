import Hero from "./Hero";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-32 items-center justify-center flex-col">

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Saylani Management System
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
            ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
            fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <a href="/courses">
              <Button className="inline-flex  border-0 py-5 px-8 focus:outline-none rounded text-lg">
                Courses
              </Button>

            </a>
            <a href="">
              <Button variant="outline" className="ml-4 inline-flexborder-0 py-5 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Apply
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Hero />
    </section>

  );
};
export default Home;