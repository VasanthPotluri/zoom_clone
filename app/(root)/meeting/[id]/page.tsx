'use client'
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const MeetingPage = () => {  
  const { id } = useParams();
  const { isLoaded } = useUser(); // ✅ Removed 'user' since it's unused
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const [call, isCallLoading] = useGetCallById(id ?? ""); // ✅ Now correctly receives an array

  if (!isLoaded || isCallLoading) return <Loader />;
  if (!call) return <div className="text-white">Error: Call not found</div>; // ✅ Handle missing call

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete={setIsSetupComplete}/> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;


