const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
  const suffix = this.dataset.sizing || "" // dataset is everythig with data prefix
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  )
}

inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))

// inputs.forEach(input =>
//   input.addEventListener("change", function() {
//     const suffix = input.dataset.sizing || "" // dataset is everythig with data prefix
//     document.documentElement.style.setProperty(
//       `--${input.name}`,
//       input.value + suffix
//     )
//   })
// )

// inputs.forEach(input =>
//   input.addEventListener("mousemove", function() {
//     const suffix = e.target.dataset.sizing || "" // dataset is everythig with data prefix
//     document.documentElement.style.setProperty(
//       `--${e.target.name}`,
//       e.target.value + suffix
//     )
//   })
// )

