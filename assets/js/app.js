const courses = [
    {
      id: 1,
      title: "Twitter Marketing",
      description: "Twitter Marketing Bangla Tutorial | Full Course",
      image: "https://i.ibb.co.com/WfMwY4g/8-C-Website-Blog-What-is-Twitter-Marketing-and-How-Can-It-Benefit-You-1.png",  
      videos: [
        { title: "Video 1 - Introduction", youtubeId: "LioxGJIMDZY" },
        { title: "Video 2 - Basics", youtubeId: "dRinkeW2F88" },
      ],
    },
    {
      id: 2,
      title: "Freelance Mastery",
      description: "Learn how to master freelancing.",
      image: "https://i.ibb.co/NyVwMJY/image2.png",  
      videos: [
        { title: "Video 1 - Getting Started", youtubeId: "E4x5f0JxiOg" },
        { title: "Video 2 - Building Your Portfolio", youtubeId: "X9S21wzXNkI" },
      ],
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
  