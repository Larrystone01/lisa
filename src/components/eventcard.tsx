type EventCard = {
  name: string;
  date: string;
  time: string;
  description: string;
  img: string;
};

export default function EventCard({
  name,
  date,
  time,
  description,
  img,
}: EventCard) {
  return (
    <div className="flex flex-col gap-6">
      <div className="img-container size-88 relative">
        <img src={img} alt="" className="absolute top-0 right-0" />
      </div>
      <p className="date_time font-semibold text-[14px] leading-4 tracking-[1.2px] uppercase">
        {date}/{time}
      </p>
      <h4 className="text-[30px] font-light font-primary tracking-0 leading-8">
        {name}
      </h4>
      <p className="text-[16px] leading-6 tracking-0">{description}</p>
    </div>
  );
}
