document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');
  const box = document.getElementById('box');
  const imagesContainer = document.querySelector('.images');

  let imageCount = 1; 

  
  toggleButton.addEventListener('click', () => {
    const isHidden = content.classList.contains('hidden');
    content.classList.toggle('hidden', !isHidden);

    if (isHidden) {
      box.style.maxHeight = '500px';
      toggleButton.textContent = 'Close';
    } else {
      box.style.maxHeight = '100px';
      toggleButton.textContent = 'Open';
    }
  });

  imagesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') { 
      const newImageCount = imageCount * 12; 
      const imagesToAdd = newImageCount - imageCount;
      imageCount = newImageCount; 

      for (let i = 0; i < imagesToAdd; i++) {
        const newImage = event.target.cloneNode(true); 
        imagesContainer.appendChild(newImage); 
      }
    }
  });
});
