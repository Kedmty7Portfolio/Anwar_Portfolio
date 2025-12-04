import Image from "next/image";
const projects = [
  {img:"",
    title: "كتابة محتوى حساب سامية السناني",
    description: `تحس أنك رجعت للدنيا… لكن مو نفس الناس؟
ترجع للأماكن القديمة… وما يعود لك نفس الشعور؟
وتسأل نفسك: “ليش أحس أني غريب بينهم؟”
هذا الموضوع يهمك.`,
    start_d: "29/10/2025",
    end_d: "اليوم ",
    link: "https://x.com/samiyahalsanai/status/1995319896448659646?s=12",
  },
  {img:"inst.png",
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
            className={`flex-1/2 p-5 rounded-xl h-[480px] bg-[#cdccca40]`}
          >
            <div className={`h-53 w-full rounded-lg relative overflow-hidden`}>
   <Image src={`/${p.img}`} alt={`${p.title}`} fill className={`object-fit`}/>
            </div>
            <h2 className={`text-lg font-bold leading-12 mb-2`}>{p.title}</h2>
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
