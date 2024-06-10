import { Top10Airlines } from "./charts/Bar_Top10Airlines";
import { DailyBookingVolumeTotal } from "./charts/Line_BookingsOverTime";
import { AirlineMarketShare } from "./charts/Pie_AirlineMarketshare";
import { MealChoicePopularity } from "./charts/Donut_MealChoices";

const pageTitle = "Static Token Dashboard";
const description = `
This page authenticates API calls uses Static Tokens. 
Static Tokens are recommended when end-users are trusted, or don't have access to the system.
For example, you might use Static Tokens with an internal metrics dashboard where users are trusted and not authenticated.
You might also uses Static Tokens in closed systems, such as public displays.
`;

export default function StaticDashboard() {
  return (
    <main className="mx-auto w-3/4">
      <h2 className="text-xl font-bold">{pageTitle}</h2>
      <p className="my-8 pb-4 border-b-2">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <Top10Airlines />
        <DailyBookingVolumeTotal />
        <AirlineMarketShare />
        <MealChoicePopularity />
      </div>
    </main>
  );
}
