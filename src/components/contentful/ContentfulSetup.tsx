
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
      <h2 className="text-2xl font-serif mb-6">Contentful Setup Instructions</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Step 1: Create a Contentful Account</h3>
          <p className="mb-3">Sign up for a free account at Contentful.com</p>
          <a 
            href="https://www.contentful.com/sign-up/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-villa-accent hover:underline"
          >
            Go to Contentful <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 2: Create a New Space</h3>
          <p>After signing in, create a new space for your website.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 3: Create a Content Model</h3>
          <p className="mb-3">Create a content model called "Gallery Image" with the following fields:</p>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Title</strong> (Short text)</li>
              <li><strong>Description</strong> (Long text, optional)</li>
              <li><strong>Image</strong> (Media, required)</li>
              <li><strong>Category</strong> (Short text, required) - Use one of: interior, exterior, surroundings, amenities</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 4: Get API Keys</h3>
          <p className="mb-3">In Contentful, go to Settings &gt; API keys &gt; Add API key</p>
          <p className="mb-3">Copy the Space ID and Content Delivery API - access token</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 5: Update Your Website Configuration</h3>
          <p className="mb-3">Update the contentful.ts file with your Space ID and API key:</p>
          <div className="bg-gray-800 text-white p-4 rounded-md font-mono text-sm relative">
            <pre>{`import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'YOUR_SPACE_ID',       // Replace with your Space ID
  accessToken: 'YOUR_ACCESS_TOKEN', // Replace with your Content Delivery API token
});`}</pre>
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => handleCopy(`import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'YOUR_SPACE_ID',       // Replace with your Space ID
  accessToken: 'YOUR_ACCESS_TOKEN', // Replace with your Content Delivery API token
});`)}
            >
              {copyClicked ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Step 6: Add Content</h3>
          <p>Start adding gallery images in Contentful. They will automatically appear on your website.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentfulSetup;
