document.getElementById("add").addEventListener("click", function() {
    let add_chapter = document.getElementById("chapter").value;
    if (add_chapter !=="") {
        const Del_Button = document.createElement("button");
        Del_Button.innerHTML = "\u274C";

        const chapter_added = document.createElement("li");
        chapter_added.textContent = add_chapter;
        chapter_added.appendChild(Del_Button);

        document.getElementById("chapter_list").appendChild(chapter_added);

        document.getElementById("chapter").value = "";
    }


});