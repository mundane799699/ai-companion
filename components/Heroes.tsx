import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/typing_on_a_laptop.svg"
            alt="typing on a laptop"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/having_a_video_con.svg"
            alt="video meeting"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
