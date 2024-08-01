const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : JS에서 HTML 요소를 생성한다.
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// appendChild : HTML body에 요소를 추가한다. (맨 아래에) (*perpend() : 맨 위에)
document.body.appendChild(bgImage);
