import { notFound } from 'next/navigation';
import { mockProjects } from '@/data/mockProjects';
import { generateSEOMetadata } from '@/lib/seo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = mockProjects.find(p => p.id === id);
  
  if (!project) {
    return generateSEOMetadata({
      title: 'Project Not Found',
      noIndex: true
    });
  }

  return generateSEOMetadata({
    title: `${project.title} - Web Development Case Study`,
    description: project.description,
    keywords: [...(project.tags || []), 'web development project', 'case study'],
    canonical: `/projects/${id}`,
    ogImage: project.imageUrl
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = mockProjects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="mb-8">
              <span className="text-blue-600 font-medium">{project.category}</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="mb-8">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {project.additionalImages && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.additionalImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
            
            {project.tags && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}