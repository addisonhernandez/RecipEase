import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="top-bar flex h-20 px-20 border-b-2 backdrop-blur-2xl sticky top-0">
      <div className="flex flex-auto" />
      <div className="flex flex-auto items-center justify-center">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex flex-auto items-center justify-center">
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
      </div>
      <div className="flex flex-auto items-center justify-center">
        <Link href="/pantry">
          <a>Pantry</a>
        </Link>
      </div>
      <div className="flex flex-auto items-center justify-center">
        <Link href="/planner">
          <a>Meal Plan</a>
        </Link>
      </div>
      <div className="flex flex-auto" />
    </div>
  );
}
