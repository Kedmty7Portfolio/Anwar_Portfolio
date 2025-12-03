
const educationData = [
  {
    degree: "الماجستير المهني في إدارة الموارد البشرية",
    institution: "كلية برمنغهام المهنية",
    year: 2025,
  },
  {
    degree: "دبلوم الموارد البشرية",
    institution: "غرفة الرياض",
    year: 2018,
  },
  {
    degree: "دبلوم الحاسب الآلي",
    institution: "جامعة الإمام محمد بن سعود الإسلامية",
    year: 2014,
  },
  {
    degree: "بكالوريوس في الأدب الإنجليزي",
    institution: "جامعة الإمام محمد بن سعود الإسلامية",
    year: 2013,
  },
];

export default function Education() {
  return (
    <div className="my-4 rounded-lg p-4 card flex flex-col gap-3">
      <h1 className="title">التعليم</h1>

      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col bg-gray-100/90 p-3 rounded-md gap-1"
        >
          <span className="main-font-size font-bold">{edu.degree}</span>
          <span className="sub-font-size">{edu.institution}</span>
          <span className="sub-font-size">سنة التخرج: {edu.year}</span>
        </div>
      ))}
    </div>
  );
}
