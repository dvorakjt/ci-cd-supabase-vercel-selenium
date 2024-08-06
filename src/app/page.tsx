import { fetchGreetingByLanguage } from "@/utils/supabase/fetch-greeting-by-language";

export default async function Home() {
  const greeting = await fetchGreetingByLanguage("eng");

  return (
    <h1>
      {greeting ? greeting.text : "No greeting for the provided language found"}
    </h1>
  );
}
