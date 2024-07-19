const workouts = {
  Monday: {
    type: "Rest",
    exercises: ["Rest"],
  },
  Tuesday: {
    type: "Upper",
    exercises: [
      ["Flat DB Press", "3 warmup sets", "1 working sets", "6 reps"],
      ["Machine Chest Press", "0 warmup set", "1 working sets", "10 reps"],
      ["2-Grip Lat Pulldown", "2 warmup set", "2 working sets", "12 reps"],
      ["Seated DB Shoulder Press", "1 warmup set", "3 working sets", "12 reps"],
      ["Seated Cable Row", "1 warmup set", "2 working sets", "12 reps"],
      ["EZ Bar Skull Crusher", "1 warmup set", "2 working sets", "15 reps"],
      ["DB Curl", "1 warmup set", "2 working sets", "15 reps"],
    ],
  },
  Wednesday: {
    type: "Lower",
    exercises: [
      ["Leg Press", "3 warmup sets", "1 working sets", "6 reps"],
      ["Barbell Squat", "0 warmup set", "1 working sets", "10 reps"],
      ["Seated Hamstring Curl", "1 warmup set", "1 working sets", "12 reps"],
      ["Standing Calf Raise", "1 warmup set", "2 working sets", "12 reps"],
      ["Roman Chair Crunch", "1 warmup set", "2 working sets", "12 reps"],
    ],
  },
  Thursday: {
    type: "Rest",
    exercises: ["Rest"],
  },
  Friday: {
    type: "Push",
    exercises: [
      ["Machine Shoulder Press", "2 warmup set", "3 working sets", "10 reps"],
      ["Flat DB Press", "2 warmup set", "2 working sets", "12 reps"],
      ["Triceps Pressdown", "1 warmup set", "2 working sets", "15 reps"],
      ["Close-Grip Push Up", "1 warmup set", "1 working sets", "Failure"],
      ["DB Lateral Raise", "1 warmup set", "2 working sets", "15 reps"],
    ],
  },
  Saturday: {
    type: "Pull",
    exercises: [
      ["Cable Lat Pullover", "1 warmup set", "1 working sets", "12 reps"],
      ["Lat Pulldown", "2 warmup set", "3 working sets", "8 reps"],
      ["T Bar Row", "2 warmup set", "2 working sets", "10 reps"],
      ["DB Curl", "1 warmup set", "2 working sets", "15 reps"],
      ["Reverse Pec Dec", "1 warmup set", "2 working sets", "12 reps"],
    ],
  },
  Sunday: {
    type: "Legs",
    exercises: [
      ["DB Romanian Deadlift", "2 warmup sets", "2 working sets", "12 reps"],
      ["Leg Press", "2 warmup set", "3 working sets", "12 reps"],
      ["Leg Extension", "1 warmup set", "1 working sets", "12 reps"],
      ["Seated Calf Raise", "1 warmup set", "2 working sets", "15 reps"],
      ["Plate-Weighted Crunch", "1 warmup set", "2 working sets", "15 reps"],
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

  const exerciseList = document.createElement("ul");
  exerciseList.classList.add("exercise-list");
  workouts[currentDay].exercises.forEach((exercise) => {
    const exerciseItem = document.createElement("li");
    const exerciseName = document.createElement("span");
    exerciseName.classList.add("exercise-name");
    exerciseName.textContent = Array.isArray(exercise) ? exercise[0] : exercise;

    const setInfo = document.createElement("span");
    setInfo.classList.add("set-info");
    if (Array.isArray(exercise)) {
      setInfo.textContent = `${exercise[1]}, ${exercise[2]}`;
    }

    const repCount = document.createElement("span");
    repCount.classList.add("rep-count");
    repCount.textContent = Array.isArray(exercise) ? exercise[3] : "";

    exerciseItem.appendChild(exerciseName);
    exerciseItem.appendChild(setInfo);
    exerciseItem.appendChild(repCount);
    exerciseList.appendChild(exerciseItem);
  });

  workoutPlan.appendChild(exerciseList);
  document.getElementById(
    "current-day"
  ).textContent = `${currentDay} : ${workouts[currentDay].type}`;
}

function displayAllWorkouts() {
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = "";

  for (const day in workouts) {
    const dayHeading = document.createElement("h2");
    dayHeading.textContent = `${day} : ${workouts[day].type}`;
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

      const setInfo = document.createElement("span");
      setInfo.classList.add("set-info");
      if (Array.isArray(exercise)) {
        setInfo.textContent = `${exercise[1]}, ${exercise[2]}`;
      }

      const repCount = document.createElement("span");
      repCount.classList.add("rep-count");
      repCount.textContent = Array.isArray(exercise) ? exercise[3] : "";

      exerciseItem.appendChild(exerciseName);
      exerciseItem.appendChild(setInfo);
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
