AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graphic Designer and Social Media Marketer",
    cardImage: "assets/images/experience-page/raema.png",
    place: "Raema Star Solar",
    time: "(May, 2023 - Aug 2024)",
    desp: "<li>Designed the whole new website of Raema Solar.</li> <li>Managed all social media handles.</li> <li>Designed all posters and flyers of the company.</li>",
  },
  {
    title: "Networking Trainee : Virtual Intern",
    cardImage: "assets/images/experience-page/cisco.png",
    place: "CISCO",
    time: "(June, 2024 - Aug 2024)",
    desp: "<li>Analyzed and resolved networking and cybersecurity challenges through practical case studies, strengthening technical problem-solving skills.</li> <li>Collaborated with peers and mentors, fostering teamwork and accelerating personal development in IT and security protocols..</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon 2024",
    subtitle: "API integration & UI/UX",
    image: "assets/images/experience-page/sih.png",
    desp: "Our Team secured 52 Position in 200 teams of our college",
    href: "https://www.sih.gov.in/",
  },
  {
    title: "SNU : E-Cell : Xcelerate 2.0",
    subtitle: "Ideathon",
    image: "assets/images/experience-page/xcelerate.png",
    desp: "The Entrepreneurship Cell SNIoE presents Xcelerate 2.0, a business ideation and pitching competition for students to showcase their ideas and to test their entrepreneurial skills, business acumen and creativity.",
    href: "https://unstop.com/competitions/xcelerate-20-shiv-nadar-university-snu-greater-noida-935645",
  },
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Front-end Developer",
    image: "assets/images/experience-page/sih.png",
    desp: "Smart India Hackathon is a nationwide 36-hour Hackathon organized by the MHRD, Govt. of India. It started in the year 2017 and gaining huge success.",
    href: "https://www.sih.gov.in/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
