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
        // { title: "8. Twitter Ads ", youtubeId: "KMqHXESJs8w" },
      ],
    },
    {
      id: 2,
      title: "Pinterest Marketing",
      description: "Pinterest Marketing Bangla Tutorial Full Course",
      image: "https://i.ibb.co.com/xsMvjBp/Pinterest-Marketing.png",  
      videos: [
        { title: "1. Pinterest Account Create and Setup", youtubeId: "ZLYHCcDqiH8" },
        { title: "2. পিনটারেস্ট মার্কেটিং | Pinterest Marketing", youtubeId: "0msivr_86d4" },
      ],
    },
    {
        id: 3,
        title: "Tumblr Marketing",
        description: "Tumblr Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/jy3RZPm/6204957b7892d9601c2550a0-tumblr-marketing.jpg",  
        videos: [
            { title: "1. How to Create Tumblr Account", youtubeId: "U7mgbti8Cs0" },
            { title: "2. Tumblr Marketing ", youtubeId: "ZMRKVQUQJvc" },
            { title: "3. Tumblr Marketing A to Z ", youtubeId: "HUe-khEpJ3g" },
        ],
      },
    {
        id: 4,
        title: "Reddit Marketing",
        description: "Tumblr Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/brfmy7B/reddit-marketing.png",  
        videos: [
            { title: "1. How to create account Reddit", youtubeId: "tazkXbsnC_M" },
            { title: "2. Profile Setup and Post", youtubeId: "q8JpzlTR7ec" },
            { title: "3. How to build reddit karma quickly", youtubeId: "2Sb6BHGlccc" },
            { title: "4. Get reddit karma fast", youtubeId: "NgtkFFaWOpo" },
        ],
      },
    {
        id: 5,
        title: "Linkedin Marketing",
        description: "Linkedin Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/VVrH7Jy/image.png",
        videos: [
            { title: "1. How to Create a New Linkedin Account", youtubeId: "juTuewRbU5I" },
            { title: "2. কীভাবে আপনার LinkedIn Profile সাজাবেন?", youtubeId: "bMWJDiOpEO0" },
            { title: "3. সহজেই LinkedIn -এ সুন্দর পোস্ট করুন", youtubeId: "AtM7PkQHngg" },
            { title: "4. Linkedin Account Restrictions এর সহজ সমাধান", youtubeId: "05T7ddU8nj8" },
        ],
      },
    {
        id: 6,
        title: "Xing Marketing",
        description: "Xing Marketing Bangla Tutorial Full Course",
        image: "https://i.ibb.co.com/gdftqx5/image.png", 
        videos: [
            { title: "1. Start Social Marketing Xing.com", youtubeId: "encJshJuJvE" },
            { title: "2. Create an account on XING with your completer", youtubeId: "PncXhH7rhgE" },
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
  
