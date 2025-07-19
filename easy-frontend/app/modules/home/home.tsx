import { SubmitButton } from '~/core/ui/components';


export function meta() {
  return [
    { title: "Task App - Dashboard" },
    { name: "description", content: "Your personal task management dashboard" },
  ];
}

export default function Home() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (

    <div className="text-center">
      <blockquote className="text-4xl font-bold text-gray-900 mb-8">
        "Welcome to the application."
      </blockquote>

      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        You have successfully logged in and can now access all the features available to authenticated users.
        Enjoy exploring the application and its capabilities.
      </p>

      <SubmitButton
        onClick={handleRefresh}
        variant="primary"
        size="md"
      >
        Refresh
      </SubmitButton>
    </div>
  );
} 