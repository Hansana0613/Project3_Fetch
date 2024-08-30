
async function getRequest() {
    var data = {
        name: "Sahan"
    };

    var response = await fetch("X",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }
    );

    if (response.ok) {
        var text = await response.text();
        console.log(text);
    } else {
        console.log("Response Error");
    }
}