import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Question cards dictionary
const questionCards = [
    {
        id: 1,
        question: "What do all of the angles in a triangle add up to?",
        answer: "180 degrees",
        difficulty: 'rgba(207, 207, 127, 0.75)'
    },
    {
        id: 2,
        question: "What is the slope-intercept form of a linear equation?",
        answer: "y = mx + b",
        difficulty: 'rgba(143, 207, 143, 0.75)'
    },
    {
        id: 3,
        question: "What is the Pythagorean theorem?",
        answer: "a^2 + b^2 = c^2",
        difficulty: 'rgba(143, 207, 143, 0.75)'
    },
    {
        id: 4,
        question: "How do you calculate the average of a set of numbers?",
        answer: "Add all the numbers together and divide by the total count.",
        difficulty: 'rgba(143, 207, 143, 0.75)'
    },
    {
        id: 5,
        question: "What is the formula for the area of a circle?",
        answer: "A = πr^2",
        difficulty: 'rgba(143, 207, 143, 0.75)'
    },
    {
        id: 6,
        question: "What is the equation of a circle?",
        answer: "(x - h)^2 + (y - k)^2 = r^2",
        difficulty: 'rgba(207, 143, 143, 0.75)'
    },
    {
        id: 7,
        question: "What do all of the angles in a four-sided polygon add up to?",
        answer: "360 degrees",
        difficulty: 'rgba(207, 207, 127, 0.75)'
    },
    {
        id: 8,
        question: "How do you find the midpoint of a line segment?",
        answer: "Add the x-coordinates of the endpoints and divide by 2, then do the same for the y-coordinates.",
        difficulty: 'rgba(207, 143, 143, 0.75)'
    },
    {
        id: 9,
        question: "Angles that make up a straight line add up to what?",
        answer: "180 degrees",
        difficulty: 'rgba(143, 207, 143, 0.6)'
    },
    {
        id: 10,
        question: "How do you find the surface area of a shape?",
        answer: "Calculate the area of each face and add them together.",
        difficulty: 'rgba(207, 143, 143, 0.6)'
    }
]

// Card component
function Card({ card, isFlipped, onClick }) {
    return (
        <div
            className="card flashcard"
            onClick={onClick}
            style={{ backgroundColor: card.difficulty }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
        >
            {/* Display question or answer based on isFlipped state */}
            {!isFlipped ? (
                <h2>{card.question}</h2>
            ) : (
                <h2>{card.answer}</h2>
            )}
        </div>
    )
}

// Main App component
function App() {
    // State to track current card index and if the card is flipped
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    // Toggle card flip state
    const handleCardClick = () => {
        setIsFlipped((s) => !s)
    }

    // Move to the next card and reset the flip state
    const nextCard = () => {
        setCurrentIndex((i) => (i + 1) % questionCards.length)
        setIsFlipped(false)
    }

    // Keep track of the current card
    const currentCard = questionCards[currentIndex]

    return (
        <div className="App">
            <div className="title">
                <h1>SAT/ACT Math Rules & Formulas</h1>
                <h2>
                    Use this guide to refresh on the rules and formulas <br /> that you should
                    be familiar with <br /> for the math section.
                </h2>
                <h3>Green = Easy, Yellow = Medium, Red = Hard</h3>
            </div>
            {/* Flashcard display and next button */}
            <div className="flashcard-container">
                <Card card={currentCard} isFlipped={isFlipped} onClick={handleCardClick} />
                <h3>There are 10 cards in this study guide</h3>
            </div>
            <button onClick={nextCard}>Next Card</button>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)

