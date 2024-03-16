fetch('blog.json')
    .then(response => response.json())
    .then(data => {
        const blog = data[5];
        const blogContent = document.getElementById('blog-content');
        
        blogContent.innerHTML =`
        <h2  style="color:aliceblue !important;">${blog.title}</h2>
        <p><strong>Author:</strong> ${blog.name}</p>
        <p><strong>Date:</strong> ${blog.date}</p>
        <p style="text-align: justify;">${blog.content1}</p><br>
        <img src="${blog.image}" alt="Blog Image" style="height: 300px; width:50%;">
        <img src="${blog.image1}" alt="Blog Image" style="height: 300px; max-width:70%;">
        <p style="text-align: justify;">${blog.content}</p><br>
    `;
        
    
})
    .catch(error => console.log(error));
