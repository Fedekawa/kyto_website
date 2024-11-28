import Head from 'next/head';
import { useRouter } from 'next/router';
import DemoLayout from '../layouts/DemoLayout';

export default function DemoPage() {
  const router = useRouter();
  const { demo } = router.query;
  
  // Capitalize the demo name for display
  const demoName = typeof demo === 'string' 
    ? demo.charAt(0).toUpperCase() + demo.slice(1) 
    : '';

  return (
    <>
      <Head>
        <title>{demoName} Demo - Kyto</title>
        <meta name="description" content={`Experience the ${demoName} demo`} />
      </Head>

      <DemoLayout title={demoName}>
        <p className="text-xl text-gray-400">
          Coming Soon
        </p>
      </DemoLayout>
    </>
  );
}