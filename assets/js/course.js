const courses = [
    {
      id: 1,
      title: "Twitter Marketing",
      description: "Twitter Marketing Bangla Tutorial Full Course",
      image: "https://i.ibb.co.com/WfMwY4g/8-C-Website-Blog-What-is-Twitter-Marketing-and-How-Can-It-Benefit-You-1.png",
      videos: [
        { title: "1. কিভাবে টুইটার একাউন্ট খুলতে হয় | How to Create X Account", youtubeId: "ZgXj9o30H-c" },
        { title: "2. Twitter account full details ", youtubeId: "AkhGrPrALmw" },
        { title: "3. Twitter Marketing Bangla Tutorial 2024 (in Bangla)- Lesson 1 ", youtubeId: "n5Be48O-bGw" },
        { title: "4. Twitter Account Create Profesonally ", youtubeId: "qJDJkGYuYy4" },
        { title: "5. Twitter account Profile Setup ", youtubeId: "dX7_7SOA8DI" },
        { title: "6. Twitter Search Company/Person ", youtubeId: "s-atBeBqpP4" },
        { title: "7. Twitter Post ", youtubeId: "F8xZqn39mVk" },
        { title: "8. Twitter Ads ", youtubeId: "KMqHXESJs8w" },
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
  
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get("id"));
  
  const course = courses.find((course) => course.id === courseId);
  
  if (course) {
    document.getElementById("courseTitle").textContent = course.title;
  
    const courseImage = document.getElementById("courseImage");
    courseImage.src = course.image;
  
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `<img id="courseImage" src="${course.image}" alt="Course Image" class="w-full h-full object-cover rounded-lg">`;
  
    const videoList = document.getElementById("videoList");
    course.videos.forEach((video) => {
      videoList.innerHTML += `
        <li>
          <a href="#" class="block p-2 bg-gray-200 rounded hover:bg-gray-300" onclick="changeVideo('${video.youtubeId}')">
            ${video.title}
          </a>
        </li>
      `;
    });
  } else {
    document.querySelector("main").innerHTML = `<p>Course not found.</p>`;
  }
  
  function changeVideo(youtubeId) {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `
      <iframe 
        width="100%" 
        height="400" 
        class="rounded-lg shadow-md" 
        src="https://www.youtube.com/embed/${youtubeId}" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    `;
  }
  