const Card = ({ data }) => {
  return (
    <a href={data.url} target="_blank">
      <div className="w-20 h-20 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data.download_url}
          alt=""
        />
      </div>
      <p className="text-sm">{data.author}</p>
    </a>
  );
};

export default Card;
