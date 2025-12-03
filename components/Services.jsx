import React from "react";

const content = [
  "يُبرز هويتك المهنية بوضوح",
  "يجذب انتباه جمهورك",
  "يتحرك نحو هدفك بذكاء",
  "يحوّل ظهورك إلى تأثير",
];

const services = [
	"كتابة محتوى LinkedIn يعزّز حضورك ويُبرز هوية صاحب الحساب.",
	"بناء وصياغة الهويات اللغوية (Tone of Voice) للعلامات والجهات.",
	"كتابة محتوى استراتيجي للمنظمات والمبادرات.",
	"تطوير نصوص الحملات الإعلامية والتوعوية.",
	"تحرير وصياغة الرسائل الرسمية بمهنية ووضوح.",
	"كتابة مقالات، قصص قصيرة، ونبذات تعريفية تحمل لغة ناضجة.",
	"إنتاج محتوى متخصص لقطاعات الموارد البشرية، التطوير المؤسسي، والصحة النفسية.",
	"إعداد محتوى حملات تثقيفية وتسويقية مبنية على فهم الجمهور والأثر.",
]

export default function Services() {
  return (
    <div className={`px-4`}>
      <h2 className={`text-2xl md:text-3xl font-bold leading-12 mb-2 `}>ما الذي أقدّمه؟ </h2>
      <p className="">
        أنا لا أقدّم محتوى لنشره… أنا أقدّم رسالة لها قيمة، وصوتًا يُسمع، وأثرًا
        يبقى. أبدأ من الفكرة، أعيد هندستها، وأحوّلها إلى محتوى يعرف كيف يصل،
        وكيف يُقنع، وكيف يصبح جزءًا من هوية صاحبها
      </p>
      <span className={`text-[16px] font-medium leading-12 mb-2 `}>أقدّم محتوى:</span>
     {
		content.map((c,idx)=>(
			 <ul key={idx} className="list-disc mr-5 my-2 ">
        <li className="text-lg md:text-xl">{c}</li>
      </ul>
		))
	 }
    <h1 className="text-3xl font-bold text-center mb-5">الخدمات </h1>
      {
		services.map((s,idx)=>(
			 <ul key={idx} className="list-disc mr-5 my-2 ">
        <li className="text-[16px] md:text-xl">{s}</li>
      </ul>
		))
	 }
    </div>
  );
}
