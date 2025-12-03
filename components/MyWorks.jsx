import Image from "next/image";

const examples = [
  {
    title: "لحظة تنفس 🎥",
    description: `ابدأ أسبوعك بنَفَس عميق…
مو علشان تغيّر العالم،
لكن علشان تقدر تعيشه بهدوء أكثر. 🌿
`,
    hashtags: ["يوغا", "بداية أسبوع", "توازن"],
    quote:
      "مو كل حركه يوغا تبي مرونة… بعض الحركات تبي “تمرنا وتعيش اللحظة ” فقط 💭",
    quote_hash: "يوغا بمزاج",

    news_title: "عاجل📢",
    txt: `تم رصد شخص بدأ أسبوعه بنفس عميق بدل كوب قهوة ☕😌
يُتوقع انخفاض نسبة التوتر وارتفاع طاقة السلام الداخلي خلال الساعات القادمة.
`,
  },
];

export default function MyWorks() {
  return (
    <div className=" bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">أعمالي</h1>
      <div className="flex justify-center items-center gap-6">
        {examples.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col gap-5 p-5"
          >
            {/* ----------- Card 1 ----------- */}
            <div
              className="card_container flex flex-col md:flex-row justify-between gap-5 rounded-xl w-full p-3 lg:w-[850px]"
            >
              <div className="card1_txt w-full md:w-[400px] flex flex-col gap-5">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags flex flex-wrap items-center gap-3">
                  {project.hashtags.map((t, idx) => (
                    <a key={idx} className="px-3 py-1 bg-gray-200 rounded-xl">
                      #{t}
                    </a>
                  ))}
                </div>
              </div>

              {/* فيديو */}
              <div className="card1 flex">
                <div className="relative w-full h-48 md:w-[350px] rounded-xl overflow-hidden">
                  <video className="w-full h-full" controls preload="none">
                    <source src="/vid.mp4" type="video/mp4" />
                    <track
                      src="/vid.mp4"
                      kind="subtitles"
                      srcLang="ar"
                      label="Arabic"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* ----------- Card 2 ----------- */}
            <div
              className="card2 flex justify-center gap-5 w-full p-3 lg:w-[850px] rounded-xl flex-col md:flex-row"
            >
              {/* Quote Box */}
              <div className="flex-1/2 p-5 rounded-xl h-[200px] bg-[#cdccca40]">
                <p>{project.quote}</p>
                <a href="#">#{project.quote_hash}</a>
              </div>

              {/* News Box */}
              <div className="flex-1/2 p-5 rounded-xl h-[200px] bg-[#cdccca40]">
                <h2>{project.news_title}</h2>
                <p>{project.txt}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

// 
