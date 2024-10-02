const BlogCard = ({ image, day, country, title, description }) => {
    return (
      <div className="flex flex-col gap-4 rounded-2xl overflow-hidden bg-white p-3">
        <img
          className="rounded-xl aspect-square object-cover"
          src={image}
          alt={title}
        />
        <div className="flex items-center gap-4">
          <span className="rounded-full py-1 px-4 text-white bg-green-500">
            {day}
          </span>
          <span className="rounded-full py-1 px-4 text-white bg-red-800">
            {country}
          </span>
        </div>
        <h4 className="text-xl font-bold text-black">{title}</h4>
        <p className="text-base font-normal text-[#BFBFBF]">{description}</p>
      </div>
    );
  };
  
  export default BlogCard;
  