let form = document.querySelector("form");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#sub").value = "Submiting..";
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbz6Fk7-PJ4oQA4Rv7gm-zJ6Uvwwlmx5_fQ_zx1nAKoxJbZ9cwFr8hYC8rGUGvu3b3c6Qg/exec', {
                    method: "POST",
                    body: data
                })
                .then(res => res.text())
                .then(data => {
                    document.querySelector("#msg").innerHTML = data;
                    document.querySelector("#sub").value = "Submit"
                });
        })