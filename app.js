document.getElementById('product-select').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption !== "#") {
        window.location.href = selectedOption;
    }
});



document.getElementById('order-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobno').value;
    const address = document.getElementById('address').value;

    if (!name || !mobile || !address) {
        alert('Please fill in all required fields.');
        event.preventDefault();
    }
});