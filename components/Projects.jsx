import Image from "next/image";
import projects_data from '../data/projects.json'

export default function Projects() {
  return (
    <div
      className={`bg-gray-100 py-10  md:px-5
              `}
    >
      <h1 className="text-3xl font-bold text-center mb-10">مشاريعي </h1>

      <div
        className={`bg-white rounded-xl shadow-lg p-5
                flex flex-wrap flex-col md:flex-row justify-center items-center gap-5
                w-full  my-5
              `}
      >
        {projects_data.map((p, idx) => (
          <div
            key={idx}
            className={`w-[300px] p-5 rounded-xl h-[530px] bg-[#cdccca40]`}
          >
            <div className={`h-68 w-full rounded-lg relative overflow-hidden bg-white`}>
              <Image
                src={`/${p.img}`}
                alt={`${p.title}`}
                fill
                  className={idx !== projects_data.length - 1 ? "object-cover" : ""}
              />
            </div>
            <h2 className={`text-lg font-bold leading-8 mb-2`}>{p.title}</h2>
            <p>{p.description}</p>
            <span className="flex items-center gap-5 my-3">
              <span>{p.start_d}</span>
              الى
              <span>{p.end_d}</span>
            </span>

            <a
              href={`${p.link}`}
              className={`text-blue-400 text-lg hover:text-blue-700`}
            >
              انقر للاطلاع على المحتوى
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
