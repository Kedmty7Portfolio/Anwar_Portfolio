import Image from "next/image";

export default function About() {
  return (
    <div className="relative my-5 py-5 w-full rounded-lg overflow-hidden">

      {/* ---------------- Background ---------------- */}
      <Image
        src="/bg.png"
        alt="background"
        fill
        className="object-cover"
      />

      {/* Mask */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* ---------------- Foreground Content ---------------- */}
      <div
        className="
          relative z-10
          flex flex-col md:flex-row-reverse
          justify-end items-center gap-10
          px-6 py-10      
        "
      >
        {/* Profile Image */}
        <div
          className="
            w-[250px] h-[250px] 
            md:w-[300px] md:h-[300px] 
            relative rounded-full overflow-hidden
            flex justify-center items-center
            bg-white border-4 border-black/55 shrink-0
          "
        >
          <Image
            src="/logo2.png"
            alt="my pic"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Summary */}
        <div className="summry text-white">
          <h1 className="font-bold text-[22px] mb-3">
           أنوار البقمي{" "}
            <span className="text-[#feb429]">كاتبة محتوى</span>
          </h1>

          <p
            className="
              w-full lg:w-[500px] xl:w-[600px] 2xl:w-[700px]
              text-lg leading-10 md:text-xl lg:text-[24px]
            "
          >ترى ما لا تقوله الكلمات،  
وتصغي للفكرة قبل أن تُكتب،
وتعيد للتفاصيل الصغيرة نبضها…
لتظهر في نصّ يجمع بين خفّتها وعمق أثرها.
أقرأ ما وراء الكلمات،
ألتقط التفاصيل الدقيقة،
وأحوّلها إلى محتوى يعيش بخفّة… ويؤثر بعمق

ولا أكتب بصفة عابرة،
بل بروح شريك يتأمل الفكرة،
ويُصقل نبرتها،
ويمنحها زاوية أوسع
لتخرج 
واضحة، ناضجة، وقريبة من القلب.

          </p>
        </div>

      </div>
    </div>
  );
}