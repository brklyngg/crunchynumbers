import { Suspense } from 'react';
import StudioClient from './StudioClient';
import { Loader2 } from 'lucide-react';

type StudioPageProps = {
  searchParams: Promise<{ session?: string }>;
};

export default async function StudioPage({ searchParams }: StudioPageProps) {
  const params = await searchParams;
  const sessionId = params.session ?? null;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
        </div>
      }
    >
      <StudioClient sessionId={sessionId} />
    </Suspense>
  );
}
