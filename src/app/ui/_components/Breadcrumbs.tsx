import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumbs = {
  category?: string;
  groupName: string;
  backLink?: string;
  currentPage: string;
};

export function Breadcrumbs({
  category,
  groupName,
  backLink,
  currentPage,
}: Breadcrumbs) {
  return (
    <div className="flex items-center gap-1">
      {category && (
        <>
          <span className="flex w-fit items-center gap-1 text-sm font-medium">
            {category}
          </span>
          <ChevronRight size={14} />
        </>
      )}
      {backLink ? (
        <Link
          href={backLink}
          className="flex w-fit items-center gap-1 text-sm font-medium duration-200 hover:text-primary"
        >
          {groupName}
        </Link>
      ) : (
        <span className="flex w-fit items-center gap-1 text-sm font-medium">
          {groupName}
        </span>
      )}
      <ChevronRight size={14} />
      <span className="text-sm font-medium text-primary">{currentPage}</span>
    </div>
  );
}
