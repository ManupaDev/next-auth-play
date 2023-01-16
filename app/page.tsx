import Navigation from "./../components/navigation";
import Cards from "./../components/cards";

export default function Home() {
  
  return (
    <div>
      <Navigation />
      <div className="px-8">
        <h1 className="text-3xl">Home</h1>
        <Cards/>
      </div>
    </div>
  );
}
