import { cookies } from "next/headers";

function AboutPage() {
  const cookieStore = cookies();

  const theme = cookieStore.get("theme");

  console.log(theme);

  console.log("About server component");

  return (
    <div>
      <h1>This is About Page {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default AboutPage;
