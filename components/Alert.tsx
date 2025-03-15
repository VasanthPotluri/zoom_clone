import Link from 'next/link';
import Image from 'next/image';

import { Button } from './ui/button';
import { Card, CardContent } from '@/components/ui/card'; // ✅ Absolute path
interface PermissionCardProps {
  title: string;
  iconUrl?: string;
}

const Alert = ({ title, iconUrl }: PermissionCardProps) => {
  return (
    <section className="flex items-center justify-center h-screen w-full">
      <Card 
        className="w-full max-w-[520px] border-none p-6 py-9 text-white" 
        style={{ backgroundColor: "var(--dark-1)" }} // ✅ Using CSS variable
      >
        <CardContent>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3.5 items-center">
              {iconUrl && (
                <div className="flex items-center justify-center">
                  <Image 
                    src={iconUrl} 
                    width={72} 
                    height={72} 
                    alt="Alert Icon" 
                    aria-label="Alert Icon"
                  />
                </div>
              )}
              <p className="text-center text-xl font-semibold">{title}</p>
            </div>

            <Button 
              asChild 
              className="w-full text-white" 
              style={{ backgroundColor: "var(--blue-1)" }} // ✅ Using CSS variable
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Alert;
