import Image from "next/image";
const projects = [
  {
    img: "sama.jpeg",
    title: "كتابة محتوى حساب سما",
    description: `دايم نظرتك فوق… حيث يولد الحلم ويكبر الطموح ✨🕊️ كاتبة محتوى أؤمن أن الكلمة تُلهم وتصنع فرقًا 🌍`,
    start_d: "08/2025",
    end_d: "اليوم ",
    link: "https://x.com/sama_a2030?s=11",
  },
  {
    img: "inst.png",
    title: "عيناي",
    description: `
    مشروع وطني طور محليا؛ لاستخدام تقنيات الذكاء
الاصطناعي في التشخيص المبكر لاعتلال الشبكية
السكري؛ للوقایة من العمی.
    `,
    start_d: "24/2/2025 ",
    end_d: "9/9/2025  ",
    link: "https://x.com/eyen_ai?s=11",
  },
  {
    img: "coffee.jpeg",
    title: "يوم القهوة العالمي",
    description: `
    اللي ما يعرفك ما يثمنك… إلا القهوة، تعرفك من أول رشفة.

    `,
    start_d: "10/2025 ",
    end_d: "اليوم  ",
    link: "https://x.com/sama_a2030/status/1973655880165105874?s=12",
  },
];
export default function Projects() {
  return (
    <div
      className={`bg-gray-100 py-10 
              `}
    >
      <h1 className="text-3xl font-bold text-center mb-10">مشاريعي على إكس</h1>

      <div
        className={`bg-white rounded-xl shadow-lg p-5
                flex flex-wrap flex-col md:flex-row justify-center items-center gap-5
                w-full lg:w-[850px]  my-5
              `}
      >
        {projects.map((p, idx) => (
          <div
            key={idx}
            className={`w-[300px] p-5 rounded-xl h-[530px] bg-[#cdccca40]`}
          >
            <div className={`h-68 w-full rounded-lg relative overflow-hidden`}>
              <Image
                src={`/${p.img}`}
                alt={`${p.title}`}
                fill
                className={`object-cover`}
              />
            </div>
            <h2 className={`text-lg font-bold leading-12 mb-2`}>{p.title}</h2>
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
