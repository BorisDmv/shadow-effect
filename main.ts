document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector(".btnDefault") as HTMLButtonElement;
    const copyCodeText = document.getElementById("copyCodeText") as HTMLElement;

    const slider = document.getElementById('blurRadiusSlider') as HTMLInputElement;
    const blurRadiusText = document.getElementById('blurRadiusValue') as HTMLElement;

    const slider2 = document.getElementById('spreadRadiusSlider') as HTMLInputElement;
    const spreadRadiusText = document.getElementById('spreadRadiusValue') as HTMLElement;

    const slider3 = document.getElementById('horizontalSlider') as HTMLInputElement;
    const horizontalText = document.getElementById('horizontalValue') as HTMLElement;

    const slider4 = document.getElementById('verticalSlider') as HTMLInputElement;
    const verticalText = document.getElementById('verticalValue') as HTMLElement;

    const shadowbox = document.querySelector('.shadowbox') as HTMLElement;

    // Function to update box-shadow value and style
    function updateShadow() {
        const value = slider.value;
        const value2 = slider2.value;
        const value3 = slider3.value;
        const value4 = slider4.value;

        const boxShadowValue = `${value3}px ${value4}px ${value}px ${value2}px rgba(0,0,0,0.1)`;
        shadowbox.style.boxShadow = boxShadowValue;
        blurRadiusText.textContent = value;
        spreadRadiusText.textContent = value2;
        horizontalText.textContent = value3;
        verticalText.textContent = value4;
    }

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(copyCodeText.innerText)
            .then(function() {
                copyButton.innerText = "COPIED!";
                setTimeout(function() {
                    copyButton.innerText = "COPY CODE";
                }, 2000);
            })
            .catch(function(err) {
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


