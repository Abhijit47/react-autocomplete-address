import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <h1 className={'font-sans text-4xl font-semibold'}>NUNITO FONT SANS</h1>
      <h2 className={'font-serif text-4xl font-semibold'}>FONT SERIF</h2>
      <h2 className={'font-mono text-4xl font-semibold'}>FONT MONO</h2>
      <Button
        onClick={() => {
          toast.success('Clicked!!!');
        }}>
        Click me
      </Button>
    </div>
  );
}
