
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
            });
}