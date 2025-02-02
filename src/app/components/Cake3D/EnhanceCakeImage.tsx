import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from "../../context/SweetContext";

const EnhanceCakeImage = () => {
  const context = useContext(ShopContext);

  // Handle case where context is not found
  if (!context) {
    console.error("CakeReviewPopup must be used within a ShopContextProvider");
    return null;
  }

  // Extract cakeImages from context
  const { cakeImages } = context;

  const [loading, setLoading] = useState<boolean>(false);
  const [enhancedImageUrl, setEnhancedImageUrl] = useState<string | null>(null);

  // Cloudinary settings
  const cloudName = 'dfppve5ct'; // Replace with your Cloudinary cloud name
  const apiKey = '466269758817822'; // Replace with your Cloudinary API key

  // Function to enhance the image
  const enhanceImage = async (imageUrl: string) => {
    if (!imageUrl) return;

    setLoading(true);
    try {
      // Upload the image to Cloudinary
      const formData = new FormData();
      formData.append('file', imageUrl); // Use the URL or base64 string here
      formData.append('upload_preset', '9a4eefee-f335-4ffc-9149-92593ad5d9cd'); // Use your upload preset

      const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      // Apply grayscale transformation
      const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/e_grayscale/${uploadData.public_id}.jpg`;
      
      setEnhancedImageUrl(cloudinaryUrl); // Set the enhanced image URL
    } catch (error) {
      console.error('Error enhancing image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically enhance the first image (if any)
    if (cakeImages && cakeImages.length > 0) {
      // Assuming cakeImages[0].image is the URL or base64 string of the image
      enhanceImage(cakeImages[0].image); // Update this if the structure is different
    }
  }, [cakeImages]);

  return (
    <div>
      <h2>Enhance Cake Image</h2>

      {/* Display the cake images */}
      {cakeImages && cakeImages.length > 0 && !loading && (
        <div>
          <h3>Original Image:</h3>
          <img
            src={cakeImages[0].image} // Display the image from cakeImages[0]
            alt="Original Cake"
            width="300"
          />
          <button onClick={() => enhanceImage(cakeImages[0].image)} disabled={loading}>
            {loading ? 'Enhancing...' : 'Enhance Image'}
          </button>
        </div>
      )}

      {/* Display the enhanced image */}
      {enhancedImageUrl && (
        <div>
          <h3>Enhanced Image:</h3>
          <img src={enhancedImageUrl} alt="Enhanced Cake" width="300" />
        </div>
      )}
    </div>
  );
};

export default EnhanceCakeImage;
