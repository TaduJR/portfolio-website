import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NotFound({
  title = "Error",
  message = "An unexpected error has occurred.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Alert variant="destructive" className="max-w-md mx-2">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}
