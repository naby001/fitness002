import React, { useState } from 'react';
import './Recommendation.css'; // Import the CSS file

const Recommendation = () => {
    const [expandedPlan, setExpandedPlan] = useState(null);

    const togglePlan = (plan) => {
        if (expandedPlan === plan) {
            setExpandedPlan(null); // Collapse if already expanded
        } else {
            setExpandedPlan(plan); // Expand the clicked plan
        }
    };

    return (
        <div className="recommendation-container">
            <h1>Fitness Recommendations</h1>
            <p>Here are some personalized fitness recommendations for you:</p>

            <div className="workout-plans">
                {/* Easy Workout Plan */}
                <div
                    className={`workout-card ${expandedPlan === 'easy' ? 'expanded' : ''}`}
                    onClick={() => togglePlan('easy')}
                >
                    <h2>Easy Workout Plan</h2>
                    {expandedPlan === 'easy' && (
                        <ul>
                            <li><strong>Monday:</strong> 20-minute walk, 10-minute stretching</li>
                            <li><strong>Wednesday:</strong> 15-minute bodyweight exercises (squats, lunges, push-ups)</li>
                            <li><strong>Friday:</strong> 20-minute yoga session</li>
                        </ul>
                    )}
                </div>

                {/* Medium Workout Plan */}
                <div
                    className={`workout-card ${expandedPlan === 'medium' ? 'expanded' : ''}`}
                    onClick={() => togglePlan('medium')}
                >
                    <h2>Medium Workout Plan</h2>
                    {expandedPlan === 'medium' && (
                        <ul>
                            <li><strong>Monday:</strong> 30-minute jog, 10-minute core exercises (planks, sit-ups)</li>
                            <li><strong>Wednesday:</strong> 20-minute HIIT (High-Intensity Interval Training)</li>
                            <li><strong>Friday:</strong> 30-minute strength training (dumbbells, resistance bands)</li>
                            <li><strong>Saturday:</strong> 20-minute yoga or stretching</li>
                        </ul>
                    )}
                </div>

                {/* Hard Workout Plan */}
                <div
                    className={`workout-card ${expandedPlan === 'hard' ? 'expanded' : ''}`}
                    onClick={() => togglePlan('hard')}
                >
                    <h2>Hard Workout Plan</h2>
                    {expandedPlan === 'hard' && (
                        <ul>
                            <li><strong>Monday:</strong> 45-minute run, 15-minute core workout</li>
                            <li><strong>Tuesday:</strong> 30-minute heavy weightlifting (squats, deadlifts, bench press)</li>
                            <li><strong>Thursday:</strong> 30-minute HIIT with weights</li>
                            <li><strong>Friday:</strong> 45-minute CrossFit or circuit training</li>
                            <li><strong>Saturday:</strong> 30-minute yoga or mobility work</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recommendation;