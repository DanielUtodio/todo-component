const dueDate = new Date("2026-04-16T18:00:00Z");

const timeEl = document.getElementById("timeRemaining");
const checkbox = document.getElementById("checkbox");
const status = document.getElementById("status");
const title = document.getElementById("title");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  timeEl.classList.remove("overdue", "soon", "normal");

  if (diff <= 0) {
    const hours = Math.abs(Math.floor(diff / (1000 * 60 * 60)));
    timeEl.textContent = `Overdue by ${hours} hours`;
    timeEl.classList.add("overdue");
    return;
  }

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 1) {
    timeEl.textContent = `Due in ${days} days`;
    timeEl.classList.add("normal");
  } else if (days === 1) {
    timeEl.textContent = "Due tomorrow";
    timeEl.classList.add("soon");
  } else if (hours > 1) {
    timeEl.textContent = `Due in ${hours} hours`;
    timeEl.classList.add("soon");
  } else if (minutes > 1) {
    timeEl.textContent = `Due in ${minutes} minutes`;
    timeEl.classList.add("soon");
  } else {
    timeEl.textContent = "Due now!";
    timeEl.classList.add("overdue");
  }
}
// Initial + auto update
updateTime();
setInterval(updateTime, 60000);

checkbox.addEventListener("change", () => {
  status.classList.remove("pending", "progress", "done");

  if (checkbox.checked) {
    status.textContent = "Done";
    status.classList.add("done");
    title.classList.add("completed");
  } else {
    status.textContent = "In Progress";
    status.classList.add("progress");
    title.classList.remove("completed");
  }
});

//buttons
document
  .querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document
  .querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => {
    console.log("delete clicked");
  });