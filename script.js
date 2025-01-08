const generateBtn = document.getElementById('generate-btn');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

const quotes = [
    { "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt" },
    { "quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein" },
    { "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "author": "Ralph Waldo Emerson" },
    { "quote": "Life is 10% what happens to us and 90% how we react to it.", "author": "Charles R. Swindoll" },
    { "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln" },
    { "quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky" },
    { "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
    { "quote": "Everything you can imagine is real.", "author": "Pablo Picasso" },
    { "quote": "It always seems impossible until it's done.", "author": "Nelson Mandela" },
    { "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson" },
    { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
    { "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
    { "quote": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi" },
    { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
    { "quote": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas Edison" },
    { "quote": "Our greatest glory is not in never falling, but in rising every time we fall.", "author": "Confucius" },
    { "quote": "It is never too late to be what you might have been.", "author": "George Eliot" },
    { "quote": "If you can dream it, you can do it.", "author": "Walt Disney" },
    { "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman" },
    { "quote": "The best revenge is massive success.", "author": "Frank Sinatra" },
    { "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "author": "Ralph Waldo Emerson" },
    { "quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
    { "quote": "You only live once, but if you do it right, once is enough.", "author": "Mae West" },
    { "quote": "I can accept failure, everyone fails at something. But I can't accept not trying.", "author": "Michael Jordan" },
    { "quote": "Your time is limited, so don't waste it living someone else's life.", "author": "Steve Jobs" },
    { "quote": "Whether you think you can or you think you can't, you're right.", "author": "Henry Ford" },
    { "quote": "A person who never made a mistake never tried anything new.", "author": "Albert Einstein" },
    { "quote": "The road to success and the road to failure are almost exactly the same.", "author": "Colin R. Davis" },
    { "quote": "You can't go back and change the beginning, but you can start where you are and change the ending.", "author": "C.S. Lewis" },
    { "quote": "Act as if what you do makes a difference. It does.", "author": "William James" },
    { "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett" },
    { "quote": "Don't wait. The time will never be just right.", "author": "Napoleon Hill" },
    { "quote": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis" },
    { "quote": "If you're going through hell, keep going.", "author": "Winston Churchill" },
    { "quote": "Everything has beauty, but not everyone sees it.", "author": "Confucius" },
    { "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
    { "quote": "What we achieve inwardly will change outer reality.", "author": "Plutarch" },
    { "quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
    { "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
    { "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.", "author": "William Butler Yeats" },
    { "quote": "The only way to have a friend is to be one.", "author": "Ralph Waldo Emerson" },
    { "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "author": "Zig Ziglar" },
    { "quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau" },
    { "quote": "Opportunities don't happen, you create them.", "author": "Chris Grosser" },
    { "quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "author": "Roy T. Bennett" },
    { "quote": "You are braver than you believe, stronger than you seem, and smarter than you think.", "author": "A.A. Milne" },
    { "quote": "The only impossible journey is the one you never begin.", "author": "Tony Robbins" },
    { "quote": "Everything you've ever wanted is on the other side of fear.", "author": "George Addair" },
    { "quote": "The man who moves a mountain begins by carrying away small stones.", "author": "Confucius" },
    { "quote": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt" },
    { "quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
    { "quote": "The best way to predict your future is to create it.", "author": "Abraham Lincoln" },
    { "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "author": "Unknown" },
    { "quote": "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", "author": "Unknown" },
    { "quote": "To love and be loved is to feel the sun from both sides.", "author": "David Viscott" },
    { "quote": "Love does not consist of gazing at each other, but in looking outward together in the same direction.", "author": "Antoine de Saint-Exupery" },
    { "quote": "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", "author": "Maya Angelou" },
    { "quote": "Love is composed of a single soul inhabiting two bodies.", "author": "Aristotle" },
    { "quote": "True love is not about perfection, it is about accepting each other's flaws.", "author": "Unknown" },
    { "quote": "You don't marry someone you can live with - you marry the person who you cannot live without.", "author": "Unknown" },
    { "quote": "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.", "author": "Gabriel Garcia Marquez" },
    { "quote": "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", "author": "Rabindranath Tagore" },
    { "quote": "When I saw you I fell in love, and you smiled because you knew.", "author": "Arrigo Boito" }
];

// Function to fetch a random quote
function fetchQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteText.innerHTML = `<em>"${selectedQuote.quote}"</em>`;
    authorText.textContent = `— ${selectedQuote.author}`;
}

generateBtn.addEventListener('click', fetchQuote);
