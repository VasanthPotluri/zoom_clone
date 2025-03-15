"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { toast } from "sonner";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      
      {/* Meeting Info */}
      <article className="flex flex-col gap-3">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-base font-normal">{date}</p>
        </div>
      </article>

      {/* ✅ Attendee Avatars BELOW Time */}
      <div className="mt-4 flex items-center gap-2">
        {avatarImages.slice(0, 4).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="attendees"
            width={40}
            height={40}
            className="rounded-full border-2 border-dark-2"
          />
        ))}
        {/* "+5" Counter (Centered & Adjusted) */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-4 text-white text-sm font-medium">
          +5
        </div>
      </div>

      {/* ✅ Action Buttons with Padding Fix */}
      {!isPreviousMeeting && (
        <div className="flex gap-2 mt-6 px-4 py-3 justify-center w-full">
          <Button onClick={handleClick} className="rounded bg-blue-1 px-6">
            {buttonIcon1 && (
              <Image src={buttonIcon1} alt="feature" width={20} height={20} />
            )}
            &nbsp; {buttonText}
          </Button>

          <Button
            onClick={() => {
              navigator.clipboard.writeText(link);
              toast("Link Copied", {
                position: "bottom-right",
                duration: 4000,
                style: {
                  fontSize: "18px",
                  background: "#000", // ✅ Black background
                  color: "#fff", // ✅ White text
                  padding: "12px",
                  borderRadius: "8px",
                },
              });
            }}
            className="bg-dark-4 px-6"
          >
            <Image src="/icons/copy.svg" alt="feature" width={20} height={20} />
            &nbsp; Copy Link
          </Button>
        </div>
      )}

    </section>
  );
};

export default MeetingCard;


