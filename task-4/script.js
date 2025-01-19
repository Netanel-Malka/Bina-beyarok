const calendar = document.getElementById("calendar");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
  calendar.innerHTML = "";
  const year = date.getFullYear();
  const month = date.getMonth();

  // יצירת ימי השבוע
  const daysOfWeek = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
  daysOfWeek.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.style.fontWeight = "bold";
    calendar.appendChild(dayElement);
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  console.log(firstDayOfMonth);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement("div");
    calendar.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");

    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    dayElement.addEventListener("click", () => {
      const event = prompt("הוסף אירוע ליום זה:");
      if (event) {
        dayElement.textContent += `\n${event}`;
      }
    });

    calendar.appendChild(dayElement);
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
