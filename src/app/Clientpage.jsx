'use client';
import { useEffect } from 'react';
import { useIPOStore } from '@/stores/useAppStore';
import { useRouter } from 'next/navigation';

export default function Clientpage({ ipos }) {
    const router = useRouter();
    const setIPOs = useIPOStore((s) => s.setIPOs);
    // useEffect(() => {
    //     (async () => {
    //         setIPOs(ipos || {});
    //         router.replace('/home');
    //     })();
    // }, [router, setIPOs]);

    return null;
}
