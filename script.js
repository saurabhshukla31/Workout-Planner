const workouts = {
  Monday: { form: "Rest", exercises: [] },
  Tuesday: {
    form: "Push",
    exercises: [
      ["DB Bench Press", "3 sets", "8-12 reps"],
      ["Incline Barbell Bench Press", "3 sets", "8-12 reps"],
      ["Machine Shoulder Press", "3 sets", "8-12 reps"],
      ["Pec Deck", "3 sets", "10-15 reps"],
      ["Lateral Raises", "3 sets", "10-15 reps"],
      ["Front Raises", "3 sets", "10-15 reps"],
      ["Tricep Pressdown", "3 sets", "10-15 reps"],
      ["EZ Bar Skull Crusher", "3 sets", "8-12 reps"],
    ],
  },
  Wednesday: {
    form: "Pull",
    exercises: [
      ["Short Grip Lat Pulldown", "3 sets", "8-12 reps"],
      ["Wide Grip Lat Pulldown", "3 sets", "8-12 reps"],
      ["Wide Grip Seated Cable Row", "3 sets", "8-12 reps"],
      ["Bicep Grip Seated Cable Row", "3 sets", "10-15 reps"],
      ["Reverse Pec Deck", "3 sets", "10-15 reps"],
      ["DB Curl", "3 sets", "10-15 reps"],
      ["Preacher Curl", "3 sets", "10-15 reps"],
      ["Bar Bicep Curl", "3 sets", "10-15 reps"],
    ],
  },
  Thursday: {
    form: "Legs",
    exercises: [
      ["Smith Machine Squat", "3 sets", "8-12 reps"],
      ["Bulgarian Split Squat", "3 sets", "8-12 reps"],
      ["Leg Press", "3 sets", "10-15 reps"],
      ["Leg Extension", "3 sets", "10-15 reps"],
      ["Calf Raise", "3 sets", "12-20 reps"],
      ["Roman Chair Leg Raise", "3 sets", "15-20 reps"],
      ["Plank", "Till Failure"],
    ],
  },
  Friday: {
    form: "Push",
    exercises: [
      ["DB Bench Press", "3 sets", "8-12 reps"],
      ["Incline Barbell Bench Press", "3 sets", "8-12 reps"],
      ["Machine Shoulder Press", "3 sets", "8-12 reps"],
      ["Pec Deck", "3 sets", "10-15 reps"],
      ["Lateral Raises", "3 sets", "10-15 reps"],
      ["Front Raises", "3 sets", "10-15 reps"],
      ["Tricep Pressdown", "3 sets", "10-15 reps"],
      ["EZ Bar Skull Crusher", "3 sets", "8-12 reps"],
    ],
  },
  Saturday: {
    form: "Pull",
    exercises: [
      ["Short Grip Lat Pulldown", "3 sets", "8-12 reps"],
      ["Wide Grip Lat Pulldown", "3 sets", "8-12 reps"],
      ["Wide Grip Seated Cable Row", "3 sets", "8-12 reps"],
      ["Bicep Grip Seated Cable Row", "3 sets", "10-15 reps"],
      ["Reverse Pec Deck", "3 sets", "10-15 reps"],
      ["DB Curl", "3 sets", "10-15 reps"],
      ["Preacher Curl", "3 sets", "10-15 reps"],
      ["Bar Bicep Curl", "3 sets", "10-15 reps"],
    ],
  },
  Sunday: {
    form: "Legs",
    exercises: [
      ["Smith Machine Squat", "3 sets", "8-12 reps"],
      ["Bulgarian Split Squat", "3 sets", "8-12 reps"],
      ["Leg Press", "3 sets", "10-15 reps"],
      ["Leg Extension", "3 sets", "10-15 reps"],
      ["Calf Raise", "3 sets", "12-20 reps"],
      ["Roman Chair Leg Raise", "3 sets", "15-20 reps"],
      ["Plank", "Till Failure"],
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
    dayHeading.textContent = `${day} : ${workouts[day].form}`;
    workoutPlan.appendChild(dayHeading);

    const exerciseList = document.createElement("ul");
    exerciseList.classList.add("exercise-list");
    workouts[day].exercises.forEach((exercise) => {
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
