import React from 'react'
import { notFound } from 'next/navigation'
import Heading from '@/components/ui/Heading';

// Define valid categories
const validCategories = [
  "hair-care",
  "facial-skin-care",
  "body-treatments",
  "nail-care",
  "makeup-services",
  "eye-brow-services"
];

export default async function CategoryPage({ params }) {
    const { id } = await params;

    const categoryTitle = id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Check if the category exists
    if (!validCategories.includes(id)) {
      notFound();
    }

    return (
      <div className='container mx-auto px-4 xl:px-0'>
        
        <div>
          <Heading text={`${categoryTitle} Services`}/>
        </div>
        
      </div>
    )
}
