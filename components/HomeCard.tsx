import React from 'react'
import Image from 'next/image'
import clsx from 'clsx';

interface HomeCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick: () => void;
    style?: React.CSSProperties; // ✅ Added style prop
}

const HomeCard = ({ className, img, title, description, handleClick, style }: HomeCardProps) => {
  return (
    <div 
        className={clsx(
            'px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
            className // ✅ Now supports dynamic class-based colors
        )}
        style={style} // ✅ Now supports inline styles
        onClick={handleClick}
    >
        {/* Meeting Icon with Glassmorphism */}
        <div className="flex items-center justify-center size-12 rounded-[10px] glassmorphism">
          <Image src={img} alt="meeting" width={27} height={27} />
        </div>

        {/* Meeting Details */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
    </div>
  );
};

export default HomeCard;


