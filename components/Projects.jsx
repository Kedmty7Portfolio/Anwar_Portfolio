const projects = [
  {
    title: "يوم القهوة العالمي",
    description: "اللي ما يعرفك ما يثمنك… إلا القهوة، تعرفك من أول رشفة. ",
    start_d: "29 اكتوبر ",
    end_d: "اليوم ",
    link: "https://x.com/samiyahalsanai/status/1995319896448659646",
  },
  {
    title: "محتوى خطة تسويقية",
    description: "------",
     start_d: "24/4/2025 ",
    end_d: "9/9/2025  ",
    link: "https://x.com/eyen_ai?s=11",
  },
];
export default function Projects() {
  return (
    <div
      className={`bg-gray-100 py-10 px-5
              `}
    >
      <h1 className="text-3xl font-bold text-center mb-10">مشاريعي على إكس</h1>

      <div
        className={`bg-white rounded-xl shadow-lg p-5
                flex flex-col md:flex-row justify-center gap-5
                w-full lg:w-[850px] mx-auto my-5
              `}
      >
        {projects.map((p, idx) => (
          <div
            key={idx}
            className={`flex-1/2 p-5 rounded-xl h-[250px] bg-[#cdccca40]`}
          >
            <h2 className={`text-xl font-bold leading-12 mb-2`}>{p.title}</h2>
            <p>{p.description}</p>
            <span className="flex items-center gap-5 my-3">
              <span>{p.start_d}</span>
              الى
              <span>{p.end_d}</span>
            </span>

            <a href={`${p.link}`} className={`text-blue-400 text-lg hover:text-blue-700`}>انقر للاطلاع على المحتوى</a>
          </div>
        ))}
      </div>
    </div>
  );
}
