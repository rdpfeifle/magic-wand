import { servicesData } from "./data";

export const Services = () => {
  return (
    <section className="m-10">
      <h2 className="text-center">Cleaning Services</h2>
      <div className="pt-6 grid gap-2 grid-cols-4 max-2xl:grid-cols-2 max-md:grid-cols-1">
        {servicesData.map((data) => (
          <div key={data.id} className="max-md:mb-6">
            <h3 className="pb-2">{data.title}</h3>
            <div className="h-[200px] w-[300px] max-sm:w-[240px] bg-aquamarine-blue">
              Image
            </div>
            <p>{data.shortDescription}</p>
          </div>
        ))}
      </div>
      <button>More Services</button>
    </section>
  );
};
