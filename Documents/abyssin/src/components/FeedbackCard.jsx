

const FeedbackCard = ({ content, name, title, img }) => {
 

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gray-600 shadow-lg hover:bg-black hover:shadow-sm">
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">
            {title}
          </p>
        </div>
      </div>
      <img src={img} alt={name} className="w-[400px] h-[200px] mt-5" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>

      
    </div>
  );
};

export default FeedbackCard;
