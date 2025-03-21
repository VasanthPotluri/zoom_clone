"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { tokenProvider } from "@/actions/stream.actions"; // ✅ Using the correct import

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw new Error("Stream API key missing");

        const client = new StreamVideoClient({
            apiKey,
            user: { 
                id: user.id,
                name: user.username || user.id,
                image: user.imageUrl,
            },
            tokenProvider,
        });

        setVideoClient(client);

        // ✅ Fix: Cleanup function should not be async
        return () => {
            client.disconnectUser().catch(err => 
                console.error("Error disconnecting user:", err)
            );
        };
    }, [user, isLoaded]);

    if (!videoClient) return <div>Loading Video Client...</div>;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider;

