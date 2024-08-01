const quotes = [
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테"
    },
    {
        quote: "내일이란 오늘의 다른 이름일 뿐이다.",
        author: "윌리엄 포크너"
    },
    {
        quote: "오늘이란 신어야 할 신발과 같은 것이다.",
        author: "스티브 올렌"
    },
    {
        quote: "행복은 찾는 것이 아니라 만드는 것이다",
        author: "카밀라 아이링 킴볼"
    },
    {
        quote: "사랑이 없는 삶은 꽃도 열매도 없는 나무와 같다.",
        author: "칼릴 지브란"
    },
    {
        quote: "성공은 매일 반복되는 작은 노력의 합이다.",
        author: "로버트 콜리어"
    },
    {
        quote: "아름다움은 자신을 결정하는 순간부터 시작된다.",
        author: "코코 샤넬"
    },
    {
        quote: "사랑할 수 있는 능력이 있다면 먼저 자신을 사랑하라.",
        author: "찰스 부코스키"
    },
    {
        quote: "인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "믿지 않으면 이해하지 못할 것이다.",
        author: "성 아우구스티누스"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
