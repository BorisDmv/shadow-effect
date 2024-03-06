document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.querySelector(".btnDefault");
    var copyCodeText = document.getElementById("copyCodeText");
    var slider = document.getElementById('blurRadiusSlider');
    var blurRadiusText = document.getElementById('blurRadiusValue');
    var slider2 = document.getElementById('spreadRadiusSlider');
    var spreadRadiusText = document.getElementById('spreadRadiusValue');
    var slider3 = document.getElementById('horizontalSlider');
    var horizontalText = document.getElementById('horizontalValue');
    var slider4 = document.getElementById('verticalSlider');
    var verticalText = document.getElementById('verticalValue');
    var shadowbox = document.querySelector('.shadowbox');
    // Function to update box-shadow value and style
    function updateShadow() {
        var value = slider.value;
        var value2 = slider2.value;
        var value3 = slider3.value;
        var value4 = slider4.value;
        var boxShadowValue = "".concat(value3, "px ").concat(value4, "px ").concat(value, "px ").concat(value2, "px rgba(0,0,0,0.1)");
        shadowbox.style.boxShadow = boxShadowValue;
        blurRadiusText.textContent = value;
        spreadRadiusText.textContent = value2;
        horizontalText.textContent = value3;
        verticalText.textContent = value4;
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
    slider2.addEventListener('input', updateShadow);
    slider3.addEventListener('input', updateShadow);
    slider4.addEventListener('input', updateShadow);
    // Initial update
    updateShadow();
});
