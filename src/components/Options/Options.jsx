import OptionsCss from './Options.module.css'
export default function Options({ updateFeedback, resetFeedBack, totalFeedback}) {
    return (
        <div className={OptionsCss.buttonBox}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={() => resetFeedBack()}>Reset</button>}
        </div>
    )
}



