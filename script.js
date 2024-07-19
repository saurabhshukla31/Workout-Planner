const workouts = {
  Monday: {
    type: "Rest",
    exercises: ["Rest"],
  },
  Tuesday: {
    type: "Upper",
    exercises: [
      ["Flat DB Press", "3", "1", "6"],
      ["Machine Chest Press", "0", "1", "10"],
      ["2-Grip Lat Pulldown", "2", "2", "12"],
      ["Seated DB Shoulder Press", "1", "3", "12"],
      ["Seated Cable Row", "1", "2", "12"],
      ["EZ Bar Skull Crusher", "1", "2", "15"],
      ["DB Curl", "1", "2", "15"],
    ],
  },
  Wednesday: {
    type: "Lower",
    exercises: [
      ["Leg Press", "3", "1", "6"],
      ["Barbell Squat", "0", "1", "10"],
      ["Seated Hamstring Curl", "1", "1", "12"],
      ["Standing Calf Raise", "1", "2", "12"],
      ["Roman Chair Crunch", "1", "2", "12"],
    ],
  },
  Thursday: {
    type: "Rest",
    exercises: ["Rest"],
  },
  Friday: {
    type: "Push",
    exercises: [
      ["Machine Shoulder Press", "2", "3", "10"],
      ["Flat DB Press", "2", "2", "12"],
      ["Triceps Pressdown", "1", "2", "15"],
      ["Close-Grip Push Up", "1", "1", "Failure"],
      ["DB Lateral Raise", "1", "2", "15"],
    ],
  },
  Saturday: {
    type: "Pull",
    exercises: [
      ["Cable Lat Pullover", "1", "1", "12"],
      ["Lat Pulldown", "2", "3", "8"],
      ["T Bar Row", "2", "2", "10"],
      ["DB Curl", "1", "2", "15"],
      ["Reverse Pec Dec", "1", "2", "12"],
    ],
  },
  Sunday: {
    type: "Legs",
    exercises: [
      ["DB Romanian Deadlift", "2", "2", "12"],
      ["Leg Press", "2", "3", "12"],
      ["Leg Extension", "1", "1", "12"],
      ["Seated Calf Raise", "1", "2", "15"],
      ["Plate-Weighted Crunch", "1", "2", "15"],
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

function createTable(exercises) {
  const table = document.createElement("table");
  table.classList.add("exercise-table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Exercise", "Warm-up Sets", "Working Sets", "Reps"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  exercises.forEach((exercise) => {
    const row = document.createElement("tr");

    exercise.forEach((cellText) => {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

function displayCurrentDayWorkout() {
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = "";
  const currentDay = getCurrentDay();

  const workout = workouts[currentDay];
  if (workout.exercises[0] === "Rest") {
    workoutPlan.textContent = "Rest Day";
  } else {
    const table = createTable(workout.exercises);
    workoutPlan.appendChild(table);
  }

  document.getElementById(
    "current-day"
  ).textContent = `${currentDay} : ${workout.type}`;
}

function displayAllWorkouts() {
  const workoutPlan = document.getElementById("workout-plan");
  workoutPlan.innerHTML = "";

  for (const day in workouts) {
    const dayHeading = document.createElement("h2");
    dayHeading.textContent = `${day} : ${workouts[day].type}`;
    workoutPlan.appendChild(dayHeading);

    if (workouts[day].exercises[0] === "Rest") {
      const restMessage = document.createElement("p");
      restMessage.textContent = "Rest Day";
      workoutPlan.appendChild(restMessage);
    } else {
      const table = createTable(workouts[day].exercises);
      workoutPlan.appendChild(table);
    }
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
