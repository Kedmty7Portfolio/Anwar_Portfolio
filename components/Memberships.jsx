const memberships = [
"	عضو – نادي رأس المال البشري."
];

export default function Memberships() {
  return (
    <div className={` my-4 rounded-lg p-[var(--main-padding)] card`}>
        <h1 className='title'>العضويات</h1>
      <ul className="list-disc mr-5 text-[16px] md:sub-font-size">
      {memberships.map((c,idx)=><li key={idx}>{c}</li>)}
      </ul>
    </div>
  )
}
