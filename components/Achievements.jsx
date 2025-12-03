const achievements = [
  "الانضمام الى دورة بطل الجودة.",
  "جائزة التميز بمستشفى الملك خالد التخصصي للعيون (2021، 2022، 2023، 2024، 2025).",
  "تنفيذ نظام جديد لما بعد المواعيد عام 2016 ساهم في تحسين حركة المرضى.",
  "المساهمة في إعداد كتيّب 'دليل المهنة' عام 2015.",
  "لعب دوراً أساسياً في تطوير نظام CRM بالمستشفى (2015).",
];
export default function Achievements() {
  return (
    <div
      className={` my-4 rounded-lg p-[var(--main-padding)] card flex flex-col gap-2.5`}
    >
      <h1 className="title">الإنجازات</h1>
      <ol className={`list-decimal mr-5 text-[16px] md:sub-font-size`}>
        {achievements.map((a, idx) => (
          <li key={idx} className="my-2">{a}</li>
        ))}
      </ol>
    </div>
  );
}
