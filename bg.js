function bg() {
    let x = Math.floor(Math.random() * 5 + 1);
    console.log(x);
    document.body.style.backgroundImage = "url('bg/" + x + ".jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
}