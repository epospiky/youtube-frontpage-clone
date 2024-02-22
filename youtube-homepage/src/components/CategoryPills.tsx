import { Button } from "./Button";

type CategoryPillProps = {
  categories: string[];
};

function CategoryPills({ categories }: CategoryPillProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            variant="dark"
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}

        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">
          Javascript
        </Button>
      </div>
    </div>
  );
}

export default CategoryPills;
