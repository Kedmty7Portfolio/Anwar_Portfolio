const certificates = [
  "CIPD Level 3 – قيد الدراسة",
  "دبلوم متكامل في إدارة الأعمال، 2025",
  "دبلوم متكامل في إدارة المشاريع والتطوير المؤسسي، 2025",
  "شهادة إتمام مستوى - التواجد الصحيح على الإنترنت ، 2025 ",
  "شهادة إتمام مستوى - تطوير المحتوى الرقمي العربي ، 2025 ",
  "دبلوم متكامل في الإدارة الاستراتيجية، 2024",
  "دبلوم متكامل في الإدارة التنفيذية المتقدمة، 2024",
  "دبلوم متكامل في إدارة الموارد البشرية، 2024",
];


export default function Certificates() {
  return (
    <div className={` my-4 rounded-lg p-(--main-padding) card`}>
        <h1 className='title'>الشهادات</h1>
      <ul className="list-disc mr-5 text-[16px] md:sub-font-size">
      {certificates.map((c,idx)=><li key={idx}  className="my-2">{c}</li>)}
      </ul>
    </div>
  )
}
