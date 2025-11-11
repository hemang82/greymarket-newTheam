'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useIPOStore } from '@/stores/useAppStore';
import { getIPOs } from '@/lib/server/ServerApiCall';

export default function Clientpage({ ipos }) {
    const router = useRouter();
    const setIPOs = useIPOStore((s) => s.setIPOs);

    useEffect(() => {
        (async () => {
            setIPOs(ipos || {});
            router.replace('/home');
        })();
    }, [router, setIPOs]);

    return null;
}
