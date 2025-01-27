const courses = [
    {
      id: 1,
      title: "Twitter Marketing",
      description: "Twitter Marketing Bangla Tutorial | Full Course",
      image: "https://i.ibb.co.com/WfMwY4g/8-C-Website-Blog-What-is-Twitter-Marketing-and-How-Can-It-Benefit-You-1.png",  
    },
    {
      id: 2,
      title: "Pinterest Marketing",
      description: "Pinterest Marketing Bangla Tutorial Full Course",
      image: "https://i.ibb.co.com/xsMvjBp/Pinterest-Marketing.png",  
    },
    {
      id: 3,
      title: "Tumblr Marketing",
        description: "Tumblr Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/jy3RZPm/6204957b7892d9601c2550a0-tumblr-marketing.jpg",  
    },
    {
        id: 4,
        title: "Reddit Marketing",
        description: "Tumblr Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/brfmy7B/reddit-marketing.png",  
    },
    {
        id: 5,
        title: "Linkedin Marketing",
        description: "Linkedin Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/VVrH7Jy/image.png",  
    },
    {
        id: 6,
        title: "Xing Marketing",
        description: "Xing Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/gdftqx5/image.png",  
    },
  ];
  
  const courseList = document.getElementById("courseList");
  
  courses.forEach((course) => {
    courseList.innerHTML += `
      <a href="course.html?id=${course.id}" class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
        <div class="aspect-ratio-16-9">
          <img src="${course.image}" alt="${course.title}" class="object-cover w-full h-full rounded-lg">
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">${course.title}</h3>
          <p class="text-sm text-gray-600">${course.description}</p>
        </div>
      </a>
    `;
  });
  
