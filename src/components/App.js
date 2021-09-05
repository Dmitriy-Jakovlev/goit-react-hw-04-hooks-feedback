import { Fragment, useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import styles from './App.module.css'
import { FEEDBACK_OPTIONS } from './FeedbackOptions/constans';

export default function App() {

    const [ good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);
    
    const handleFeedback = options => {

        switch (options) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            default:
                return;
            
        }
    };
    const total = neutral + good + bad;
    const positiveFeedbackPercentage = Math.floor((good / total) * 100);

    // const { good, neutral, bad } = this.state
    // const total = this.countTotalFeedback()
    // const positivePercantage = this.countPositivePercantage()
    return (
        <Fragment>
            <Section title='Please leave feedback'>
                <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={handleFeedback} />
            </Section>
            <Section title='Statistics'>
                {total > 0 ? (

                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercantage={positiveFeedbackPercentage}
                    />
                    
                ) : (
                    <Notification message='No Feedback given'/>
                        
                )}
                
            </Section>
        </Fragment>
    )
}









//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

//     handleFeedback = e => {
//     const name = e.target.name;
//     this.setState(state => ({
//       ...state,
//       [name]: this.state[name] + 1
//     }));
//   };

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state
//         return good + neutral + bad
//     }
//     countPositivePercantage = () => {
//         const { good } = this.state;
//         const total = this.countTotalFeedback()
//         return total ? Math.round((good/total) * 100) : 0
//     }

    // render() {
    //     const { good, neutral, bad } = this.state
    //     const total = this.countTotalFeedback()
    //     const positivePercantage = this.countPositivePercantage()
    //     return (
    //         <div>
    //         <Section title='Please leave feedback'>
    //             <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={ this.handleFeedback}/>   
    //         </Section>
    //         <Section title='Statistics'>
    //             <Statistics
    //                 good={good}
    //                 neutral={neutral}
    //                 bad={bad}
    //                 total={total}
    //                 positivePercantage={positivePercantage}
    //             />
    //         </Section>
    //         </div>
    //     )
    // }

