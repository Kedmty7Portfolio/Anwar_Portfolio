import Image from "next/image";

const hashtags = ["يوغا", "بداية أسبوع", "توازن"];

export default function MyWorks() {
  return (
    <div className=" bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">أعمالي</h1>
      <div className="flex justify-center items-center gap-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col gap-5 p-5">
          {/* ----------- Card 1 ----------- */}
          <div className="card_container flex flex-col md:flex-row justify-between gap-5 rounded-xl w-full p-3 lg:w-[850px]">
            <div className="card1_txt w-full md:w-[400px] flex flex-col gap-5">
              <h3>لحظة تنفس 🎥</h3>
              <p>
                ابدأ أسبوعك بنَفَس عميق… مو علشان تغيّر العالم، لكن علشان تقدر
                تعيشه بهدوء أكثر. 🌿
              </p>

              <div className="tags flex flex-wrap items-center gap-3">
                {hashtags.map((t, idx) => (
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
          <div className="card2 flex justify-center gap-5 w-full p-3 lg:w-[850px] rounded-xl flex-col md:flex-row">
            {/* Quote Box */}
            <div className="flex-1/2 p-5 rounded-xl h-[390px] bg-[#cdccca40]">
              <div
                className={`h-53 w-full rounded-lg relative overflow-hidden`}
              >
                <Image
                  src={`/yoga.jpeg`}
                  alt={`Yoga`}
                  fill
                  className={`object-fit`}
                />
              </div>
              <div className={`txt flex flex-col gap-2 my-2`}>

              <p>
                مو كل حركه يوغا تبي مرونة… بعض الحركات تبي “تمرنا وتعيش اللحظة ”
                فقط 💭
              </p>
              <a href="#"># يوغا بمزاج</a>
              </div>
            </div>

            {/* News Box */}
            <div className="flex-1/2 p-5 rounded-xl h-[390px] bg-[#cdccca40]">
              <div
                className={`h-53 w-full rounded-lg relative overflow-hidden`}
              >
                <Image
                  src={`/without_coffe.jpg`}
                  alt={`without_coffe`}
                  fill
                  className={`object-fit`}
                />
              </div>
               <div className={`txt flex flex-col gap-2 my-2`}>

              <h2 className="font-semibold leading-7">عاجل📢</h2>
              <p>
                تم رصد شخص بدأ أسبوعه بنفس عميق بدل كوب قهوة ☕😌 يُتوقع انخفاض
                نسبة التوتر وارتفاع طاقة السلام الداخلي خلال الساعات القادمة.
              </p>
               </div>
            </div>
          </div>
          {/* ------------------------------------ */}
          {/* <div className="flex-1/2 p-5 rounded-xl h-[200px] bg-[#cdccca40]">
            <h2 className="font-semibold leading-7">يوم القهوة العالمي</h2>
            <p>اللي ما يعرفك ما يثمنك… إلا القهوة، تعرفك من أول رشفة.</p>
          </div> */}
          {/* ------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

//
