const workoutForm = document.getElementById("workoutForm");

const resultSection = document.getElementById("result");

const workoutResult = document.getElementById("workoutResult");


workoutForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get user information

    const age =
        document.getElementById("age").value;

    const gender =
        document.getElementById("gender").value;

    const goal =
        document.getElementById("goal").value;

    const experience =
        document.getElementById("experience").value;

    const equipment =
        document.getElementById("equipment").value;

    const days =
        document.getElementById("days").value;


    // Create workout plan

    let workoutPlan;


    if (days === "3") {

        workoutPlan = [

            {
                day: "DAY 1",
                muscle: "CHEST + SHOULDERS + TRICEPS",
                exercises: [
                    ["Push Ups", "3 Sets × 10 Reps"],
                    ["Shoulder Press", "3 Sets × 10 Reps"],
                    ["Tricep Extensions", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 2",
                muscle: "BACK + BICEPS",
                exercises: [
                    ["Lat Pulldown", "3 Sets × 10 Reps"],
                    ["Seated Row", "3 Sets × 10 Reps"],
                    ["Bicep Curl", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 3",
                muscle: "LEGS + ABS",
                exercises: [
                    ["Squats", "3 Sets × 10 Reps"],
                    ["Lunges", "3 Sets × 10 Reps"],
                    ["Plank", "3 Sets × 30 Seconds"]
                ]
            }

        ];

    }


    else if (days === "4") {

        workoutPlan = [

            {
                day: "DAY 1",
                muscle: "CHEST + TRICEPS",
                exercises: [
                    ["Push Ups", "3 Sets × 10 Reps"],
                    ["Bench Press", "3 Sets × 10 Reps"],
                    ["Tricep Extensions", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 2",
                muscle: "BACK + BICEPS",
                exercises: [
                    ["Lat Pulldown", "3 Sets × 10 Reps"],
                    ["Seated Row", "3 Sets × 10 Reps"],
                    ["Bicep Curl", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 3",
                muscle: "LEGS",
                exercises: [
                    ["Squats", "3 Sets × 10 Reps"],
                    ["Lunges", "3 Sets × 10 Reps"],
                    ["Leg Raises", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 4",
                muscle: "SHOULDERS + ABS",
                exercises: [
                    ["Shoulder Press", "3 Sets × 10 Reps"],
                    ["Lateral Raises", "3 Sets × 12 Reps"],
                    ["Plank", "3 Sets × 30 Seconds"]
                ]
            }

        ];

    }


    else {

        workoutPlan = [

            {
                day: "DAY 1",
                muscle: "CHEST + TRICEPS",
                exercises: [
                    ["Push Ups", "3 Sets × 10 Reps"],
                    ["Bench Press", "3 Sets × 10 Reps"],
                    ["Tricep Extensions", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 2",
                muscle: "BACK + BICEPS",
                exercises: [
                    ["Lat Pulldown", "3 Sets × 10 Reps"],
                    ["Seated Row", "3 Sets × 10 Reps"],
                    ["Bicep Curl", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 3",
                muscle: "LEGS",
                exercises: [
                    ["Squats", "3 Sets × 10 Reps"],
                    ["Lunges", "3 Sets × 10 Reps"],
                    ["Leg Press", "3 Sets × 12 Reps"]
                ]
            },

            {
                day: "DAY 4",
                muscle: "SHOULDERS + ABS",
                exercises: [
                    ["Shoulder Press", "3 Sets × 10 Reps"],
                    ["Lateral Raises", "3 Sets × 12 Reps"],
                    ["Plank", "3 Sets × 30 Seconds"]
                ]
            },

            {
                day: "DAY 5",
                muscle: "FULL BODY",
                exercises: [
                    ["Squats", "3 Sets × 10 Reps"],
                    ["Push Ups", "3 Sets × 10 Reps"],
                    ["Bicep Curl", "3 Sets × 12 Reps"]
                ]
            }

        ];

    }


    // Convert goal into readable text

    let goalText = "";

    if (goal === "muscle") {
        goalText = "Muscle Gain";
    }

    else if (goal === "weightloss") {
        goalText = "Weight Loss";
    }

    else if (goal === "strength") {
        goalText = "Strength";
    }

    else {
        goalText = "General Fitness";
    }


    // Convert experience

    let experienceText =
        experience.charAt(0).toUpperCase()
        + experience.slice(1);


    // Create result HTML

    let resultHTML = `

        <div class="result-header">

            <h3>
                Your AI-Generated Workout Plan
            </h3>

            <div class="result-info">

                <span class="info-tag">
                    Age: ${age}
                </span>

                <span class="info-tag">
                    Goal: ${goalText}
                </span>

                <span class="info-tag">
                    Level: ${experienceText}
                </span>

                <span class="info-tag">
                    ${days} Days / Week
                </span>

            </div>

        </div>

    `;


    // Add workout days

    workoutPlan.forEach(function(day) {

        resultHTML += `

            <div class="workout-day">

                <h3>
                    ${day.day} — ${day.muscle}
                </h3>

        `;


        day.exercises.forEach(function(exercise) {

            resultHTML += `

                <div class="exercise">

                    <span class="exercise-name">
                        ${exercise[0]}
                    </span>

                    <span class="exercise-details">
                        ${exercise[1]}
                    </span>

                </div>

            `;

        });


        resultHTML += `

            </div>

        `;

    });


    resultHTML += `

        <div class="result-header">

            <h3>💡 Workout Tip</h3>

            <p style="color:#9da4b4; line-height:1.7;">
                Focus on proper exercise form and allow adequate
                recovery between workouts. Increase training
                difficulty gradually as your fitness improves.
            </p>

        </div>

    `;


   workoutResult.innerHTML = resultHTML + `
    <div style="text-align: center; margin-top: 25px;">
        <a href="monitor.html" class="feature-button">
            🎥 Start Workout & Monitor
        </a>
    </div>
`;

    // Show result

    resultSection.style.display = "block";


    // Scroll to result

    resultSection.scrollIntoView({
        behavior: "smooth"
    });

});