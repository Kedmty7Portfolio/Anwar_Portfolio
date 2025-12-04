const certificates = [
  "CIPD Level 3 – قيد الدراسة",
  "دبلوم متكامل في إدارة الأعمال ",
  "دبلوم متكامل في إدارة المشاريع والتطوير المؤسسي ",
  "شهادة  التواجد الصحيح على الإنترنت   ",
  "شهادة  تطوير المحتوى الرقمي العربي   ",
  "شهادة  بكالوريوس الأدب الإنجليزي",
  "دبلوم متكامل في الإدارة الاستراتيجية ",
  "دبلوم متكامل في الإدارة التنفيذية المتقدمة ",
  "دبلوم متكامل في إدارة الموارد البشرية ",
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
