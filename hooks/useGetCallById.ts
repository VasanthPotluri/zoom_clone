import { useState, useEffect } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]): [Call | null, boolean] => {
    const [call, setCall] = useState<Call | null>(null);
    const [isCallLoading, setIsCallLoading] = useState(true);
    const client = useStreamVideoClient();

    useEffect(() => {
        if (!client || !id) return;

        const loadCall = async () => {
            setIsCallLoading(true);
            try {
                const { calls } = await client.queryCalls({
                    filter_conditions: { id }
                });

                if (calls && calls.length > 0) {
                    setCall(calls[0]);
                } else {
                    console.error("No calls found for ID:", id);
                }
            } catch (error) {
                console.error("Error fetching call:", error);
            } finally {
                setIsCallLoading(false);
            }
        };

        loadCall();
    }, [client, id]);

    return [call, isCallLoading]; // ✅ Return as an array to match the destructuring in `page.tsx`
};
