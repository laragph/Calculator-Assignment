function round_number(num) {
    num = num * 100;
    num = Math.round(num);
    num = num / 100;
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']");
inputs.forEach(function (input) {
    input.addEventListener('change', function(e) {
        const this_input = e.target;
        const input_value = parseFloat(this_input.value);
        const this_row = this_input.closest(".row");

        const twentyone = this_row.querySelector(".twentyone");
        const twentyone_price = parseFloat(twentyone.dataset.price);
        const twentyone_cost = input_value * twentyone_price;
        const twentyone_span = twentyone.querySelector("span");
        twentyone_span.innerHTML = round_number(twentyone_cost);

        const twentytwo = this_row.querySelector(".twentytwo");
        const twentytwo_price = parseFloat(twentytwo.dataset.price);
        const twentytwo_cost = input_value * twentytwo_price;
        const twentytwo_span = twentytwo.querySelector("span");
        twentytwo_span.innerHTML = round_number(twentytwo_cost);

        twentyone.classList.add("active");
        twentytwo.classList.add("active");

        let cheapest = twentyone;

        if(twentytwo_cost < twentyone_cost) {
            cheapest = twentytwo;
        }

        cheapest.classList.add("cheap");
        
    });
});