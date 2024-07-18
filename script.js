const workouts = {
  Monday: ["Rest"],
  Tuesday: [
    ["Flat DB Press", "4 sets", "10 reps"],
    ["Machine Chest Press", "3 sets", "12 reps"],
    ["2-Grip Lat Pulldown", "4 sets", "12 reps"],
    ["Seated DB Shoulder Press", "3 sets", "10 reps"],
    ["Seated Cable Row", "4 sets", "12 reps"],
    ["EZ Bar Skull Crusher", "3 sets", "15 reps"],
    ["DB Curl", "3 sets", "15 reps"],
  ],
  Wednesday: [
    ["Leg Press", "4 sets", "12 reps"],
    ["Hack Squat", "4 sets", "10 reps"],
    ["Seated Hamstring Curl", "3 sets", "15 reps"],
    ["Standing Calf Raise", "4 sets", "20 reps"],
    ["Hanging Leg Raise", "3 sets", "20 reps"],
  ],
  Thursday: ["Rest"],
  Friday: [
    ["Machine Shoulder Press", "4 sets", "10 reps"],
    ["Flat DB Press", "4 sets", "12 reps"],
    ["Triceps Pressdown", "3 sets", "15 reps"],
    ["Close-Grip Push Up", "3 sets", "Failure"],
    ["DB Lateral Raise", "3 sets", "15 reps"],
  ],
  Saturday: [
    ["Cable Lat Pullover", "3 sets", "15 reps"],
    ["Weighted Pullup", "4 sets", "8 reps"],
    ["T Bar Row", "4 sets", "10 reps"],
    ["DB Curl", "3 sets", "15 reps"],
    ["Reverse Pec Dec", "3 sets", "15 reps"],
  ],
  Sunday: [
    ["Romanian Deadlift", "4 sets", "10 reps"],
    ["Leg Press", "4 sets", "12 reps"],
    ["Leg Extension", "3 sets", "15 reps"],
    ["Seated Calf Raise", "4 sets", "20 reps"],
    ["Cable Crunch", "3 sets", "20 reps"],
  ],
};

function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

function displayCurrentDayWorkout() {
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = "";
  const currentDay = getCurrentDay();

  const exerciseList = document.createElement("ul");
  exerciseList.classList.add("exercise-list");
  workouts[currentDay].forEach((exercise) => {
    const exerciseItem = document.createElement("li");
    const exerciseName = document.createElement("span");
    exerciseName.classList.add("exercise-name");
    exerciseName.textContent = Array.isArray(exercise) ? exercise[0] : exercise;
    const setCount = document.createElement("span");
    setCount.classList.add("set-count");
    setCount.textContent = Array.isArray(exercise) ? exercise[1] : "";
    const repCount = document.createElement("span");
    repCount.classList.add("rep-count");
    repCount.textContent = Array.isArray(exercise) ? exercise[2] : "";
    exerciseItem.appendChild(exerciseName);
    exerciseItem.appendChild(setCount);
    exerciseItem.appendChild(repCount);
    exerciseList.appendChild(exerciseItem);
  });

  workoutPlan.appendChild(exerciseList);
  document.getElementById("current-day").textContent = currentDay;
}

function displayAllWorkouts() {
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = "";

  for (const day in workouts) {
    const dayHeading = document.createElement("h2");
    dayHeading.textContent = day;
    workoutPlan.appendChild(dayHeading);

    const exerciseList = document.createElement("ul");
    exerciseList.classList.add("exercise-list");
    workouts[day].forEach((exercise) => {
      const exerciseItem = document.createElement("li");
      const exerciseName = document.createElement("span");
      exerciseName.classList.add("exercise-name");
      exerciseName.textContent = Array.isArray(exercise)
        ? exercise[0]
        : exercise;
      const setCount = document.createElement("span");
      setCount.classList.add("set-count");
      setCount.textContent = Array.isArray(exercise) ? exercise[1] : "";
      const repCount = document.createElement("span");
      repCount.classList.add("rep-count");
      repCount.textContent = Array.isArray(exercise) ? exercise[2] : "";
      exerciseItem.appendChild(exerciseName);
      exerciseItem.appendChild(setCount);
      exerciseItem.appendChild(repCount);
      exerciseList.appendChild(exerciseItem);
    });

    workoutPlan.appendChild(exerciseList);
  }

  document.getElementById("current-day").textContent = "Weekly View";
}

function toggleView() {
  const toggleSlider = document.getElementById("toggle-slider");
  const isShowingAll = toggleSlider.checked;

  if (isShowingAll) {
    displayAllWorkouts();
  } else {
    displayCurrentDayWorkout();
  }
}

document.getElementById("toggle-slider").addEventListener("change", toggleView);

displayCurrentDayWorkout();
