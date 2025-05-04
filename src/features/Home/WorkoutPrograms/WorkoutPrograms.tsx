import MainWrapper from "@/components/wrappers/main-wrapper";

// components/WorkoutPrograms.tsx
export default function WorkoutPrograms() {
  const programs = [
    {
      title: "Başlangıç Seviyesi",
      description: "Yeni başlayanlar için temel egzersiz programı.",
    },
    {
      title: "Yağ Yakımı",
      description: "Kardiyo ağırlıklı programlarla fit kalın.",
    },
    {
      title: "Kas Gelişimi",
      description: "Yoğun antrenmanlarla hacim kazanın.",
    },
    {
      title: "Evde Egzersiz",
      description: "Ekipmansız, evde uygulanabilir hareketler.",
    },
  ];

  return (
    <section className="w-full bg-light py-20 px-6 text-center">
      <MainWrapper>
        <h2 className="text-3xl font-bold text-dark mb-4">İdman Programları</h2>
        <p className="text-md text-dark mb-10">
          Hedefinize uygun programı seçin ve kendinizi geliştirmeye başlayın.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-dark mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {program.description}
              </p>
              <button className="mt-auto text-sm px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                Detaylar
              </button>
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
}
