function filter_vowels() {
    const input_text = document.getElementById("text_input").value;
    const output_div = document.getElementById("text_output");
    output_div.innerText = input_text.replace(/[^аеёиоуэюяы .-!?]/gi, "");
}