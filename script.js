const workouts = {
  Monday: { form: "Rest", exercises: [] },
  Tuesday: {
    form: "Chest & Triceps",
    exercises: [
      ["Close Grip Pushups", "Till Failure"],
      ["Barbell Bench Press", "3 sets", "6 reps"],
      ["DB Incline Press", "3 sets", "8 reps"],
      ["Pec Deck", "3 sets", "12 reps"],
      ["Tricep Pressdown", "3 sets", "12 reps"],
      ["DB Skull Crusher", "3 sets", "12 reps"],
    ],
  },
  Wednesday: {
    form: "Back & Biceps",
    exercises: [
      ["Assisted Pullups", "Till Failure"],
      ["Lat Pulldown", "3 sets", "8 reps"],
      ["Seated Cable Row", "3 sets", "10 reps"],
      ["T-bar Row", "3 sets", "12 reps"],
      ["Seated Dumbbell Curl", "3 sets", "12 reps"],
      ["Bayesian Cable Curl", "3 sets", "10 reps"],
      ["Preacher Curl", "3 sets", "10 reps"],
      ["Hammer Curl", "3 sets", "12 reps"],
    ],
  },
  Thursday: {
    form: "Legs & Shoulders",
    exercises: [
      ["Squats", "Till Failure"],
      ["Smith Machine Squat", "3 sets", "10 reps"],
      ["Leg Press", "3 sets", "12 reps"],
      ["Leg Extension", "3 sets", "15 reps"],
      ["Reverse Pec Deck", "3 sets", "10 reps"],
      ["Machine Shoulder Press", "3 sets", "12 reps"],
      ["Cable Lateral Raises", "3 sets", "10 reps"],
      ["Front Raises", "3 sets", "10 reps"],
    ],
  },
  Friday: {
    form: "Chest & Triceps",
    exercises: [
      ["Close Grip Pushups", "Till Failure"],
      ["Barbell Bench Press", "3 sets", "6 reps"],
      ["DB Incline Press", "3 sets", "8 reps"],
      ["Pec Deck", "3 sets", "12 reps"],
      ["Tricep Pressdown", "3 sets", "12 reps"],
      ["DB Skull Crusher", "3 sets", "12 reps"],
    ],
  },
  Saturday: {
    form: "Back & Biceps",
    exercises: [
      ["Assisted Pullups", "Till Failure"],
      ["Lat Pulldown", "3 sets", "8 reps"],
      ["Seated Cable Row", "3 sets", "10 reps"],
      ["T-bar Row", "3 sets", "12 reps"],
      ["Seated Dumbbell Curl", "3 sets", "12 reps"],
      ["Bayesian Cable Curl", "3 sets", "10 reps"],
      ["Preacher Curl", "3 sets", "10 reps"],
      ["Hammer Curl", "3 sets", "12 reps"],
    ],
  },
  Sunday: {
    form: "Legs & Shoulders",
    exercises: [
      ["Squats", "Till Failure"],
      ["Smith Machine Squat", "3 sets", "10 reps"],
      ["Leg Press", "3 sets", "12 reps"],
      ["Leg Extension", "3 sets", "15 reps"],
      ["Reverse Pec Deck", "3 sets", "10 reps"],
      ["Machine Shoulder Press", "3 sets", "12 reps"],
      ["Cable Lateral Raises", "3 sets", "10 reps"],
      ["Front Raises", "3 sets", "10 reps"],
    ],
  },
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

  const dayForm = document.createElement("h3");
  dayForm.textContent = `${currentDay} : ${workouts[currentDay].form}`;
  workoutPlan.appendChild(dayForm);

  const exerciseList = document.createElement("ul");
  exerciseList.classList.add("exercise-list");
  workouts[currentDay].exercises.forEach((exercise) => {
    const exerciseItem = document.createElement("li");
    const exerciseName = document.createElement("span");
    exerciseName.classList.add("exercise-name");
    exerciseName.textContent = exercise[0];
    const setCount = document.createElement("span");
    setCount.classList.add("set-count");
    setCount.textContent = exercise[1] || "";
    const repCount = document.createElement("span");
    repCount.classList.add("rep-count");
    repCount.textContent = exercise[2] || "";
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
    dayHeading.textContent = `${day} : ${workouts[day].form}`;
    workoutPlan.appendChild(dayHeading);

    const exerciseList = document.createElement("ul");
    exerciseList.classList.add("exercise-list");
    workouts[day].exercises.forEach((exercise) => {
      const exerciseItem = document.createElement("li");
      const exerciseName = document.createElement("span");
      exerciseName.classList.add("exercise-name");
      exerciseName.textContent = exercise[0];
      const setCount = document.createElement("span");
      setCount.classList.add("set-count");
      setCount.textContent = exercise[1] || "";
      const repCount = document.createElement("span");
      repCount.classList.add("rep-count");
      repCount.textContent = exercise[2] || "";
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
