// app/page.tsx
import ImageUploadAndComments from '../components/ImageUploadAndComments';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="text-4xl font-bold mb-2">Image Upload App with Comments</h1>
      <h1 className="text-xl font-bold mb-2">By Ahmed Faraz</h1>
      <ImageUploadAndComments />
    </main>
  );
}
