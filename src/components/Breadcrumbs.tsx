import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, path };
    }),
  ];

  // Schema.org markup for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://canadabcexperience.com${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4 px-4">
        {breadcrumbs.map((item, index) => (
          <div key={item.path} className="flex items-center">
            {index === 0 ? (
              <Link to={item.path} className="hover:text-gray-700">
                <Home className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link
                  to={item.path}
                  className={`hover:text-gray-700 ${
                    index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs; 