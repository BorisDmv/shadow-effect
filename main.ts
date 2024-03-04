document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector(".btnDefault") as HTMLButtonElement;
    const copyCodeText = document.getElementById("copyCodeText") as HTMLElement;

    const slider = document.getElementById('blurRadiusSlider') as HTMLInputElement;
    const blurRadiusText = document.getElementById('blurRadiusValue') as HTMLElement;
    const shadowbox = document.querySelector('.shadowbox') as HTMLElement;

    // Function to update box-shadow value and style
    function updateShadow() {
        const value = slider.value;
        const boxShadowValue = `26px 10px ${value}px -17px rgba(0,0,0,0.75)`;
        shadowbox.style.boxShadow = boxShadowValue;
        blurRadiusText.textContent = value;
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

    // Initial update
    updateShadow();
});


