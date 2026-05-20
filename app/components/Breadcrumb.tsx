'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-[family:var(--font-body)] text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span>/</span>
                </>
              ) : (
                <>
                  <span
                    className={isLast ? 'text-[#1c1b1b]' : ''}
                  >
                    {item.label}
                  </span>
                  {!isLast && <span>/</span>}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
