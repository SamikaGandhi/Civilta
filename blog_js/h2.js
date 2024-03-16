fetch('blog.json')
  .then(response => response.json())
  .then(data => {
    const blog = data[18];
    const blogContainer = document.getElementById('blog-content2');
    const blogHTML = `
      <div class="row">
        <div class="col-sm col-md-12 col-lg-12 ftco-animate">
          <div class="room">
            <a href="${blog.link || '#'}" class="img d-flex justify-content-center align-items-center" style="background-image: url(${blog.image});">
              <div class="icon d-flex justify-content-center align-items-center">
                <span class="icon-search2"></span>
              </div>
            </a>
            <div class="text p-3 text-center">
              <h3 class="mb-3"><a href="${blog.link || '#'}">${blog.title}</a></h3>
              <p><span class="price mr-2" style="font-size: 15px;">${blog.name}</span> <span class="per">blogger</span></p>
              <hr>
              <p class="pt-1"><a href="${blog.link || 'meso.html'}" class="btn-custom">View blog <span class="icon-long-arrow-right"></span></a></p>
            </div>
          </div>
        </div>
      </div>
    `;
    blogContainer.innerHTML = blogHTML;          
  })
  .catch(error => console.log(error));
