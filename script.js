const workouts = {
  Monday: {
    form: "Chest & Triceps & Shoulder",
    exercises: [
      ["Barbell Bench Press", "3 sets"],
      ["Incline DB Press", "3 sets"],
      ["Pec Deck", "3 sets"],
      ["DB Shoulder Press", "3 sets"],
      ["DB Lateral Raises", "3 sets"],
      ["Cable Tricep Pressdown", "3 sets"],
      ["Machine Tricep Pressdown", "3 sets"],
      ["Pushups", "Till Failure"],
    ],
  },
  Tuesday: {
    form: "Back & Biceps",
    exercises: [
      ["Assisted Pullups", "Till Failure"],
      ["Lat Pulldown", "3 sets"],
      ["Seated Cable Row", "3 sets"],
      ["Reverse Pec Deck", "3 sets"],
      ["Dumbbell Curl", "3 sets"],
      ["Cable Bicep Curl", "3 sets"],
      ["Preacher Curl", "3 sets"],
    ],
  },
  Wednesday: {
    form: "Chest & Triceps & Shoulder",
    exercises: [
      ["Barbell Bench Press", "3 sets"],
      ["Incline DB Press", "3 sets"],
      ["Pec Deck", "3 sets"],
      ["DB Shoulder Press", "3 sets"],
      ["DB Lateral Raises", "3 sets"],
      ["Cable Tricep Pressdown", "3 sets"],
      ["Machine Tricep Pressdown", "3 sets"],
      ["Pushups", "Till Failure"],
    ],
  },
  Thursday: {
    form: "Back & Biceps",
    exercises: [
      ["Assisted Pullups", "Till Failure"],
      ["Lat Pulldown", "3 sets"],
      ["Seated Cable Row", "3 sets"],
      ["Reverse Pec Deck", "3 sets"],
      ["Dumbbell Curl", "3 sets"],
      ["Cable Bicep Curl", "3 sets"],
      ["Preacher Curl", "3 sets"],
    ],
  },
  Friday: {
    form: "Legs & Shoulder",
    exercises: [
      ["Squats", "Till Failure"],
      ["Leg Press", "3 sets"],
      ["Leg Extension", "3 sets"],
      ["Lying Leg Curl", "3 sets"],
      ["Hip Abduction Machine", "3 sets"],
      ["Standing Calf Raises", "3 sets"],
      ["Shoulder Press", "3 sets"],
      ["Lateral Raises", "3 sets"],
    ],
  },
  Saturday: {
    form: "Rest",
    exercises: [],
  },
  Sunday: {
    form: "Rest",
    exercises: [],
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

    exerciseItem.appendChild(exerciseName);
    exerciseItem.appendChild(setCount);
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

      exerciseItem.appendChild(exerciseName);
      exerciseItem.appendChild(setCount);
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

