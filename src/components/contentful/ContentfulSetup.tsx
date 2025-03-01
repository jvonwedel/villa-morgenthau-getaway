
import { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';

const ContentfulSetup = () => {
  const [copyClicked, setCopyClicked] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyClicked(true);
    setTimeout(() => setCopyClicked(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-serif mb-6">Sanity Setup Instructions</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Step 1: Create a Sanity Account</h3>
          <p className="mb-3">Sign up for a free account at Sanity.io</p>
          <a 
            href="https://www.sanity.io/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-villa-accent hover:underline"
          >
            Go to Sanity <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 2: Create a New Project</h3>
          <p>After signing in, create a new Sanity project from the dashboard.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 3: Create a Schema for Gallery Images</h3>
          <p className="mb-3">Create a schema for "Gallery Image" with the following fields:</p>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Title</strong> (String, required)</li>
              <li><strong>Description</strong> (Text, optional)</li>
              <li><strong>Image</strong> (Image, required)</li>
              <li><strong>Tags</strong> (Array of strings, for categories)</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 4: Set Up Tags for Your Images</h3>
          <p className="mb-3">When creating entries, add tags to categorize your images. Use these exact tag names to match the categories:</p>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Interior</strong> - For interior spaces of the villa</li>
              <li><strong>Exterior</strong> - For exterior views of the villa</li>
              <li><strong>Surroundings</strong> - For the surrounding environment</li>
              <li><strong>Amenities</strong> - For villa amenities and facilities</li>
            </ul>
          </div>
          <p className="mt-3">You can add multiple tags to each image if needed.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 5: Get API Credentials</h3>
          <p className="mb-3">In Sanity, go to API settings and create a new token with read permissions.</p>
          <p className="mb-3">Copy the Project ID and API token.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 6: Update Your Website Configuration</h3>
          <p className="mb-3">Update the sanity.ts file with your Project ID and API token:</p>
          <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm relative">
            <pre>{`import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID',  // Replace with your Project ID
  dataset: 'production',         // The dataset name (usually "production")
  apiVersion: '2023-05-03',      // Use today's date
  useCdn: true,                  // Use the Sanity CDN for faster responses
});`}</pre>
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => handleCopy(`import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID',  // Replace with your Project ID
  dataset: 'production',         // The dataset name (usually "production")
  apiVersion: '2023-05-03',      // Use today's date
  useCdn: true,                  // Use the Sanity CDN for faster responses
});`)}
            >
              {copyClicked ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 7: Add Content</h3>
          <p>Start adding gallery images in Sanity with appropriate tags. They will automatically appear on your website.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentfulSetup;
