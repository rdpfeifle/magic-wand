import { servicesData } from "./data";

export const Services = () => {
  return (
    <section className="m-10">
      <h2 className="text-center">Cleaning Services</h2>
      <div className="pt-6 grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        {servicesData.map((data) => (
          <div key={data.id}>
            <h3 className="pb-2">{data.title}</h3>
            <div className="h-[200px] w-[200px] bg-aquamarine-blue">Image</div>
            <p>{data.shortDescription}</p>
          </div>
        ))}
      </div>
      <button>More Services</button>
    </section>
  );
};
