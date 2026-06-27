import { BirthdayExperience } from "@/components/birthday-experience";
import { birthdayContent } from "@/lib/data";

export default function Home() {
  return <BirthdayExperience content={birthdayContent} />;
}
