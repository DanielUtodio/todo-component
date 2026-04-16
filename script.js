let dueDate = new Date("2026-04-16T18:00:00");

const timeEl = document.getElementById("timeRemaining");
const overdueEl = document.getElementById("overdue");
const checkbox = document.getElementById("checkbox");
const status = document.getElementById("status");
const statusControl = document.getElementById("statusControl");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const priority = document.getElementById("priority");

const viewMode = document.getElementById("view-mode");
const editMode = document.getElementById("edit-mode");

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const editTitle = document.getElementById("todo-title");
const editDesc = document.getElementById("description");
const editPriority = document.getElementById("edit-priority");
const editDate = document.getElementById("due-date");

const dueDateText = document.getElementById("dueDate");

// -------- TIME --------
function updateTime() {
  if (status.textContent === "Done") {
    timeEl.textContent = "Completed";
    overdueEl.textContent = "";
    return;
  }

  const now = new Date();
  const diff = dueDate - now;

  overdueEl.textContent = "";

  if (diff <= 0) {
    const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
    timeEl.textContent = `Overdue by ${hours} hour${hours !== 1 ? "s" : ""}`;
    overdueEl.textContent = "Overdue";
    return;
  }

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) {
    timeEl.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
  } else if (hours >= 1) {
    timeEl.textContent = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    timeEl.textContent = `Due in ${minutes} minutes`;
  }
}

setInterval(updateTime, 60000);
updateTime();

// -------- STATUS --------
function updateStatus(value) {
  status.textContent = value;
  status.className = `status ${
    value === "Done" ? "done" :
    value === "In Progress" ? "progress" :
    "pending"
  }`;

  if (value === "Done") {
    checkbox.checked = true;
    title.classList.add("completed");

    // ✅ FIX HERE
    dueDateText.textContent = "Completed";
    dueDateText.style.color = "#22c55e";

    timeEl.textContent = "";
    overdueEl.textContent = "";

  } else {
    checkbox.checked = false;
    title.classList.remove("completed");

    // restore due date
    dueDateText.textContent = "Due " + dueDate.toLocaleDateString();
    dueDateText.style.color = "";

    updateTime();
  }

  statusControl.value = value;
}

checkbox.addEventListener("change", () => {
  updateStatus(checkbox.checked ? "Done" : "Pending");
});

statusControl.addEventListener("change", (e) => {
  updateStatus(e.target.value);
});

// -------- PRIORITY --------
function updatePriority(value) {
  priority.textContent = value;
  priority.className = `badge ${value}`;
}

updatePriority("medium");

editPriority.addEventListener("change", (e) => {
  updatePriority(e.target.value);
});

// -------- EDIT --------
editBtn.addEventListener("click", () => {
  viewMode.classList.add("hidden");
  editMode.classList.remove("hidden");

  editTitle.value = title.textContent;
  editDesc.value = desc.textContent;
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  title.textContent = editTitle.value;
  desc.textContent = editDesc.value;

  dueDate = new Date(editDate.value + "T23:59:59");
  dueDateText.textContent = "Due " + dueDate.toLocaleDateString();

  updateTime();

  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

// -------- EXPAND --------
const expandBtn = document.getElementById("expandBtn");
const collapsible = document.getElementById("collapsible");

expandBtn.addEventListener("click", () => {
  const expanded = expandBtn.getAttribute("aria-expanded") === "true";

  expandBtn.setAttribute("aria-expanded", !expanded);
  collapsible.style.display = expanded ? "none" : "block";

  expandBtn.textContent = expanded ? "Show more" : "Show less";
});