export default function Feedback({ feedBack, positiveFeedback, totalFeedback }) {
    if (totalFeedback === 0) {
        return (
            <>
                <p>No feedback yet</p>           
            </>
        )
    }
        return (
            <div>
            <p>Good: {feedBack.good}</p>
            <p>Neutral: {feedBack.neutral}</p>
            <p>bad: {feedBack.bad}</p>
            <p>total: {totalFeedback}</p>
            <p>positive: {positiveFeedback}%</p>
        </div>
    )
}