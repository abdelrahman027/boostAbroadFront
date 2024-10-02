const EventCard = ({ image, day, time, country, title }) => {
    return (
      <div className="flex flex-col gap-4 rounded-2xl overflow-hidden">
        <img className="rounded-xl aspect-square object-cover" src={image} alt={title} />
        <div className="flex items-center gap-4">
          <span className="rounded-full py-1 px-4 text-white bg-green-500">{day}</span>
          <span className="rounded-full py-1 px-4 text-white bg-blue-500">{time}</span>
          <span className="rounded-full py-1 px-4 text-white bg-red-800">{country}</span>
        </div>
        <h4 className="text-xl font-bold text-black">{title}</h4>
      </div>
    )
  }
  
  export default EventCard;
  