import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from "@/components/ui/button";
import { 
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: React.ReactNode; // ✅ Made `children` optional
    handleClick: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({ 
    isOpen, 
    onClose, 
    title, 
    className, 
    children, 
    handleClick, 
    buttonText, 
    image, 
    buttonIcon 
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
            className="flex w-full max-w-[520px] flex-col gap-6 border-none px-6 py-9 text-white"
            style={{ backgroundColor: "var(--dark-1)" }} // ✅ Using CSS variable
        >
            <div className='flex flex-col gap-6'>
                {image && (
                    <div className='flex justify-center'>
                        <Image src={image} alt="image" width={72} height={72} />
                    </div>
                )}
                
                <h1 className={clsx("text-3xl font-bold leading-[42px]", className)}>
                    {title}
                </h1>

                {children} {/* ✅ Now `children` is optional and safely used */}

                <Button 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    style={{ backgroundColor: "var(--blue-1)" }} // ✅ Using CSS variable for button
                    onClick={handleClick}
                >
                    {buttonIcon && (
                        <Image src={buttonIcon} alt="button icon" width={13} height={13} />
                    )}
                    &nbsp;
                    {buttonText || 'Schedule Meeting'}
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
