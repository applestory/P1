// auto-text-effect
const textEl = document.getElementById("text");
const text = "A Comfortable and Affordable Accommodation";

let idx = 1;
let speed = 200;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// animated-navigation
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

// about
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I lived at Gosse for over a year. It was an absolute lifeline for me as an international student, providing (increasingly rare) affordable housing near the city wherein i could not just concentrate on my studies but also form new friendships. A home away from home, that was crucial for my wellbeing. The residence provides both individual private space and clean, communal spaces. The staff (Grace and Mirek) plus the manager (Adam) are absolute gems - ever so prompt, accomodative and helpful. Will remain grateful to them throughout my life.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I have lived in Gosse, two times now in the last 2 years. It had been a great place for me, and I believe it is a great place for students looking for affordable accommodation close to the city.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I lived at Gosse for 4 years attending school at Waite campus. It was indeed home away from home. Its close proximity to Waite and universities/colleges in the CBD makes it one of the preferred residences. The rent is affordable and basic services a generously provided. Adam the manager is likeable and professional. I always refer international students to Gosse. Adam, keep the fire burning as I plan to visit soon!",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I have been living here for few years. residents and staff are all lovely and helpful. the location of this building is great, and it's quite convenient for me to go to uni or work. it's just like my second home. hopefully it will stay there forever, and be continuing provide accommodation for people who need it :)",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Staying here for almost 4 years, everything is nice and convenient. Adam is amazing, he help whenever it is needed.😊 The cleaner is also good and they always keep the place clean and neat. Perfect for students.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Lived there for 2 years! definitely, when I come back to Australia, I want to go there again!! Convenient living place, especially for students, affordable price, friendly and helpful staff and manager, close to city, fabulous and secure suburb!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Gosse International Student Accomodation is the best place to live close to city for students. We have been there for couple of weeks and enjoyed our stay . It has got everything in terms of student needs such as unlimited wifi, study table and many more. Additionally the manager ADAM is a legend. He is really generous and helpful person I have ever seen in my life. I would like to recommend this place to everyone who is struggling to find to a suitable place in Adelaide especially near the city . And thanks to wonderful people who live there for helping us out with so many things!!",
  },
];

let idx2 = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx2];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx2++;

  if (idx2 > testimonials.length - 1) {
    idx2 = 0;
  }
}

setInterval(updateTestimonial, 10000);
