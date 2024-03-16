document.addEventListener('DOMContentLoaded', function () {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => {
        displayBlogPosts(data);
      })
      .catch(error => console.error('Error fetching blog data:', error));
  });
  
  function displayBlogPosts(data) {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    for (let i = 0; i < data.length; i++) {
      const postElement = createBlogPostElement(data[i]);
      blogPostsContainer.appendChild(postElement);
    }
  }
  
  
  
  function createBlogPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'blog1';
  
    const innerDiv = document.createElement('div');
    innerDiv.className = 'p-4 p-md-5 mb-4 rounded text-body-emphasis bg-gray row';
  
    const imageColumn = document.createElement('div');
    imageColumn.className = 'col-md-4 col-lg-3 d-flex justify-content-end';
  
    const imageElement = document.createElement('img');
    imageElement.className = 'card-img-right image';
    imageElement.src = post.image;
    imageElement.style.width = '350px'; 
    imageElement.style.height = '250px';
  
    imageColumn.appendChild(imageElement);
  
    const textColumn = document.createElement('div');
    textColumn.className = 'col-md-8';
  
    const titleElement = document.createElement('h1');
    titleElement.className = 'display-4 fst-italic';
    titleElement.textContent = post.title;
  
    const previewElement = document.createElement('p');
    previewElement.className = 'lead my-3';
    previewElement.textContent = post.content1;
  
    const contentElement = document.createElement('p');
    contentElement.className = 'lead my-3';
    contentElement.textContent = post.content;
    contentElement.style.display = 'none';
  
    const readMoreBtn = document.createElement('button');
    readMoreBtn.className = 'btn btn-gray';
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.addEventListener('click', function () { 
        const allPosts = document.querySelectorAll('.blog1');
    allPosts.forEach(post => {
        if (post !== postDiv) {
            post.style.display = 'none';
        }
    });
      contentElement.style.display = 'block';
      readMoreBtn.style.display = 'none';
  
      const backButton = document.createElement('button');
      backButton.className = 'btn btn-primary mt-3';
      backButton.textContent = 'Back';
      backButton.addEventListener('click', function () {
          // Redirect to blogs.html
          window.location.href = 'blogs.html';
      });
      textColumn.appendChild(backButton);
    });
  
    textColumn.appendChild(titleElement);
    textColumn.appendChild(previewElement);
    textColumn.appendChild(contentElement);
    textColumn.appendChild(readMoreBtn);
  
    innerDiv.appendChild(imageColumn);
    innerDiv.appendChild(textColumn);
  
    postDiv.appendChild(innerDiv);
  
    return postDiv;
  }