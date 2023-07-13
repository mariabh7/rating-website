const submit = document.getElementById("submit");
const main1 = document.getElementById("main");
const list = document.querySelectorAll(".number");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", (clicked) => {
        list[i].style.border = "1px solid white";
        list[i].style.backgroundColor = "white";
        list[i].style.color = "hsl(25, 97%, 53%)";
        submit.addEventListener("click", () => {
            main1.innerHTML = `<div id="thank-you"><div class="th-img">
  <img
    src="illustration-thank-you.svg"
  />
</div>
<span id="rated"> You selected ${list[i].textContent} out of 5 </span>
<h2>Thank you !</h2>
<p class="rite">
  We appreciate you taking the time to give a rating. If you ever need
  more support . don't hesitate to get in touch!
</p>
</div>`
        })
    })
}
