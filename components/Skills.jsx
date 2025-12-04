import React from "react";
import {
  MessageSquare,
  Megaphone,
  BarChart3,
  ClipboardList,
  PieChart,
  Settings,
  CalendarCheck,
  FileSpreadsheet,
  Lightbulb,
  RefreshCcw,
  Users,
  Clock,
  Brain,
  Handshake,
  Sparkles
} from "lucide-react";

const tecSkills = [
{ title: "الاتصال المؤسسي", icon: <MessageSquare size={20} /> },
{ title: "تطوير مؤشرات الأداء وإعداد التقارير", icon: <BarChart3 size={20} /> },
{ title: "تنسيق المشاريع", icon: <ClipboardList size={20} /> },
{ title: "تحليل البيانات وقياس الأداء", icon: <PieChart size={20} /> },
{ title: "إدارة الأنظمة الإدارية", icon: <Settings size={20} /> },
];


// المهارات الشخصية مع الأيقونات
const softSkills = [
{ title: "التواصل الفعّال", icon: <MessageSquare size={20} /> },
{ title: "حل المشكلات", icon: <Lightbulb size={20} /> },
{ title: "التكيّف", icon: <RefreshCcw size={20} /> },
{ title: "القيادة ودعم الفريق", icon: <Users size={20} /> },
{ title: "إدارة الوقت", icon: <Clock size={20} /> },
{ title: "التفكير النقدي", icon: <Brain size={20} /> },
{ title: "العمل الجماعي", icon: <Handshake size={20} /> },
{ title: "الإبداع والابتكار", icon: <Sparkles size={20} /> },
];


export default function Skills() {
  return (
    <div className="my-4 rounded-lg p-(--main-padding) card">
      <h1 className="title">المهارات</h1>

      <div className="flex flex-col items-center gap-5">
        <div className="tec skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات التقنية
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {tecSkills.map((t, idx) => (
              <li
                className="sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
                key={idx}
              >
                {t.icon} {t.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="soft skills">
          <span className="block text-center text-xl font-semibold my-7 mx-auto p-1 w-[250px] bg-gray-200/70">
            المهارات الناعمة
          </span>

          <ul className="flex justify-center items-center gap-3 flex-wrap">
            {softSkills.map((s, idx) => (
              <li
                className="sub-font-size flex items-center gap-2 even:bg-violet-100/40 odd:bg-cyan-100/50 rounded-md p-2"
                key={idx}
              >
                {s.icon} {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
