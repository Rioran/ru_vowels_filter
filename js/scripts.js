function filter_text(expression) {
    const input_text = document.getElementById("text_input").value;
    const output_div = document.getElementById("text_output");
    output_div.innerText = input_text.replace(expression, "").toLowerCase();
}

function copy_output() {
    const text_to_copy = document.getElementById("text_output");
    text_to_copy.select();
    text_to_copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text_to_copy.value);
  }