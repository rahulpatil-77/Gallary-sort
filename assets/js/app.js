const cl = console.log;

const selectImage = document.getElementById("selectImage");
// cl(selectImage);

const All = Array.from(document.querySelectorAll(".All"));

const onChangePiture = (eve) => {
    let getPicture = eve.target.value;
    cl(getPicture);
    All.forEach(div => div.classList.add('d-none'));
    let getDivs = Array.from(document.querySelectorAll("."+getPicture));
    getDivs.forEach(div => div.classList.remove('d-none'));

}



selectImage.addEventListener("change", onChangePiture)

