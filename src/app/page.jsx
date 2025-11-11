// app/page.jsx (SERVER COMPONENT)
import { redirect } from 'next/navigation'; // if you still want to redirect later
import { getIPOs } from '@/lib/server/ServerApiCall';
import Clientpage from './Clientpage';
import { unstable_noStore as noStore } from 'next/cache';

// Make the page dynamic / no cache (optional but helpful while debugging)
export const revalidate = 0; // or use noStore() inside

export default async function Page() {
    const ipos = await getIPOs();
    return <Clientpage ipos={ipos} />;
}
