document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.querySelector(".btnDefault");
    var copyCodeText = document.getElementById("copyCodeText");
    var slider = document.getElementById('blurRadiusSlider');
    var blurRadiusText = document.getElementById('blurRadiusValue');
    var shadowbox = document.querySelector('.shadowbox');
    // Function to update box-shadow value and style
    function updateShadow() {
        var value = slider.value;
        var boxShadowValue = "26px 10px ".concat(value, "px -17px rgba(0,0,0,0.75)");
        shadowbox.style.boxShadow = boxShadowValue;
        blurRadiusText.textContent = value;
    }
    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(copyCodeText.innerText)
            .then(function () {
            copyButton.innerText = "COPIED!";
            setTimeout(function () {
                copyButton.innerText = "COPY CODE";
            }, 2000);
        })
            .catch(function (err) {
            console.error("Unable to copy:", err);
        });
    });
    // Event listener for slider change
    slider.addEventListener('input', updateShadow);
    // Initial update
    updateShadow();
});
